using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ScrumToolsAPI.Models.Stories
{
    public class StoriesPost
    {
                
        public string StoryName { get; set; }        
        public string StoryDescription { get; set; }       
        public int StoryDifficulty { get; set; }                 
        public int Fk_Project { get; set; }                
    }
}
