
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using welaunch_backend.Models;

namespace welaunch_backend.Models
{
    public class Conversation
    {
        [Key]
        public Guid Id { get; set; }
        public  ICollection<ApplicationUser> Users { get; set; }
        public List<Message> Messages { get; set; }
        
        public Conversation()
        {
            Id =  Guid.NewGuid();
            Messages = new List<Message>();
            Users = new List<ApplicationUser>();
        }
    }
}
