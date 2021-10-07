using StudentCourseManagement.Models.Models.Requests;
using StudentCourseManagement.Models.Models.Responses;
using System.Collections.Generic;

namespace StudentCourseManagement.Interfaces.Repositories
{
    public interface IStudentRepository
    {
        IEnumerable<GetStudentsRequest> GetStudents(GetStudentsRequest request);
        UpsertStudentResponse UpsertStudent(UpsertStudentRequest request);
    }
}
