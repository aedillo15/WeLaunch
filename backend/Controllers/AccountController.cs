// 
// welaunch-backend
// AccountController.cs
// Created:21-03-2022
// By:Seth Climenhaga

using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

using welaunch_backend.DTOs;
using welaunch_backend.Models.IdentityModels;

namespace welaunch_backend.Controllers
{
    public class AccountController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public AccountController(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
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
                    Email = model.Email 
                };

                var result = await _userManager.CreateAsync(user, model.Password);

                if (result.Succeeded)
                    return Ok();
            
                return BadRequest(new { general = result.Errors.Select(x => x.Description).ToArray() });
        
            }  
  
            return BadRequest(new { general = ModelState.SelectMany(x => x.Value.Errors)
                .Select(x => x.ErrorMessage).ToArray() });
            
        }

    }
}