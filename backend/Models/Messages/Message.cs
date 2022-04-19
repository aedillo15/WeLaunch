using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace welaunch_backend.Models
{
    public class Message
    {
        [Key]
        public Guid ID { get; set; }
        // public DateTime date { get; set; }
        public string Content { get; set; }

        public Guid ConversationId { get; set; }
        
        public Guid FromID { get; set; }

        public Message( string content, Guid conversationId)
        {
            ID =  Guid.NewGuid();
            // this.date = date;
            Content = content;
            ConversationId = conversationId;

        }

    }
}
