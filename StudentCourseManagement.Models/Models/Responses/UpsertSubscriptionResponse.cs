using System.Collections.Generic;

namespace StudentCourseManagement.Models.Models.Responses
{
    public class UpsertSubscriptionResponse
    {
        public int Id { get; set; }
        public bool Success { get; set; }
        public List<string> Errors { get; set; }
    }
}
