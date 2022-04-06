// 
// welaunch-backend
// AccountController.cs
// Created:21-03-2022
// By:Seth Climenhaga

using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using welaunch_backend.DTOs;
using welaunch_backend.Models;
using OpenIddict.Validation.AspNetCore;

namespace welaunch_backend.Controllers
{
    public class AccountController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public AccountController(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            _userManager = userManager;
            _roleManager = roleManager;
        }
        
        [AllowAnonymous]
        //[ValidateAntiForgeryToken]
        [HttpPost("~/api/account/register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto model)
        {
            if (ModelState.IsValid)
            {
                if(model.Password != model.ConfirmPassword) 
                {
                    return BadRequest(new { general = new[] {"Password and Confirm Password not match"} });
                }

                var user = new ApplicationUser
                { 
                    UserName = model.Email, 
                    Email = model.Email,
                };

                var result = await _userManager.CreateAsync(user, model.Password);

                if (!await _roleManager.RoleExistsAsync(model.Role))
                    return BadRequest();
                
                IdentityResult roleResult = await  _userManager.AddToRoleAsync(user, model.Role);
                
                if (result.Succeeded && roleResult.Succeeded)
                    return Ok();
            
                return BadRequest(new { general = result.Errors.Select(x => x.Description).ToArray() });
        
            }  
  
            return BadRequest(new { general = ModelState.SelectMany(x => x.Value.Errors)
                .Select(x => x.ErrorMessage).ToArray() });
            
        }

        [Authorize(AuthenticationSchemes = OpenIddictValidationAspNetCoreDefaults.AuthenticationScheme)]
        [HttpGet("/api/account/user")]
        public async Task<IActionResult> Userinfo()
        {
            var user = await _userManager.GetUserAsync(User);

            var userRoles = await _userManager.GetRolesAsync(user);

            return Ok(new { user = user, userRoles = userRoles });
        }

    }
}