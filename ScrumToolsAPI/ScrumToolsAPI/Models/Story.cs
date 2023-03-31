using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ScrumToolsAPI.Models
{
    public class Story
    {
        [Key]        
        public int StoryId { get; set; }
        [Required]
        public string StoryName { get; set; }
        [Required]
        public string StoryDescription { get; set; }
        [Required]
        public int StoryDifficulty { get; set; }
        [Required]
        public int StoryEpic { get; set; }

        //Foreign Key (one userstory will belong to one project)
        public int Fk_Project { get; set; }
        [ForeignKey("Fk_Project")]
        public Project Project { get; set; }

    }
}
