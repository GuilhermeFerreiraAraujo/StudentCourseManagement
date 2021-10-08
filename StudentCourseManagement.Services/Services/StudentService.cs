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

        public GetStudentsResponse GetStudents(GetStudentsRequest request)
        {
            var students = new GetStudentsResponse();
            students.Students = _studentRepository.GetStudents(request);
            return students;
        }

        public UpsertStudentResponse UpsertStudent(UpsertStudentRequest request)
        {
            return _studentRepository.UpsertStudent(request);
        }
    }
}
