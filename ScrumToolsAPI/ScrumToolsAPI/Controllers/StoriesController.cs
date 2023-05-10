using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using ScrumToolsAPI.Data;
using ScrumToolsAPI.Entities;
using ScrumToolsAPI.Models.Proyectos;
using ScrumToolsAPI.Models.Stories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ScrumToolsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StoriesController : ControllerBase
    {
        private readonly ApplicationDBContext _context;

        public StoriesController(ApplicationDBContext context)
        {
            _context = context;
        }

        // GET: api/<StoriesController>
        [HttpGet("stories/{id}")]
        public async Task<ActionResult<IEnumerable<Story>>> GetStories(int id)
        {
            if (_context.Stories == null)
            {
                return NotFound();
            }
            List<Story> stories = await _context.Stories.Where(p => p.ProjectId == id).ToListAsync();
            string jsonString = JsonConvert.SerializeObject(stories);
            return Content(jsonString, "application/json");
        }

        // GET api/<StoriesController>/5
        [HttpGet("story/{id}")]
        public async Task<ActionResult<Story>> GetStory(int id)
        {
            if (_context.Stories == null)
            {
                return NotFound();
            }
            Story story = await _context.Stories.Where(n => n.Id == id).FirstOrDefaultAsync();
            string jsonString = JsonConvert.SerializeObject(story);
            return Content(jsonString, "application/json");
        }

        [HttpPost]
        public async Task<ActionResult<Story>> PostStory(StoriesPost storiesPost)
        {
 
            Story story = new Story();
            story.StoryName = storiesPost.StoryName;
            story.StoryDescription = storiesPost.StoryDescription;
            story.StoryDifficulty = storiesPost.StoryDifficulty;
            story.ProjectId = storiesPost.ProjectId;
            _context.Stories.Add(story);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStory", new { id = story.Id }, story);
        }

        [HttpGet("delete/{id}")]
        public async Task<ActionResult> DeleteStory(int id)
        {
            var story = await _context.Stories.FindAsync(id);
            if (story == null)
            {
                return NotFound();
            }

            _context.Stories.Remove(story);
            await _context.SaveChangesAsync();

            return NoContent();
        }

    }
}
