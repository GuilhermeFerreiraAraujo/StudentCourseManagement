using StudentCourseManagement.Models.Models.Requests;
using StudentCourseManagement.Models.Models.Responses;

namespace StudentCourseManagement.Interfaces.Services
{
    public interface IStudentService
    {
        UpsertStudentResponse UpsertStudent(UpsertStudentRequest request);
        GetStudentsResponse GetStudents(GetStudentsRequest request);
        DeleteStudentResponse DeleteStudent(DeleteStudentRequest request);
        GetStudentsByCourseIdResponse GetStudentsByCourseId(int id);
    }
}
