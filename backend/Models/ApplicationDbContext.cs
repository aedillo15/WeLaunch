// 
// welaunch-backend
// ApplicationDbContext.cs
// Created:20-03-2022
// By:Seth Climenhaga


using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;


namespace welaunch_backend.Models
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
        public DbSet<Conversation> Conversations { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<Startup.Startup> Startups { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(
                    "Server=(localdb)\\MSSQLLocalDB;Database=WeLaunchDb;MultipleActiveResultSets=True;Trusted_Connection=True",
                    o => o.UseQuerySplittingBehavior(QuerySplittingBehavior.SingleQuery));
            }
        }

    }
} 


