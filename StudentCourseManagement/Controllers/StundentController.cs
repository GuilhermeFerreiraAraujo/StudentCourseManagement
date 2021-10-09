using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using StudentCourseManagement.Interfaces.Services;
using StudentCourseManagement.Models.Models.Requests;
using StudentCourseManagement.Models.Models.Responses;

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
        [Route("GetStudents")]
        public IActionResult GetStudents([FromQuery]GetStudentsRequest request)
        {
            return Ok(_studentService.GetStudents(request));
        }

        [HttpPost]
        [Route("UpsertStudent")]
        public IActionResult UpsertStudent([FromBody]UpsertStudentRequest request)
        {
            var response = new UpsertStudentResponse();
            response = _studentService.UpsertStudent(request);
            return Ok(response);
        }
    }
}
