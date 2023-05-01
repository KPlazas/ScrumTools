using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ScrumToolsAPI.Entities
{
    public class Story
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string StoryName { get; set; }
        [Required]
        public string StoryDescription { get; set; }
        [Required]
        public int StoryDifficulty { get; set; }

        [ForeignKey("ProjectId")]
        public Project Project { get; set; }
        public int ProjectId { get; set; }
    }
}
