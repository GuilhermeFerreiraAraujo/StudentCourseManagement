using StudentCourseManagement.Models.Models.Entities;
using StudentCourseManagement.Models.Models.Requests;
using StudentCourseManagement.Models.Models.Responses;
using System.Collections.Generic;

namespace StudentCourseManagement.Interfaces.Repositories
{
    public interface IStudentRepository
    {
        List<Student> GetStudents(GetStudentsRequest request);
        UpsertStudentResponse UpsertStudent(UpsertStudentRequest request);
        DeleteStudentResponse DeleteStudent(DeleteStudentRequest request);
    }
}
