﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using StudentCourseManagement.Interfaces.Services;
using StudentCourseManagement.Models.Models.Entities;
using StudentCourseManagement.Models.Models.Requests;
using StudentCourseManagement.Models.Models.Responses;
using System.Collections.Generic;

namespace StudentCourseManagement.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CourseController : ControllerBase
    {
        private readonly ILogger<CourseController> _logger;
        private readonly CourseServiceInterface _courseService;

        public CourseController(ILogger<CourseController> logger, CourseServiceInterface courseService)
        {
            _logger = logger;
            _courseService = courseService;
        }

        [HttpGet]
        [Route("GetCourses")]
        public IEnumerable<Course> Get([FromQuery] GetCoursesRequest request)
        {
            return _courseService.GetCourses(request);
        }

        [HttpPost]
        [Route("UpsertCourse")]
        public IActionResult UpsertCourse([FromBody]UpsertCourseRequest request)
        {
            var response = new UpsertCourseResponse();
            response = _courseService.UpsertCourse(request);
            return Ok(response);
        }
    }
}
