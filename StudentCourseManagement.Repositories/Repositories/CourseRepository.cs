using StudentCourseManagement.Interfaces.Repositories;
using StudentCourseManagement.Models.Models.Entities;
using StudentCourseManagement.Models.Models.Requests;
using StudentCourseManagement.Repositories.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace StudentCourseManagement.Repositories.Repositories
{
    public class CourseRepository : CourseRepositoryInterface
    {
        private readonly StudentCourseManagementContext _context;
        public CourseRepository(StudentCourseManagementContext context)
        {
            _context = context;
        }

        private IQueryable<Course> AddFilters(IQueryable<Course> query, GetCoursesRequest request)
        {
            if (request.Id < 0)
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
                Id = request.Idcourse,
                Name = request.CourseName,
                Teacher = request.TeacherName,
                Code = request.CourseName,
                EndDate = request.EndDate,
                StartDate = request.StartDate
            };

            if (request.Idcourse > 0)
            {
                _context.Update(course);
                _context.SaveChanges();
                return course;
            }

            _context.Add(course);
            _context.SaveChanges();
            return course;
        }
    }
}
