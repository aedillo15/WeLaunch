using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using OpenIddict.Abstractions;

using welaunch_backend.Models;
using welaunch_backend.Models.EFRepositories;
using welaunch_backend.Models.IRepositories;

namespace welaunch_backend
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        private IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "welaunch_backend", Version = "v1" });
            });

            services.AddDbContext<ApplicationDbContext>(options =>
            {
                options.UseSqlServer(Configuration.GetConnectionString("MBSConnStr"));
                options.UseOpenIddict();
            });

            services.Configure<IdentityOptions>(options =>
            {
                options.ClaimsIdentity.UserNameClaimType = OpenIddictConstants.Claims.Name;
                options.ClaimsIdentity.UserIdClaimType = OpenIddictConstants.Claims.Subject;
                options.ClaimsIdentity.RoleClaimType = OpenIddictConstants.Claims.Role;
            });
            
            services.AddOpenIddict()
                .AddCore(options => options.UseEntityFrameworkCore().UseDbContext<ApplicationDbContext>())
                .AddServer(options =>
                {
                    options.SetAuthorizationEndpointUris("/connect/authorize")
                    .SetTokenEndpointUris("/connect/token")
                    .SetUserinfoEndpointUris("/connect/userinfo");
                    
                    options.AllowPasswordFlow();
                    //options.AllowClientCredentialsFlow();
                    options.AllowRefreshTokenFlow();
            
            
                    options.RegisterScopes(OpenIddictConstants.Permissions.Scopes.Email,
                        OpenIddictConstants.Permissions.Scopes.Profile,
                        OpenIddictConstants.Permissions.Scopes.Roles);
            
                    options.SetAccessTokenLifetime(TimeSpan.FromMinutes(30));
                    options.SetRefreshTokenLifetime(TimeSpan.FromDays(7));
            
                    options.AddDevelopmentEncryptionCertificate()
                        .AddDevelopmentSigningCertificate();
            
                    options.UseAspNetCore()
                        .EnableTokenEndpointPassthrough();
                })
                .AddValidation(options =>
                {
                    options.UseLocalServer();
                    options.UseAspNetCore();
                });
            
            services.AddAuthentication(options =>
            {
                options.DefaultScheme = OpenIddictConstants.Schemes.Bearer;
                options.DefaultChallengeScheme = OpenIddictConstants.Schemes.Bearer;
            });



            services.AddIdentity<ApplicationUser, IdentityRole>()
            .AddSignInManager()
            //.AddUserStore<UserStore>()
            .AddEntityFrameworkStores<ApplicationDbContext>()
            .AddUserManager<UserManager<ApplicationUser>>();

            services.AddScoped<IMessageRepository, MessageRepository>();
            services.AddScoped<IStartupRepository, StartupRepository>();

            // Register the worker responsible of seeding the database with the sample clients.
            // Note: in a real world application, this step should be part of a setup script.
            // services.AddHostedService<Worker>();

        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "WeLaunch Backend v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();
            
            app.UseCors(options =>options
                .WithOrigins(new []{"http://localhost:8080", "http://localhost:5001"})
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowCredentials()
            );
            
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(options =>
            {
                options.MapControllers();
                //options.MapDefaultControllerRoute();
            });

            //Create OpenID Connect client application
            using var scope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope();
            var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
            context.Database.EnsureCreated();
            
            //initializing custom roles 
            var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();
            string[] roleNames = { "Admin", "Investor", "Entrepreneur", "Accelerator" };

            foreach (var roleName in roleNames)
            {
                var roleExist = roleManager.RoleExistsAsync(roleName).GetAwaiter().GetResult();
                // ensure that the role does not exist
                if (!roleExist)
                {
                    //create the roles and seed them to the database: 
                    roleManager.CreateAsync(new IdentityRole(roleName)).GetAwaiter().GetResult();
                }
            }
            
            var manager = scope.ServiceProvider.GetRequiredService<IOpenIddictApplicationManager>();
            var existingClientApp = manager.FindByClientIdAsync("default-client").GetAwaiter().GetResult();
            if (existingClientApp == null)
            {
                manager.CreateAsync(new OpenIddictApplicationDescriptor
                {
                    ClientId = "default-client",
                    ClientSecret = "499D56FA-B47B-5199-BA61-B298D431C318",
                    DisplayName = "Default client application",
                    Permissions =
                    {
                        OpenIddictConstants.Permissions.Endpoints.Token,
                        OpenIddictConstants.Permissions.GrantTypes.Password
                    }
                }).GetAwaiter().GetResult();
            }
        }
    }
}

