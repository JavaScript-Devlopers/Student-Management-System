// // Collections ka overview:

// // Users (Students, Teachers, Parents, Admin)
// // Classes (Subjects, Schedules, Teachers)
// // Attendance (Daily student attendance)
// // Exams (Marks & grading system)
// // Payments (Fees & transactions)
// // Chat (Real-time messaging)

// {
//     _id: ObjectId("65a1b0c3d9a8c2b4"),
//     name: "Rahul Sharma",
//     email: "rahul@example.com",
//     password: "hashed_password",
//     role: "Student", // Teacher, Parent, Admin
//     class_id: ObjectId("65a1b2c3d9a8c2b5"), // Student ki class
//     parent_id: ObjectId("65a1b3c3d9a8c2b6"), // Parent reference
//     contact: "+91-9876543210",
//     createdAt: ISODate("2024-02-13T10:00:00Z")
//  }

 

//  {
//     _id: ObjectId("65a1b2c3d9a8c2b5"),
//     class_name: "10th Grade",
//     section: "A",
//     teacher_id: ObjectId("65a1b4c3d9a8c2b7"), // Class Teacher
//     subjects: ["Math", "Science", "English"],
//     student_ids: [ObjectId("65a1b0c3d9a8c2b4"), ObjectId("65a1b8c3d9a8c2b9")], 
//     createdAt: ISODate("2024-02-13T10:00:00Z")
//  }
 


//  {
//     _id: ObjectId("65a1c0c3d9a8c2b8"),
//     student_id: ObjectId("65a1b0c3d9a8c2b4"),
//     date: ISODate("2024-02-12"),
//     status: "Present", // Absent, Late, Leave
//     class_id: ObjectId("65a1b2c3d9a8c2b5"),
//     createdAt: ISODate("2024-02-13T10:00:00Z")
//  }

 
//  {
//     _id: ObjectId("65a1d0c3d9a8c2c0"),
//     student_id: ObjectId("65a1b0c3d9a8c2b4"),
//     subject: "Math",
//     marks: 85,
//     grade: "A",
//     exam_date: ISODate("2024-02-10"),
//     teacher_id: ObjectId("65a1b4c3d9a8c2b7"),
//     createdAt: ISODate("2024-02-13T10:00:00Z")
//  }

 
//  {
//     _id: ObjectId("65a1f0c3d9a8c2c2"),
//     student_id: ObjectId("65a1b0c3d9a8c2b4"),
//     amount: 5000,
//     status: "Paid", // Pending, Failed
//     payment_method: "Razorpay",
//     transaction_id: "txn_ABC123",
//     createdAt: ISODate("2024-02-13T10:00:00Z")
//  }
 

//  {
//     _id: ObjectId("65a200c3d9a8c2c3"),
//     sender_id: ObjectId("65a1b0c3d9a8c2b4"), // Student
//     receiver_id: ObjectId("65a1b4c3d9a8c2b7"), // Teacher
//     message: "Sir, homework kab submit karna hai?",
//     timestamp: ISODate("2024-02-13T10:05:00Z"),
//     seen: false
//  }
 