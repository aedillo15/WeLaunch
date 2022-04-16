// 
// welaunch-backend
// IStartupRepository.cs
// Created:16-04-2022
// By:Seth Climenhaga

using System.Collections.Generic;
using welaunch_backend.DTOs;

namespace welaunch_backend.Models.IRepositories
{
    public interface IStartupRepository
    {
        public IEnumerable<Startup.Startup> Startups { get; }
        public void AddStartup(StartupDto startupDto);
        
    }
}