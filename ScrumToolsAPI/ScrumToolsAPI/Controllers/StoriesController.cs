using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using ScrumToolsAPI.Data;
using ScrumToolsAPI.Entities;
using ScrumToolsAPI.Models.Stories;

namespace ScrumToolsAPI.Controllers
{
    public class StoriesController : Controller
    {
        private readonly ApplicationDBContext _context;

        public StoriesController(ApplicationDBContext context)
        {
            _context = context;
        }

        //// GET: Stories
        //public async Task<IActionResult> Index()
        //{
        //    var applicationDBContext = _context.Stories.Include(s => s.Project);
        //    return View(await applicationDBContext.ToListAsync());
        //}

        // GET: Stories/Details/5
        public async Task<IActionResult> GetStory(int? id) //id proyecto
        {
            if (id == null || _context.Stories == null)
            {
                return NotFound();
            }

            var story = await _context.Stories
                .Include(s => s.Project)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (story == null)
            {
                return NotFound();
            }

            return View(story);
        }
        

        // POST: Stories/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> PostStory(StoriesPost storiesPost)
        {
            if (_context.Stories == null)
            {
                return Problem("No hay historias creadas");
            }
            Story story = new Story();
            if (ModelState.IsValid)
            {            
                story.StoryName = storiesPost.StoryName;
                story.StoryDescription= storiesPost.StoryDescription;
                story.StoryDifficulty = storiesPost.StoryDifficulty;
                story.ProjectId= storiesPost.ProjectId;
                _context.Add(story);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["ProjectId"] = new SelectList(_context.Projects, "Id", "ProjectName", story.ProjectId);
            return View(story);
        }

        
        // GET: Stories/Delete/5
        public async Task<IActionResult> DeleteStory(int? id)
        {
            if (id == null || _context.Stories == null)
            {
                return NotFound();
            }

            var story = await _context.Stories
                .Include(s => s.Project)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (story == null)
            {
                return NotFound();
            }

            return View(story);
        }
       
        private bool StoryExists(int id)
        {
          return (_context.Stories?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
