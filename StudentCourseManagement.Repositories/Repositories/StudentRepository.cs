using StudentCourseManagement.Interfaces.Repositories;
using StudentCourseManagement.Models.Models.Entities;
using StudentCourseManagement.Models.Models.Requests;
using StudentCourseManagement.Models.Models.Responses;
using StudentCourseManagement.Repositories.Models;
using System.Collections.Generic;
using System.Linq;

namespace StudentCourseManagement.Repositories.Repositories
{
    public class StudentRepository : IStudentRepository
    {
        private readonly StudentCourseManagementContext _context;
        public StudentRepository(StudentCourseManagementContext context)
        {
            _context = context;
        }

        public List<Student> GetStudents(GetStudentsRequest request)
        {
            return _context.Students.Where(x => x.Id > 0).ToList();
        }

        public UpsertStudentResponse UpsertStudent(UpsertStudentRequest request)
        {
            throw new System.NotImplementedException();
        }
    }
}
