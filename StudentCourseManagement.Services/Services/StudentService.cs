using StudentCourseManagement.Interfaces.Repositories;
using StudentCourseManagement.Interfaces.Services;
using StudentCourseManagement.Models.Models.Requests;
using StudentCourseManagement.Models.Models.Responses;
using System.Collections.Generic;

namespace StudentCourseManagement.Services.Services
{
    public class StudentService : IStudentService
    {
        private readonly IStudentRepository _studentRepository;
        public StudentService(IStudentRepository studentRepository)
        {
            _studentRepository = studentRepository;
        }

        public IEnumerable<GetStudentsRequest> GetStudents(GetStudentsRequest request)
        {
            return _studentRepository.GetStudents(request);
        }

        public UpsertStudentResponse UpsertStudent(UpsertStudentRequest request)
        {
            return _studentRepository.UpsertStudent(request);
        }
    }
}
