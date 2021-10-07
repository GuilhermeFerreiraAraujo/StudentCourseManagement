using StudentCourseManagement.Interfaces.Repositories;
using StudentCourseManagement.Interfaces.Services;
using StudentCourseManagement.Models.Models.Requests;
using StudentCourseManagement.Models.Models.Responses;

namespace StudentCourseManagement.Services.Services
{
    public class StudentService : IStudentService
    {
        private readonly IStudentRepository _studentRepository;
        public StudentService(IStudentRepository studentRepository)
        {
            _studentRepository = studentRepository;
        }

        public UpsertStudentResponse UpserStudent(UpsertStudentRequest request)
        {
            return null;
        }
    }
}
