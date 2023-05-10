using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using dis_identityserver.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using ScrumToolsAPI.Data;
using ScrumToolsAPI.Entities;
using ScrumToolsAPI.Models.Proyectos;

namespace ScrumToolsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        private readonly ApplicationDBContext _context;

        public ProjectsController(ApplicationDBContext context)
        {
            _context = context;
        }

        // GET: api/Projects
        [HttpGet("All/{id}")]
        public async Task<ActionResult<IEnumerable<Project>>> GetProjects(string id)
        {
          if (_context.Projects == null)
          {
              return NotFound();
          }
            return await _context.Projects.Where(p => p.UserId == id).ToListAsync();
        }

        // GET: api/Projects/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Project>> GetProject(int id)
        {
          if (_context.Projects == null)
          {
              return NotFound();
          }
            var project = await _context.Projects.FindAsync(id);

            if (project == null)
            {
                return NotFound();
            }

            string jsonString = JsonConvert.SerializeObject(project);
            return Content(jsonString, "application/json");
        }
        
        [HttpPost]
        public async Task<ActionResult<Project>> PostProject(ProjectPost projectPost)
        {
          if (_context.Projects == null)
          {
              return Problem("Entity set 'ApplicationDBContext.Projects'  is null.");
          }
            Project project = new Project();
            project.ProjectName = projectPost.ProjectName;
            project.UserId = projectPost.UserId;
            project.DataCreation = DateTime.Now;
            _context.Projects.Add(project);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProject", new { id = project.Id }, project);
        }
    }
}
