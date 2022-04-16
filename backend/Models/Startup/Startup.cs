// 
// welaunch-backend
// Startup.cs
// Created:16-04-2022
// By:Seth Climenhaga

using System;
using System.ComponentModel.DataAnnotations;

namespace welaunch_backend.Models.Startup
{
    public class Startup
    {
        [Key]  
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string About { get; set; }
        
        public string Sector { get; set; }
        
        public int NumEmployees { get; set; }
        
        public int MoneyRaised { get; set; }

        public Guid OwnerId { get; set; }

        public Startup()
        {
            Id = Guid.NewGuid();
        }
        
    }
}