using StudentCourseManagement.Models.Models.Requests;
using StudentCourseManagement.Models.Models.Responses;

namespace StudentCourseManagement.Interfaces.Services
{
    public interface ISubscriptionService
    {
        GetSubscriptionsResponse GetSubscriptions(GetSubscriptionsRequest request);
        UpsertSubscriptionResponse UpsertSubscription(UpsertSubscriptionRequest request);
        DeleteSubscriptionResponse DeleteSubscription(DeleteSubscriptionRequest request);
        GetSubscriptionsStatisticsResponse GetSubscriptionsStatistics();
    }
}
