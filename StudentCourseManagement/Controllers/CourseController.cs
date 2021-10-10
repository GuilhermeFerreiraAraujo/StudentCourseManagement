using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using StudentCourseManagement.Interfaces.Services;
using StudentCourseManagement.Models.Models.Requests;
using StudentCourseManagement.Models.Models.Responses;
using System;

namespace StudentCourseManagement.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CourseController : ControllerBase
    {
        private readonly ILogger<CourseController> _logger;
        private readonly ICourseService _courseService;

        public CourseController(ILogger<CourseController> logger, ICourseService courseService)
        {
            _logger = logger;
            _courseService = courseService;
        }

        [HttpGet]
        [Route("GetCourses")]
        public IActionResult Get([FromQuery] GetCoursesRequest request)
        {
            try
            {
                return Ok(_courseService.GetCourses(request));
            }
            catch (Exception ex)
            {
                return BadRequest("There was a problem with your request!");
            }
        }

        [HttpGet]
        [Route("GetCoursesByStudentId")]
        public IActionResult GetCoursesByStudentId([FromQuery]int id)
        {
            try
            {
                var response = new GetCoursesByStudentIdResponse();

                response = _courseService.GetCoursesByStudentId(id);

                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest("There was a problem with your request!");
            }
        }

        [HttpPost]
        [Route("UpsertCourse")]
        public IActionResult UpsertCourse([FromBody]UpsertCourseRequest request)
        {
            try
            {
                var response = _courseService.UpsertCourse(request);
                return Ok(response);
            }
            catch (System.Exception)
            {
                return BadRequest("There was a problem with your request!");
            }
        }

        [HttpPost]
        [Route("DeleteCourse")]
        public IActionResult DeleteCourse([FromBody] DeleteCourseRequest request)
        {
            try
            {
                var response = _courseService.DeleteCourse(request);
                return Ok(response);
            }
            catch (System.Exception)
            {
                return BadRequest("There was a problem with your request!");
            }
        }
    }
}
