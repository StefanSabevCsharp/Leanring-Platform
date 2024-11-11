🎓 LMS Platform - MERN Stack

A Learning Management System (LMS) built with the MERN stack (MongoDB, Express, React, Node.js), designed to provide a rich, role-based learning experience. This platform allows instructors to create and manage courses, post blog articles, and engage with students, while students can subscribe to courses, leave comments, and provide reviews.

📌 Features

🔑 Role-Based Functionality

Instructors: Can create, edit, and manage courses, as well as write and publish blog posts. The instructor dashboard provides access to tools for content creation and engagement with students.
Students: Can subscribe to courses, leave comments on course content, and post reviews for each course. This interaction helps create a community-driven environment.

🔒 Authentication and Authorization

JWT Authentication: The platform uses JSON Web Tokens (JWTs) to manage user authentication securely, with tokens stored in cookies for session persistence.
Role-Based Access Control: Access to certain features is restricted based on the user’s role (e.g., only instructors can create/edit content). React Context (authContext) is used to handle user state, including login status, roles, and loading states.

📚 Content and Course Management

Course Creation and Editing: Instructors can create and edit courses in the management dashboard, keeping course materials up to date.

Blog Management: Instructors can publish blog posts for additional educational content, announcements, or relevant information.

Subscription and Reviews: Students can subscribe to courses they’re interested in, leave comments for interactive feedback, and post reviews that help improve course quality and engagement.

✉️ Contact Form

Email Integration: A contact form allows users to send emails directly to the platform’s support team or administrators for easy communication and support requests.

🎨 Theming and UX

Light/Dark Mode: Users can toggle between light and dark themes, improving accessibility and user experience. This is implemented using Tailwind CSS and controlled by updating the class on the <html> tag.
Error Notifications: The platform uses React Toastify to display error messages and success notifications, providing immediate feedback on actions like course enrollment or content creation.

🛠️ Tech Stack

Frontend: Vite, React, React Router, Tailwind CSS
Backend: Express.js, Node.js, MongoDB (for data storage)
State Management: React Context API for managing user authentication and role-based access
Validation: Validator library for client-side validation, with server-side validation for security and data integrity
Error Handling: React Toastify for user notifications
Authentication: JWT for secure session management and role-based access control

🚀 Access the Application

Go to https://stefansabev.com


📂 Project Structure

Backend (Express.js)
Routes:

authRoutes: Manages registration, login, and authentication
courseRoutes: Handles course creation, editing, and retrieval
blogRoutes: Enables instructors to create blog posts
contactRoutes: Processes messages sent through the contact form and sends emails

Models:

User: Defines user data, including role (student or instructor)
Course: Stores course information (title, description, instructor details, etc.)
BlogPost: Contains blog content created by instructors

Frontend (Vite + React)

Components:

Dashboard: Role-based dashboard for students and instructors
CourseList: Displays available courses to students
CourseDetail: Shows individual course details, comments, and review sections
Blog: List of blog posts authored by instructors
ContactForm: Form for users to contact support or administrators
There are many more components linked with courses, course creation, dashboard functionalities

Contexts:

AuthContext: Manages user authentication, login state, and role information
DataContext: Handles information about user object,his role, subscriptions etc.
📖 Usage

Instructor Role:

Create and Manage Courses: Go to the dashboard to add new courses or edit existing ones.
Write Blog Posts: Use the blog management section to publish and update blog content.
View Student Engagement

Student Role:

Browse and Subscribe to Courses: View courses and subscribe to enroll.
Comment and Review: Leave feedback and rate courses, contributing to course improvement and community interaction.
Add courses to wishlist visible in dashboard.

🔐 Security and Validation

JWT and Role-Based Access Control: Ensures users can only access and modify resources based on their role.
Client and Server-Side Validation: Form validation with the Validator library on the client side and additional server-side validation to prevent unauthorized actions.
Error and Success Notifications: Uses React Toastify for real-time user feedback.

🔧 Future Improvements

Enhanced Role Management: Potential to add more roles with varying permissions (e.g., admins).
Course Analytics: Track student progress and course performance metrics for instructors.
Live Chat or Q&A Feature: Enable real-time interaction between students and instructors.
Add ecommerce shop to buy real courses

📜 License
This project is open-source and available under the MIT License.

