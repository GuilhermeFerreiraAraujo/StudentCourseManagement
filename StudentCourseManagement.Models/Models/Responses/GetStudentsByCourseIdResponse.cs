using StudentCourseManagement.Models.Models.Entities;
using System.Collections.Generic;

namespace StudentCourseManagement.Models.Models.Responses
{
    public class GetStudentsByCourseIdResponse
    {
        public List<Student> Students { get; set; }
    }
}
