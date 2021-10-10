using StudentCourseManagement.Interfaces.Repositories;
using StudentCourseManagement.Interfaces.Services;
using StudentCourseManagement.Models.Models.Requests;
using StudentCourseManagement.Models.Models.Responses;

namespace StudentCourseManagement.Services.Services
{
    public class SubscriptionService : ISubscriptionService
    {
        private readonly ISubscriptionRepository _subscriptionRepository;
        public SubscriptionService(ISubscriptionRepository subscriptionRepository)
        {
            _subscriptionRepository = subscriptionRepository;
        }
        public DeleteSubscriptionResponse DeleteSubscription(DeleteSubscriptionRequest request)
        {
            return _subscriptionRepository.DeleteSubscription(request);
        }

        public GetSubscriptionsResponse GetSubscriptions(GetSubscriptionsRequest request)
        {
            return _subscriptionRepository.GetSubscriptions(request);
        }

        public GetSubscriptionsStatisticsResponse GetSubscriptionsStatistics()
        {
            return _subscriptionRepository.GetSubscriptionStatistics();
        }

        public UpsertSubscriptionResponse UpsertSubscription(UpsertSubscriptionRequest request)
        {
            return _subscriptionRepository.UpsertSubscription(request);
        }
    }
}
