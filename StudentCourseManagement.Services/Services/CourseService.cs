using StudentCourseManagement.Interfaces.Repositories;
using StudentCourseManagement.Interfaces.Services;
using StudentCourseManagement.Models.Models.Entities;
using StudentCourseManagement.Models.Models.Requests;
using StudentCourseManagement.Models.Models.Responses;
using System.Collections.Generic;

namespace StudentCourseManagement.Services.Services
{
    public class CourseService : CourseServiceInterface
    {
        private readonly CourseRepositoryInterface _courseRepository;
        public CourseService(CourseRepositoryInterface courseRepository)
        {
            _courseRepository = courseRepository;
        }

        public IEnumerable<Course> GetCourses(GetCoursesRequest request)
        {
            return _courseRepository.GetCourses(request);
        }

        public bool IsFormValid(UpsertCourseRequest request)
        {
            bool isFormValid = true;
            return isFormValid;
        }

        public UpsertCourseResponse UpsertCourse(UpsertCourseRequest request)
        {
            var response = new UpsertCourseResponse();
            
            if (IsFormValid(request))
            {
                var course = _courseRepository.UpsertCourse(request);
                response.Course = course;
            }

            return response;
        }
    }
}
