// 
// welaunch-backend
// StartupDTO.cs
// Created:16-04-2022
// By:Seth Climenhaga

namespace welaunch_backend.DTOs
{
    public class StartupDto
    {
        public string Name { get; set; }
        
        public string About { get; set; }
        
        public string Sector { get; set; }
        
        public int NumEmployees { get; set; }
        
        public int MoneyRaised { get; set; }

        public string OwnerId { get; set; }
        
    }
}