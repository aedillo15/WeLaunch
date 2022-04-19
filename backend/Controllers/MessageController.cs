using System;
using System.Linq;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using welaunch_backend.DTOs;
using welaunch_backend.Models;
using welaunch_backend.Models.EFRepositories;

using Microsoft.AspNetCore.Authorization;
using OpenIddict.Validation.AspNetCore;
using welaunch_backend.Models.IRepositories;

namespace welaunch_backend.Controllers
{
    public class MessageController : ControllerBase
    {
        private readonly IMessageRepository _messageRepository;
        private readonly UserManager<ApplicationUser> _userManager;

        public MessageController(IMessageRepository messageRepository, UserManager<ApplicationUser> userManager)
        {
            _messageRepository = messageRepository;
            _userManager = userManager;
        }

        [HttpPost("api/message/send")]
        [Authorize(AuthenticationSchemes = OpenIddictValidationAspNetCoreDefaults.AuthenticationScheme)]
        public async Task<IActionResult> SendMessage([FromBody]MessageDTO messageDto)
        {
            Console.WriteLine("Content " + messageDto.Content);
            var user = await _userManager.GetUserAsync(User);
            var toUser = await _userManager.FindByIdAsync(messageDto.ToUserId);
            Console.WriteLine("user " + user.Id);
            Console.WriteLine("ToUser " + toUser.Id);
            var messages = _messageRepository.AddToConversation(messageDto, user, toUser);

            return Ok(messages);
        }

        [HttpGet("api/messages")]
        [Authorize(AuthenticationSchemes = OpenIddictValidationAspNetCoreDefaults.AuthenticationScheme)]
        public async Task<IActionResult> GetMessages()
        {
            var user = await _userManager.GetUserAsync(User);
            var conversations = _messageRepository.GetConversations(user.Id);

            return Ok(conversations);
        }
        
        [HttpPost("api/conversation")]
        [Authorize(AuthenticationSchemes = OpenIddictValidationAspNetCoreDefaults.AuthenticationScheme)]
        public async Task<IActionResult> GetMessages([FromBody]IdDTO idDto)
        {
            var user = await _userManager.GetUserAsync(User);
            var conversation = _messageRepository.GetConversation(user.Id, idDto.Id);
            
            if(conversation.Count() == 0)
                return Ok(null);

            return Ok(conversation);
        }

    }
}
