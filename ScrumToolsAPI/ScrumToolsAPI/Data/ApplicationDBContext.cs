using Microsoft.EntityFrameworkCore;
using ScrumToolsAPI.Models;

namespace ScrumToolsAPI.Data
{
    public class ApplicationDBContext:DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
        {

        }
        public DbSet<User> Users { get; set; }  
        public DbSet<Project> Projects { get; set; }
        public DbSet<Story> Stories{ get; set; }
    }
}
