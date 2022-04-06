using System;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using OpenIddict.Abstractions;
using OpenIddict.Server.AspNetCore;
using welaunch_backend.Models.IdentityModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authentication;

namespace welaunch_backend.Controllers
{
    public class AuthorizationController : Controller
    {
        private readonly IOpenIddictApplicationManager _applicationManager;
        private readonly IOpenIddictAuthorizationManager _authorizationManager;
        private readonly IOpenIddictScopeManager _scopeManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly UserManager<ApplicationUser> _userManager;

        public AuthorizationController(
            IOpenIddictApplicationManager applicationManager,
            IOpenIddictAuthorizationManager authorizationManager,
            IOpenIddictScopeManager scopeManager,
            SignInManager<ApplicationUser> signInManager,
            UserManager<ApplicationUser> userManager
            )
        {
            _applicationManager = applicationManager;
            _authorizationManager = authorizationManager;
            _scopeManager = scopeManager;
            _signInManager = signInManager;
            _userManager = userManager;
        }

        [HttpPost("~/connect/token")]
        [Consumes("application/x-www-form-urlencoded")]
        [Produces("application/json")]
        public async Task<IActionResult> Exchange()
        {

            var oidcRequest = HttpContext.GetOpenIddictServerRequest();

            if (oidcRequest == null)
                return BadRequest(new OpenIddictResponse
                {
                    Error = "Null Request"
                });

            if (oidcRequest.IsPasswordGrantType())
                return await TokensForPasswordGrantType(oidcRequest);

            if (oidcRequest.IsRefreshTokenGrantType())
            {
                // return tokens for refresh token flow
            }

            if (oidcRequest.GrantType == "custom_flow_name")
            {
                // return tokens for custom flow
            }

            return BadRequest(new OpenIddictResponse
            {
                Error = OpenIddictConstants.Errors.UnsupportedGrantType
            });
        }

        private async Task<IActionResult> TokensForPasswordGrantType(OpenIddictRequest request)
        {
            var user = await _userManager.FindByNameAsync(request.Username);
            if (user == null)
                return Unauthorized();

            var signInResult = await _signInManager.CheckPasswordSignInAsync(user, request.Password, false);
            if (!signInResult.Succeeded)
                return Unauthorized();

            var identity = new ClaimsIdentity(
                TokenValidationParameters.DefaultAuthenticationType,
                OpenIddictConstants.Claims.Name,
                OpenIddictConstants.Claims.Role);

            identity.AddClaim(OpenIddictConstants.Claims.Subject, user.Id,
                OpenIddictConstants.Destinations.AccessToken);
            identity.AddClaim(OpenIddictConstants.Claims.Username, user.UserName,
                OpenIddictConstants.Destinations.AccessToken);
            // Add more claims if necessary

            var roles = await _userManager.GetRolesAsync(user);
            foreach (var userRole in roles)
            {
                identity.AddClaim(OpenIddictConstants.Claims.Role, userRole,
                    OpenIddictConstants.Destinations.AccessToken);
            }

            var claimsPrincipal = new ClaimsPrincipal(identity);
            claimsPrincipal.SetScopes(new string[]
            {
                OpenIddictConstants.Scopes.Roles,
                OpenIddictConstants.Scopes.OfflineAccess,
                OpenIddictConstants.Scopes.Email,
                OpenIddictConstants.Scopes.Profile,
            });

            return SignIn(claimsPrincipal, OpenIddictServerAspNetCoreDefaults.AuthenticationScheme);
        }


        [HttpGet("~/connect/authorize")]
        [HttpPost("~/connect/authorize")]
        [IgnoreAntiforgeryToken]
        public async Task<IActionResult> Authorize()
        {

            var request = HttpContext.GetOpenIddictServerRequest() ?? throw new InvalidOperationException("The OpenID Connect request cannot be retrieved.");

            var result = await HttpContext.AuthenticateAsync(IdentityConstants.ApplicationScheme);

            // Retrieve the profile of the logged in user.
            var user = await _userManager.GetUserAsync(result.Principal) ??
                throw new InvalidOperationException("The user details cannot be retrieved.");

            Console.WriteLine(user);

            return Ok(user);

        }

    }
}
