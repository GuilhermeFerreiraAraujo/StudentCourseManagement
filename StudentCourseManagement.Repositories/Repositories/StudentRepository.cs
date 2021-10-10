using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using StudentCourseManagement.Interfaces.Repositories;
using StudentCourseManagement.Models.Models.Entities;
using StudentCourseManagement.Models.Models.Requests;
using StudentCourseManagement.Models.Models.Responses;
using StudentCourseManagement.Repositories.Models;
using System.Collections.Generic;
using System.Data;
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

        private IQueryable<Student> AddFilters(IQueryable<Student> query, GetStudentsRequest request)
        {
            if (request.Id > 0)
            {
                return query.Where(x => x.Id == request.Id);
            }

            if (!string.IsNullOrEmpty(request.FirstName))
            {
                query = query.Where(x => x.FirstName.Contains(request.FirstName));
            }

            if (!string.IsNullOrEmpty(request.Surname))
            {
                query = query.Where(x => x.Surname.Contains(request.Surname));
            }

            if (!string.IsNullOrEmpty(request.Gender))
            {
                query = query.Where(x => x.Gender.Contains(request.Gender));
            }

            if (request.DateOfBirth.HasValue)
            {
                query = query.Where(x => x.DateOfBirth == request.DateOfBirth);
            }

            if (!string.IsNullOrEmpty(request.Address1))
            {
                query = query.Where(x => x.Address1.Contains(request.Address1));
            }

            if (!string.IsNullOrEmpty(request.Address2))
            {
                query = query.Where(x => x.Address2.Contains(request.Address2));
            }

            if (!string.IsNullOrEmpty(request.Address3))
            {
                query = query.Where(x => x.Address3.Contains(request.Address3));
            }

            return query;
        }

        public List<Student> GetStudents(GetStudentsRequest request)
        {
            var query = _context.Students.Where(x => x.Id > 0);
            query = AddFilters(query, request);
            return query.ToList();
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

        public DeleteStudentResponse DeleteStudent(DeleteStudentRequest request)
        {
            var response = new DeleteStudentResponse();
            var student = _context.Students.FirstOrDefault(x => x.Id == request.Id);
            _context.Remove(student);
            _context.SaveChanges();
            return response;
        }

        public GetStudentsByCourseIdResponse GetStudentsByCourseId(int id)
        {
            var response = new GetStudentsByCourseIdResponse();
            var parameters = new[] { new SqlParameter("@CourseId", SqlDbType.Int ) { Direction = ParameterDirection.Input, Value = id }};
            var students = _context.Students.FromSqlRaw("[dbo].[GetStudentsByCourseId] @CourseId ", parameters).ToList();
            response.Students = students;
            return response;
        }
    }
}
