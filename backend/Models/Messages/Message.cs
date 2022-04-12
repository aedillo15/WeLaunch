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
        public DateTime date { get; set; }
        public String content { get; set; }

        public Guid convoID { get; set; }

        public Message()
        {

        }
   
        public Message(DateTime date, string content, Guid convoID)
        {
            this.date = date;
            this.content = content;
            this.convoID = convoID;
        }

    }
}
