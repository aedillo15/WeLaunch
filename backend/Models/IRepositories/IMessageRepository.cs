using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using welaunch_backend.DTOs;

namespace welaunch_backend.Models.IRepositories
{
    public interface IMessageRepository
    {
        public IEnumerable<Conversation> Conversations { get; }

        public  IEnumerable<Conversation> GetConversations(string userID);
        public  IEnumerable<Message> AddToConversation(MessageDTO message, ApplicationUser user, ApplicationUser toUser);

    }
}
