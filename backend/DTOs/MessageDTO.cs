using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace welaunch_backend.DTOs
{
    public class MessageDTO
    {
        public string ConvoID { get; set; }
        public string ToUserId { get; set; }
        public string Content { get; set; }
        
    }
}
