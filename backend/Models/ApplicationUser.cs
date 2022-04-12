// 
// welaunch-backend
// ApplicationUser.cs
// Created:20-03-2022
// By:Seth Climenhaga

using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;


namespace welaunch_backend.Models
{
    public class ApplicationUser : IdentityUser
    {
        public ICollection<Conversation> Conversations { get; set; }
    }
}