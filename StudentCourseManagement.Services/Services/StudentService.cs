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

        public DeleteStudentResponse DeleteStudent(DeleteStudentRequest request)
        {
            return _studentRepository.DeleteStudent(request);
        }

        public GetStudentsResponse GetStudents(GetStudentsRequest request)
        {
            var students = new GetStudentsResponse();
            students.Students = _studentRepository.GetStudents(request);
            return students;
        }

        public GetStudentsByCourseIdResponse GetStudentsByCourseId(int id)
        {
            return _studentRepository.GetStudentsByCourseId(id);
        }

        public UpsertStudentResponse UpsertStudent(UpsertStudentRequest request)
        {
            return _studentRepository.UpsertStudent(request);
        }
    }
}
