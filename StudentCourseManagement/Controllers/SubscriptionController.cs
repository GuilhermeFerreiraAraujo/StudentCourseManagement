using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using StudentCourseManagement.Interfaces.Services;
using StudentCourseManagement.Models.Models.Requests;
using StudentCourseManagement.Models.Models.Responses;
using System;

namespace StudentCourseManagement.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SubscriptionController : ControllerBase
    {
        private readonly ILogger<SubscriptionController> _logger;
        private readonly ISubscriptionService _subscriptionService;

        public SubscriptionController(ILogger<SubscriptionController> logger, ISubscriptionService subscriptionService)
        {
            _logger = logger;
            _subscriptionService = subscriptionService;
        }

        [HttpGet]
        [Route("GetSubscriptions")]
        public IActionResult GetSubscriptions([FromQuery]GetSubscriptionsRequest request)
        {
            try
            {
                return Ok(_subscriptionService.GetSubscriptions(request));
            }
            catch (Exception ex)
            {
                return BadRequest("There was a problem with your request!");
            }
        }

        [HttpGet]
        [Route("GetSubscriptionsStatistics")]
        public IActionResult GetSubscriptionsStatistics() 
        {
            try
            {
                var response = new GetSubscriptionsStatisticsResponse();
                response = _subscriptionService.GetSubscriptionsStatistics();

                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest("There was a problem with your request!");
            }
        }

        [HttpPost]
        [Route("UpsertSubscription")]
        public IActionResult UpsertSubscription([FromBody]UpsertSubscriptionRequest request)
        {
            try
            {
                var response = _subscriptionService.UpsertSubscription(request);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest("There was a problem with your request!");
            }
        }

        [HttpPost]
        [Route("DeleteSubscription")]
        public IActionResult DeleteSubscription([FromBody] DeleteSubscriptionRequest request)
        {
            try
            {
                var response = _subscriptionService.DeleteSubscription(request);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest("There was a problem with your request!");
            }
        }
    }
}
