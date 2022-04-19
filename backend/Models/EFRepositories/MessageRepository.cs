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

        public IEnumerable<Conversation> Conversations => _context.Conversations
            .Include(c => c.Users)
            .Include(c => c.Messages);

        public IEnumerable<Conversation> GetConversations(string userId)
        {
            return Conversations.Where(c => 
                c.Users.Any(user => user.Id == userId)
            );
            return null;
        }
        
        public IEnumerable<Conversation> GetConversation(string userId, string otherUserId)
        {
            return Conversations.Where(c => 
                c.Users.Any(user => user.Id == userId) && c.Users.Any(user => user.Id == otherUserId)
            );
            return null;
        }


        public IEnumerable<Message> AddToConversation(MessageDTO message, ApplicationUser user, ApplicationUser toUser)
        {
            var conversation = Conversations.SingleOrDefault(c => c.Users.Contains(toUser) && c.Users.Contains(user));
            
            if (conversation == null)
            {
                var c = new Conversation();
                var m = new Message(message.Content, c.Id);
                m.FromID = Guid.Parse(user.Id);
                m.date = DateTime.Now;
                c.Messages.Add(m);
                c.Users.Add(toUser);
                c.Users.Add(user);
                

                var result = _context.Conversations.Add(c);
                _context.SaveChanges();
                
                return c.Messages;
                
            }
            
            var mess = new Message(message.Content, conversation.Id);
            mess.FromID = Guid.Parse(user.Id);
            mess.date = DateTime.Now;
            _context.Messages.Add(mess);
            _context.SaveChanges();
            return conversation.Messages;
            
        }
        
    }
}
