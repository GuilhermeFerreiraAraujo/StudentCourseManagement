using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using StudentCourseManagement.Interfaces.Repositories;
using StudentCourseManagement.Models;
using StudentCourseManagement.Models.Models.Entities;
using StudentCourseManagement.Models.Models.Requests;
using StudentCourseManagement.Models.Models.Responses;
using StudentCourseManagement.Repositories.Models;
using System;
using System.Data;
using System.Linq;

namespace StudentCourseManagement.Repositories.Repositories
{
    public class SubscriptionRepository : ISubscriptionRepository
    {
        private readonly StudentCourseManagementContext _context;
        public SubscriptionRepository(StudentCourseManagementContext context)
        {
            _context = context;
        }

        public DeleteSubscriptionResponse DeleteSubscription(DeleteSubscriptionRequest request)
        {
            var response = new DeleteSubscriptionResponse();
            var subscription = _context.Subscriptions.FirstOrDefault(x => x.Id == request.Id);
            _context.Subscriptions.Remove(subscription);
            _context.SaveChanges();
            return response;
        }

        public GetSubscriptionsResponse GetSubscriptions(GetSubscriptionsRequest request)
        {
            var response = new GetSubscriptionsResponse();
            
            var subscriptions = _context.Subscriptions.Where(x => x.Id > 0)
                    .Include(x => x.Student)
                    .Include(x => x.Course)
                .ToList();

            subscriptions.ForEach(x =>
            {
                var subscriptionViewMode = new SubscriptionViewModel
                {
                    Id = x.Id,
                    IdCourse = x.IdCourse,
                    IdStudent = x.IdStudent,
                    CourseCode = x.Course.Code,
                    StudentFirstName = x.Student.FirstName,
                    StudentSurname = x.Student.Surname,
                    CourseName = x.Course.Name
                };
                response.Subscriptions.Add(subscriptionViewMode);
            });

            return response;
        }

        public GetSubscriptionsStatisticsResponse GetSubscriptionStatistics()
        {
            var response = new GetSubscriptionsStatisticsResponse();

            using (var connection = new SqlConnection(_context.Database.GetConnectionString()))
            {
                var SQL = "GetCoursesWithoutFullCapacity";
                var cmd = new SqlCommand(SQL, connection);

                cmd.CommandType = CommandType.StoredProcedure;

                var maxNumberOfSubscriptions = new SqlParameter
                {
                    ParameterName = "@MaxNumberOfSubscriptions", 
                    SqlDbType = SqlDbType.Int, 
                    Value = Constants.MaxNumberOfSubscriptions, 
                    Direction = ParameterDirection.Input 
                };
                cmd.Parameters.Add(maxNumberOfSubscriptions);

                connection.Open();
                var sdr = cmd.ExecuteReader();

                while (sdr.Read())
                {
                    response.CoursesWithoutFullCapacity = Int32.Parse(sdr[0].ToString());
                }

                connection.Close();

                SQL = "GetStudentsWithoutAllSubscriptions";
                cmd = new SqlCommand(SQL, connection);

                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add(new SqlParameter
                {
                    ParameterName = "@MaxNumberOfSubscriptions",
                    SqlDbType = SqlDbType.Int,
                    Value = Constants.MaxNumberOfSubscriptions,
                    Direction = ParameterDirection.Input
                });

                connection.Open();

                sdr = cmd.ExecuteReader();

                while (sdr.Read())
                {
                    response.StudentsWithoutAllSubscriptions = Int32.Parse(sdr[0].ToString());
                }
            }

            return response;
        }

        public UpsertSubscriptionResponse UpsertSubscription(UpsertSubscriptionRequest request)
        {
            var response = new UpsertSubscriptionResponse();
            var student = _context.Students.FirstOrDefault(x => x.Id == request.IdStudent);

            if (student == null)
            {
                throw new Exception("Student id is invalid");
            }

            var course = _context.Courses.FirstOrDefault(x => x.Id == request.IdCourse);

            if (course == null)
            {
                throw new Exception("Course id is invalid");
            }

            var subscription = _context.Subscriptions.FirstOrDefault(x => x.IdCourse == course.Id && x.IdStudent == student.Id);

            if (subscription != null)
            {
                throw new Exception("Subscription already exists");
            }

            var subscriptions = _context.Subscriptions.Where(x => x.IdStudent == request.IdStudent).ToList();

            if (subscriptions.Count >= Constants.MaxNumberOfSubscriptions)
            {
                throw new Exception("This student already reach the maximum number of subscriptions");
            }

            var newSubscription = new Subscription
            {
                IdCourse = course.Id,
                IdStudent = student.Id
            };

            _context.Subscriptions.Add(newSubscription);
            _context.SaveChanges();
            return response;
        }
    }
}
