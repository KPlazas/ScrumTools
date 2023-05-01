using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ScrumToolsAPI.Data;
using ScrumToolsAPI.Entities;
using ScrumToolsAPI.Models.Stories;

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

        // GET: api/Stories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Story>>> GetStories(int idProject)
        {
          if (_context.Stories == null)
          {
              return NotFound();
          }
            return await _context.Stories.Where(s=>s.Fk_Project==idProject).ToListAsync();
        }

        // GET: api/Stories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Story>> GetStory(int id)
        {
          if (_context.Stories == null)
          {
              return NotFound();
          }
            var story = await _context.Stories.FindAsync(id);

            if (story == null)
            {
                return NotFound();
            }

            return story;
        }

        // PUT: api/Stories/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStory(int id, Story story)
        {
            if (id != story.StoryId)
            {
                return BadRequest();
            }

            _context.Entry(story).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StoryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Stories
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Story>> PostStory(StoriesPost storyPost)
        {
          if (_context.Stories == null)
          {
              return Problem("Entity set 'ApplicationDBContext.Stories'  is null.");
          }

            Story story = new Story();

            story.StoryName = storyPost.StoryName;
            story.StoryDescription = storyPost.StoryDescription;
            story.StoryDifficulty=storyPost.StoryDifficulty;
            story.Fk_Project= storyPost.Fk_Project; 

            _context.Stories.Add(story);
            await _context.SaveChangesAsync();

            return Ok();
        }

        // DELETE: api/Stories/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStory(int id)
        {
            if (_context.Stories == null)
            {
                return NotFound();
            }
            var story = await _context.Stories.FindAsync(id);
            if (story == null)
            {
                return NotFound();
            }

            _context.Stories.Remove(story);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StoryExists(int id)
        {
            return (_context.Stories?.Any(e => e.StoryId == id)).GetValueOrDefault();
        }
    }
}
