using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using welaunch_backend.DTOs;
using welaunch_backend.Models.IRepositories;


namespace welaunch_backend.Models.EFRepositories
{
    public class MessageRepository : IMessageRepository
    {
        private readonly ApplicationDbContext _context;

        public MessageRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Conversation> Conversations => _context.Conversations.Include(convo => convo.Users);

        public IEnumerable<Conversation> GetConversations(string userID)
        {
            return Conversations.Where(convo => 
                convo.Users.Any(user => user.Id == userID)
            );
        }

        public IEnumerable<Message> AddToConversation(MessageDTO message)
        {
            Guid convoID = Guid.Parse(message.convoID);

            Conversation convo = Conversations.Where(convo => convo.ID == convoID).FirstOrDefault();

            convo.Messages.Add(new Message(DateTime.Now, message.content, convoID));

            return convo.Messages;
        }

    }
}
