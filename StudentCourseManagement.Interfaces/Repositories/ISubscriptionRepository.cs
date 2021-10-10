using StudentCourseManagement.Models.Models.Requests;
using StudentCourseManagement.Models.Models.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentCourseManagement.Interfaces.Repositories
{
    public interface ISubscriptionRepository
    {
        DeleteSubscriptionResponse DeleteSubscription(DeleteSubscriptionRequest request);
        UpsertSubscriptionResponse UpsertSubscription(UpsertSubscriptionRequest request);
        GetSubscriptionsResponse GetSubscriptions(GetSubscriptionsRequest request);
        GetSubscriptionsStatisticsResponse GetSubscriptionStatistics();
    }
}
