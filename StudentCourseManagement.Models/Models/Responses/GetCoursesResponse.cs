using StudentCourseManagement.Models.Models.Entities;
using System.Collections.Generic;

namespace StudentCourseManagement.Models.Models.Responses
{
    public class GetCoursesResponse
    {
        public List<Course> Courses { get; set; }
    }
}
