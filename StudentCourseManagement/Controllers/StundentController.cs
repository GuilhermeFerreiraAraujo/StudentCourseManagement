using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using StudentCourseManagement.Interfaces.Services;
using StudentCourseManagement.Models.Models.Requests;
using System;

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
            try
            {
                return Ok(_studentService.GetStudents(request));
            }
            catch (Exception)
            {
                return BadRequest("There was a problem with your request!");
            }
        }

        [HttpPost]
        [Route("UpsertStudent")]
        public IActionResult UpsertStudent([FromBody]UpsertStudentRequest request)
        {
            try
            {
                var response = _studentService.UpsertStudent(request);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest("There was a problem with your request!");
            }
        }

        [HttpPost]
        [Route("DeleteStudent")]
        public IActionResult DeleteCourse([FromBody] DeleteStudentRequest request)
        {
            try
            {
                var response = _studentService.DeleteStudent(request);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest("There was a problem with your request!");
            }
        }
    }
}
