using StudentCourseManagement.Models.Models.Requests;
using StudentCourseManagement.Models.Models.Responses;

namespace StudentCourseManagement.Interfaces.Services
{
    public interface IStudentService
    {
        UpsertStudentResponse UpserStudent(UpsertStudentRequest request);
    }
}
