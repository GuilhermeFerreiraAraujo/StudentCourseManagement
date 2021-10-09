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
            var response = new UpsertStudentResponse();
            var student = new Student
            {
                Id = request.Id,
                FirstName = request.FirstName,
                Surname = request.Surname,
                Address1 = request.Address1,
                Address2 = request.Address2,
                Address3 = request.Address3,
                DateOfBirth = request.DateOfBirth,
                Gender = request.Gender
            };

            if (request.Id > 0)
            {
                _context.Students.Update(student);
            }
            else
            {
                _context.Students.Add(student);
            }

            _context.SaveChanges();
            response.Student = student;
            return response;
        }
    }
}
