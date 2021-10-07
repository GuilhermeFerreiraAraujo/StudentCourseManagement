using System;

namespace StudentCourseManagement.Models.Models.Requests
{
    public class UpsertCourseRequest
    {
        public int Idcourse { get; set; }
        public string CourseCode { get; set; }
        public string CourseName { get; set; }
        public string TeacherName { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}
