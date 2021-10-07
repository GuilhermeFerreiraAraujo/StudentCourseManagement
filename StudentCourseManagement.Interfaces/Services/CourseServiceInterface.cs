using StudentCourseManagement.Models.Models.Requests;
using StudentCourseManagement.Models.Models.Responses;

namespace StudentCourseManagement.Interfaces.Services
{
    public interface CourseServiceInterface
    {
        UpsertCourseResponse UpsertCourse(UpsertCourseRequest request);
    }
}
