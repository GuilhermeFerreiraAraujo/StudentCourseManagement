using System;

namespace StudentCourseManagement.Models.Models.Requests
{
    public class UpsertStudentRequest
    {
        public int IdCourse { get; set; }
        public string FirstName { get; set; }
        public string Surname { get; set; }
        public string Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string Address3 { get; set; }
    }
}
