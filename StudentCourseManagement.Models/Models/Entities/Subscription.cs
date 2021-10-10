namespace StudentCourseManagement.Models.Models.Entities
{
    public class Subscription
    {
        public int Id { get; set; }
        public int IdStudent { get; set; }
        public int IdCourse { get; set; }

        public virtual Course Course { get; set; }
        public virtual Student Student { get; set; }
    }
}