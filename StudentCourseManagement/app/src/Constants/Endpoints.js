export const StudentsApis = {
    GetStudents: "Student/GetStudents",
    UpsertStudents: "Student/UpsertStudent",
    DeleteStudent: "Student/DeleteStudent",
    GetStudentsByCourseId:"Student/GetStudentsByCourseId"
};

export const CoursesApis = {
    GetCourses: "Course/GetCourses",
    UpsertCourses: "Course/UpsertCourse",
    DeleteCourse: "Course/DeleteCourse",
    GetCoursesByStudentId: "Course/GetCoursesByStudentId",
};

export const SubscriptionsApis = {
    GetSubscriptions: "Subscription/GetSubscriptions",
    UpsertSubscriptions: "Subscription/UpsertSubscription",
    GetSubscriptionsStatistics: "Subscription/GetSubscriptionsStatistics"
};