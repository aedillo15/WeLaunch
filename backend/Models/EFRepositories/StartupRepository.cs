// 
// welaunch-backend
// StartupRepository.cs
// Created:16-04-2022
// By:Seth Climenhaga

using System;
using System.Collections.Generic;
using welaunch_backend.DTOs;
using welaunch_backend.Models.IRepositories;

namespace welaunch_backend.Models.EFRepositories
{
    public class StartupRepository : IStartupRepository
    {
        private readonly ApplicationDbContext _context;

        public StartupRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Startup.Startup> Startups => _context.Startups;
        
        public void AddStartup(StartupDto startupDto)
        {
            var id = Guid.Parse(startupDto.OwnerId);
            var startup = new Startup.Startup
            {
                Id = Guid.NewGuid(),
                Name = startupDto.Name,
                About = startupDto.About,
                MoneyRaised = startupDto.MoneyRaised,
                NumEmployees = startupDto.NumEmployees,
                Sector = startupDto.Sector,
                OwnerId = id
            };
            
            _context.Startups.Add(startup);
            _context.SaveChanges();
            
        }
    }
}