using StudentCourseManagement.Models.Models.Entities;
using StudentCourseManagement.Models.Models.Requests;
using StudentCourseManagement.Models.Models.Responses;
using System.Collections.Generic;

namespace StudentCourseManagement.Interfaces.Services
{
    public interface CourseServiceInterface
    {
        UpsertCourseResponse UpsertCourse(UpsertCourseRequest request);
        IEnumerable<Course> GetCourses(GetCoursesRequest request);
    }
}
