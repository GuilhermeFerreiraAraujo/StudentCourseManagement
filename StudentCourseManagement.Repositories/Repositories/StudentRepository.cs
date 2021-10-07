using StudentCourseManagement.Interfaces.Repositories;
using StudentCourseManagement.Models.Models.Requests;
using StudentCourseManagement.Models.Models.Responses;
using System.Collections.Generic;

namespace StudentCourseManagement.Repositories.Repositories
{
    public class StudentRepository : IStudentRepository
    {
        public IEnumerable<GetStudentsRequest> GetStudents(GetStudentsRequest request)
        {
            throw new System.NotImplementedException();
        }

        public UpsertStudentResponse UpsertStudent(UpsertStudentRequest request)
        {
            throw new System.NotImplementedException();
        }
    }
}
