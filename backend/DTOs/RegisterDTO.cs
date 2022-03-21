// 
// welaunch-backend
// RegisterDTO.cs
// Created:21-03-2022
// By:Seth Climenhaga

using System;

namespace welaunch_backend.DTOs
{
    public class RegisterDto
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
    }
}