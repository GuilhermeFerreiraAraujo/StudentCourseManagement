using StudentCourseManagement.Models.Models.Entities;
using System.Collections.Generic;

namespace StudentCourseManagement.Models.Models.Responses
{
    public class GetSubscriptionsResponse
    {
        public GetSubscriptionsResponse()
        {
            Subscriptions = new List<SubscriptionViewModel>();
        }
        public List<SubscriptionViewModel> Subscriptions { get; set; }
    }

    public class SubscriptionViewModel
    {
        public int Id { get; set; }
        public int IdStudent { get; set; }
        public string StudentFirstName { get; set; }
        public string StudentSurname { get; set; }
        public int IdCourse { get; set; }
        public string CourseName { get; set; }
        public string CourseCode { get; set; }
    }
}
