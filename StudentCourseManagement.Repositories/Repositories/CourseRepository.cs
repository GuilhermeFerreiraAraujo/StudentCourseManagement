using StudentCourseManagement.Interfaces.Repositories;
using StudentCourseManagement.Models.Models.Entities;
using StudentCourseManagement.Models.Models.Requests;
using System.Collections.Generic;

namespace StudentCourseManagement.Repositories.Repositories
{
    public class CourseRepository : CourseRepositoryInterface
    {
        public IEnumerable<Course> GetCourses(GetCoursesRequest request)
        {
            throw new System.NotImplementedException();
        }

        public Course UpsertCourse(UpsertCourseRequest request)
        {
            throw new System.NotImplementedException();
        }
    }
}
