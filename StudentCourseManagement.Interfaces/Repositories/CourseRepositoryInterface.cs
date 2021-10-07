using StudentCourseManagement.Models.Models.Entities;
using StudentCourseManagement.Models.Models.Requests;

namespace StudentCourseManagement.Interfaces.Repositories
{
    public interface CourseRepositoryInterface
    {
        Course UpsertCourse(UpsertCourseRequest request);
    }
}
