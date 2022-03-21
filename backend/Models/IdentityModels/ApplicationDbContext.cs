// 
// welaunch-backend
// ApplicationDbContext.cs
// Created:20-03-2022
// By:Seth Climenhaga


using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace welaunch_backend.Models.IdentityModels
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
         public ApplicationDbContext(DbContextOptions options)
             : base(options)
         {
         }
    }
    
}

