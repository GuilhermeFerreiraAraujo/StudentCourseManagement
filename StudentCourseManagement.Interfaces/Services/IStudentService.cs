using StudentCourseManagement.Models.Models.Requests;
using StudentCourseManagement.Models.Models.Responses;
using System.Collections.Generic;

namespace StudentCourseManagement.Interfaces.Services
{
    public interface IStudentService
    {
        UpsertStudentResponse UpsertStudent(UpsertStudentRequest request);
        IEnumerable<GetStudentsRequest> GetStudents(GetStudentsRequest request);
    }
}
