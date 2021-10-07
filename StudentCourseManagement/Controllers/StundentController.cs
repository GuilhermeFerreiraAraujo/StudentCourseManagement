using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using StudentCourseManagement.Interfaces.Services;
using StudentCourseManagement.Models.Models.Requests;
using StudentCourseManagement.Models.Models.Responses;
using System.Collections.Generic;

namespace StudentCourseManagement.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StudentController : ControllerBase
    {
        private readonly ILogger<StudentController> _logger;
        private readonly IStudentService _studentService;

        public StudentController(ILogger<StudentController> logger, IStudentService studentService)
        {
            _logger = logger;
            _studentService = studentService;
        }

        [HttpGet]
        public IEnumerable<GetStudentsRequest> GetStudents()
        {
            return null;
        }

        [HttpPost]
        public IActionResult UpsertCourse([FromBody] UpsertStudentRequest request)
        {
            var response = new UpsertStudentResponse();
            response = _studentService.UpserStudent(request);
            return Ok(response);
        }
    }
}
