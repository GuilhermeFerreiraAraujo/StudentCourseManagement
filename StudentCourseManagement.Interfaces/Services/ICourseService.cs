using StudentCourseManagement.Models.Models.Entities;
using StudentCourseManagement.Models.Models.Requests;
using StudentCourseManagement.Models.Models.Responses;
using System.Collections.Generic;

namespace StudentCourseManagement.Interfaces.Services
{
    public interface ICourseService
    {
        UpsertCourseResponse UpsertCourse(UpsertCourseRequest request);
        IEnumerable<Course> GetCourses(GetCoursesRequest request);
        DeleteCourseResponse DeleteCourse(DeleteCourseRequest request);
        GetCoursesByStudentIdResponse GetCoursesByStudentId(int id);
    }
}
