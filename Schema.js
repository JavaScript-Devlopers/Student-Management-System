// Agar tum **MongoDB schema design** kar rahe ho **School Management System** ke liye, to tumhe **best relational structure** banana hoga jo **performance aur scalability** ke liye sahi ho.  

// ---

// ## 🏛 **MongoDB Schema Design for School Management System**
// **Collections ka overview:**  
// - **Users** (Students, Teachers, Parents, Admin)  
// - **Classes** (Subjects, Schedules, Teachers)  
// - **Attendance** (Daily student attendance)  
// - **Exams** (Marks & grading system)  
// - **Transport** (Bus details, Routes, GPS tracking)  
// - **Payments** (Fees & transactions)  
// - **Chat** (Real-time messaging)

// ---

// ## 📌 **1. Users Collection (Students, Teachers, Parents, Admin)**
// ✅ **User Roles:** `Student`, `Teacher`, `Parent`, `Admin`  
// ✅ **Relationships:** Student ke Parent aur Class se link honge  
// ✅ **Authentication:** Multi-role access ke liye `role` field  
// ```js
// {
//    _id: ObjectId("65a1b0c3d9a8c2b4"),
//    name: "Rahul Sharma",
//    email: "rahul@example.com",
//    password: "hashed_password",
//    role: "Student", // Teacher, Parent, Admin
//    class_id: ObjectId("65a1b2c3d9a8c2b5"), // Student ki class
//    parent_id: ObjectId("65a1b3c3d9a8c2b6"), // Parent reference
//    contact: "+91-9876543210",
//    createdAt: ISODate("2024-02-13T10:00:00Z")
// }
// ```

// ---

// ## 📌 **2. Classes Collection (Subjects, Teachers, Students)**
// ✅ **Students aur Teachers ko map karega**  
// ✅ **Subjects aur schedule bhi store honge**  
// ```js
// {
//    _id: ObjectId("65a1b2c3d9a8c2b5"),
//    class_name: "10th Grade",
//    section: "A",
//    teacher_id: ObjectId("65a1b4c3d9a8c2b7"), // Class Teacher
//    subjects: ["Math", "Science", "English"],
//    student_ids: [ObjectId("65a1b0c3d9a8c2b4"), ObjectId("65a1b8c3d9a8c2b9")], 
//    createdAt: ISODate("2024-02-13T10:00:00Z")
// }
// ```

// ---

// ## 📌 **3. Attendance Collection (Daily Attendance)**
// ✅ **RFID/Biometric based Attendance**  
// ✅ **Date-wise student attendance track karega**  
// ```js
// {
//    _id: ObjectId("65a1c0c3d9a8c2b8"),
//    student_id: ObjectId("65a1b0c3d9a8c2b4"),
//    date: ISODate("2024-02-12"),
//    status: "Present", // Absent, Late, Leave
//    class_id: ObjectId("65a1b2c3d9a8c2b5"),
//    createdAt: ISODate("2024-02-13T10:00:00Z")
// }
// ```

// ---

// ## 📌 **4. Exams & Results Collection**
// ✅ **Marks aur Grades ko track karega**  
// ✅ **Subject-wise performance analysis**  
// ```js
// {
//    _id: ObjectId("65a1d0c3d9a8c2c0"),
//    student_id: ObjectId("65a1b0c3d9a8c2b4"),
//    subject: "Math",
//    marks: 85,
//    grade: "A",
//    exam_date: ISODate("2024-02-10"),
//    teacher_id: ObjectId("65a1b4c3d9a8c2b7"),
//    createdAt: ISODate("2024-02-13T10:00:00Z")
// }
// ```

// ---

// ## 📌 **5. Transport Collection (Bus Tracking)**
// ✅ **Live GPS tracking ke liye**  
// ✅ **Student aur Bus ka mapping**  
// ```js
// {
//    _id: ObjectId("65a1e0c3d9a8c2c1"),
//    bus_number: "DL 10 AB 1234",
//    driver_name: "Suresh Kumar",
//    driver_contact: "+91-9876543211",
//    route: "Sector 12 to School",
//    student_ids: [ObjectId("65a1b0c3d9a8c2b4"), ObjectId("65a1b8c3d9a8c2b9")], 
//    gps_location: { lat: 28.7041, lng: 77.1025 },
//    createdAt: ISODate("2024-02-13T10:00:00Z")
// }
// ```

// ---

// ## 📌 **6. Payments & Fees Collection**
// ✅ **Online fee payment (Razorpay Integration)**  
// ✅ **Invoice aur due tracking**  
// ```js
// {
//    _id: ObjectId("65a1f0c3d9a8c2c2"),
//    student_id: ObjectId("65a1b0c3d9a8c2b4"),
//    amount: 5000,
//    status: "Paid", // Pending, Failed
//    payment_method: "Razorpay",
//    transaction_id: "txn_ABC123",
//    createdAt: ISODate("2024-02-13T10:00:00Z")
// }
// ```

// ---

// ## 📌 **7. Chat Collection (Real-time Messaging)**
// ✅ **Teacher-Student-Parent communication**  
// ✅ **Multi-role chat system**  
// ```js
// {
//    _id: ObjectId("65a200c3d9a8c2c3"),
//    sender_id: ObjectId("65a1b0c3d9a8c2b4"), // Student
//    receiver_id: ObjectId("65a1b4c3d9a8c2b7"), // Teacher
//    message: "Sir, homework kab submit karna hai?",
//    timestamp: ISODate("2024-02-13T10:05:00Z"),
//    seen: false
// }
// ```

// ---

// ## 🔗 **Relations Between Collections**
// | **Collection** | **Reference** |
// |---------------|-------------|
// | `users` | `class_id`, `parent_id` |
// | `classes` | `teacher_id`, `student_ids` |
// | `attendance` | `student_id`, `class_id` |
// | `exams` | `student_id`, `teacher_id` |
// | `transport` | `student_ids`, `bus_number` |
// | `payments` | `student_id`, `transaction_id` |
// | `chat` | `sender_id`, `receiver_id` |

// ---

// ## 🔥 **Conclusion**
// 1️⃣ **Data Normalization**: **Users, Classes, Transport, Attendance alag rakho** taaki query fast ho.  
// 2️⃣ **Indexes Use Karo**: `student_id`, `class_id`, `teacher_id` indexes honi chahiye.  
// 3️⃣ **Aggregation Pipelines**: Reports aur filtering ke liye **$lookup, $match** ka use karo.  
// 4️⃣ **Performance Optimization**: Large data sets ke liye **Sharding aur Indexing** ka use karo.  

// Agar tumhe **schema me koi aur modification ya optimization chahiye**, to batao! 🚀