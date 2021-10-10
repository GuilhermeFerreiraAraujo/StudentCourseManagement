using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentCourseManagement.Models.Models.Entities
{
    public class Student
    {
        public Student()
        {
            Subscriptions = new HashSet<Subscription>();
        }

        public int Id { get; set; }
        public string FirstName { get; set; }
        public string Surname { get; set; }
        public string Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string Address3 { get; set; }

        public virtual ICollection<Subscription> Subscriptions { get; set; }
    }
}
