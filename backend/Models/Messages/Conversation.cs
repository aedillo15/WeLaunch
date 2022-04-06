
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using welaunch_backend.Models;

namespace welaunch_backend.Models
{
    public class Conversation
    {
        public Guid ID { get; set; }
        public List<ApplicationUser> Users { get; set; }
        public List<Message> Messages { get; set; }
    }
}
