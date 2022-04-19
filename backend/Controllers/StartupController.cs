// 
// welaunch-backend
// StartupController.cs
// Created:16-04-2022
// By:Seth Climenhaga

using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using OpenIddict.Validation.AspNetCore;
using welaunch_backend.DTOs;
using welaunch_backend.Models;
using welaunch_backend.Models.IRepositories;

namespace welaunch_backend.Controllers
{
    public class StartupController : ControllerBase
    {
        private readonly IStartupRepository _startupRepository;
        private readonly UserManager<ApplicationUser> _userManager;

        public StartupController(IStartupRepository startupRepository, UserManager<ApplicationUser> userManager)
        {
            _startupRepository = startupRepository;
            _userManager = userManager;
        }

        [HttpPost("api/startup")]
        [Authorize(AuthenticationSchemes = OpenIddictValidationAspNetCoreDefaults.AuthenticationScheme)]
        public async Task<IActionResult> AddStartup([FromBody]StartupDto startupDto)
        {
            var user = await _userManager.GetUserAsync(User);
            
            Console.WriteLine("ID " + user.Id);
            Console.WriteLine("ID " + startupDto);

            startupDto.OwnerId = user.Id;

            _startupRepository.AddStartup(startupDto);

            return Ok();
        }
        
        [HttpGet("api/startup")]
        [Authorize(AuthenticationSchemes = OpenIddictValidationAspNetCoreDefaults.AuthenticationScheme)]
        public async Task<IActionResult> GetAllStartups()
        {
            var startups = _startupRepository.Startups;
            
            

            return Ok(startups);
        }
        
    }
}