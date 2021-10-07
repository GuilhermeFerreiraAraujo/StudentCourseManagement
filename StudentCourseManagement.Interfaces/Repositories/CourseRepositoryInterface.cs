using StudentCourseManagement.Models.Models.Entities;
using StudentCourseManagement.Models.Models.Requests;
using System.Collections.Generic;

namespace StudentCourseManagement.Interfaces.Repositories
{
    public interface CourseRepositoryInterface
    {
        Course UpsertCourse(UpsertCourseRequest request);
        IEnumerable<Course> GetCourses(GetCoursesRequest request);
    }
}
