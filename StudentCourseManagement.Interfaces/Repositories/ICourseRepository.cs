using StudentCourseManagement.Models.Models.Entities;
using StudentCourseManagement.Models.Models.Requests;
using StudentCourseManagement.Models.Models.Responses;
using System.Collections.Generic;

namespace StudentCourseManagement.Interfaces.Repositories
{
    public interface ICourseRepository
    {
        Course UpsertCourse(UpsertCourseRequest request);
        IEnumerable<Course> GetCourses(GetCoursesRequest request);
        DeleteCourseResponse DeleteCourse(DeleteCourseRequest request);
    }
}
