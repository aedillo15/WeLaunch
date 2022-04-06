using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using welaunch_backend.DTOs;
using welaunch_backend.Models;
using welaunch_backend.Models.EFRepositories;

using Microsoft.AspNetCore.Authorization;
using OpenIddict.Validation.AspNetCore;


namespace welaunch_backend.Controllers
{
    public class MessageController : ControllerBase
    {
        private readonly MessageRepository _messageRepository;
        private readonly UserManager<ApplicationUser> _userManager;

        public MessageController(MessageRepository messageRepository, UserManager<ApplicationUser> userManager)
        {
            _messageRepository = messageRepository;
            _userManager = userManager;
        }

        [HttpPost("api/message/send")]
        [Authorize(AuthenticationSchemes = OpenIddictValidationAspNetCoreDefaults.AuthenticationScheme)]
        public IActionResult SendMessage(MessageDTO messageDTO)
        {
            var messages = _messageRepository.AddToConversation(messageDTO);

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

    }
}
