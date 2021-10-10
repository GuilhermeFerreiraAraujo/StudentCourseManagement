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
    public class CourseRepository : ICourseRepository
    {
        private readonly StudentCourseManagementContext _context;
        public CourseRepository(StudentCourseManagementContext context)
        {
            _context = context;
        }

        private IQueryable<Course> AddFilters(IQueryable<Course> query, GetCoursesRequest request)
        {
            if (request.Id > 0)
            {
                return query.Where(x => x.Id == request.Id);
            }

            if (!string.IsNullOrEmpty(request.Name))
            {
                query = query.Where(x => x.Name.Contains(request.Name));
            }

            if (!string.IsNullOrEmpty(request.Code))
            {
                query = query.Where(x => x.Code.Contains(request.Code));
            }

            if (!string.IsNullOrEmpty(request.Teacher))
            {
                query = query.Where(x => x.Teacher.Contains(request.Teacher));
            }

            if (request.StartDateFrom.HasValue)
            {
                query = query.Where(x => x.StartDate > request.StartDateFrom);
            }

            if (request.StartDateTo.HasValue)
            {
                query = query.Where(x => x.StartDate < request.StartDateTo);
            }

            return query;
        }

        public IEnumerable<Course> GetCourses(GetCoursesRequest request)
        {
            var query = _context.Courses.Where(x => x.Id > 0);
            query = AddFilters(query, request);
            return query.ToList();
        }

        public Course UpsertCourse(UpsertCourseRequest request)
        {
            var course = new Course
            {
                Id = request.Id,
                Name = request.Name,
                Teacher = request.Teacher,
                Code = request.Code,
                EndDate = request.EndDate,
                StartDate = request.StartDate
            };

            if (request.Id > 0)
            {
                _context.Update(course);
                _context.SaveChanges();
                return course;
            }

            _context.Add(course);
            _context.SaveChanges();
            return course;
        }

        public DeleteCourseResponse DeleteCourse(DeleteCourseRequest request)
        {
            var response = new DeleteCourseResponse();
            var course = _context.Courses.FirstOrDefault(x => x.Id == request.Id);
            _context.Courses.Remove(course);
            _context.SaveChanges();
            return response;
        }

        public GetCoursesByStudentIdResponse GetCoursesByStudentId(int id)
        {
            var response = new GetCoursesByStudentIdResponse();
            var parameters = new[] { new SqlParameter("@StudentId", SqlDbType.Int) { Direction = ParameterDirection.Input, Value = id } };
            var courses = _context.Courses.FromSqlRaw("[dbo].[GetCoursesByStudentId] @StudentId ", parameters).ToList();
            response.Courses = courses;
            return response;
        }
    }
}
