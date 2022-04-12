// 
// welaunch-backend
// TestController.cs
// Created:21-03-2022
// By:Seth Climenhaga

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OpenIddict.Validation.AspNetCore;

namespace welaunch_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        /// <summary>
        /// Test endpoint
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IActionResult Test()
        {
            return Ok();
        }
        
        /// <summary>
        /// Test endpoint Authorized
        /// </summary>
        /// <returns></returns>
        [HttpGet("/api/TestAuth")]
        [Authorize(AuthenticationSchemes = OpenIddictValidationAspNetCoreDefaults.AuthenticationScheme, Roles = "Admin")]
        public IActionResult TestAuth()
        {
            var identity = HttpContext.User.Identity;
            return Ok(new { identity });
        }
    }
}