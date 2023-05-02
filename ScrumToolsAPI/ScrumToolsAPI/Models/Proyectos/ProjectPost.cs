using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ScrumToolsAPI.Models.Proyectos
{
    public class ProjectPost
    {                
        
        public string ProjectName { get; set; }                
        
        public string UserId { get; set; }                
    }
}
