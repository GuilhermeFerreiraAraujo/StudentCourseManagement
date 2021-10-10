namespace StudentCourseManagement.Models.Models.Responses
{
    public class GetSubscriptionsStatisticsResponse
    {
        public int CoursesWithoutFullCapacity { get; set; }
        public int StudentsWithoutAllSubscriptions { get; set; }
    }
}
