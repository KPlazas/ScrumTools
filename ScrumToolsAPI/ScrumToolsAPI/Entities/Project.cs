using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ScrumToolsAPI.Models
{
    public class Project
    {
        [Key]
        public int ProjectId { get; set; }
        [Required]
        public string ProjectName { get; set; }
        [Required]
        public DateTime DataCreation { get; set; }

        //Here we will create the foreing key, the relationship it's one-one 
        //(one project will has one user)
        public int Fk_User { get; set; }
        [ForeignKey("Fk_User")]
        public User User { get; set; }
        public List<Story> Storys { get; set; }
    }
}
