using System;
using System.Collections.Generic;

namespace StudentCourseManagement.Models.Models.Entities
{
    public class Course
    {
        public Course()
        {
            Subscriptions = new HashSet<Subscription>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public string Teacher { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public virtual ICollection<Subscription> Subscriptions { get; set; }
    }
}
