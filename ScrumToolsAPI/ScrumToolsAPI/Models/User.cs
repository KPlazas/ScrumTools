using System.ComponentModel.DataAnnotations;
using ScrumToolsAPI.Entities;

namespace ScrumToolsAPI.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        [Required]
        public string UserName { get; set; }
        [Required]
        public string UserLastName { get; set; }
        [Required]
        public string UserEmail { get; set; }
        [Required]
        public string UserPassword { get; set; }
        [Required]
        public int UserRol { get; set; }

        public List<Project> Projects { get; set; }

    }
}
