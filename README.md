# 🎓 LMS Platform - MERN Stack

A Learning Management System (LMS) built with the MERN stack (MongoDB, Express, React, Node.js), designed to provide a rich, role-based learning experience. This platform allows instructors to create and manage courses, post blog articles, and engage with students, while students can subscribe to courses, leave comments, and provide reviews.

---
🌐 **Live Demo**: [learny.stefansabev.com](http://learny.stefansabev.com)

**Note**: While the design of this platform is inspired by the Edurock theme, I built all the functionality from the ground up using React. I put a lot of work into developing custom features, implementing role-based access, managing state with React Context, and ensuring smooth user interactions. The project showcases my ability to turn a static design into a fully dynamic, interactive learning management system.
## 📌 Features

### 🔑 Role-Based Functionality
- **Instructors**:  
  - Create, edit, and manage courses.  
  - Write and publish blog posts.  
  - Use a dashboard to access tools for content creation and student engagement.

- **Students**:  
  - Subscribe to courses and access learning materials.  
  - Leave comments and post reviews to foster a community-driven environment.

---

### 🔒 Authentication and Authorization
- **JWT Authentication**:  
  - JSON Web Tokens (JWTs) handle secure user authentication, stored in cookies for session persistence.  

- **Role-Based Access Control**:  
  - Certain features are accessible only to specific roles (e.g., only instructors can create/edit content).  
  - React Context (`authContext`) manages user state, including login status, roles, and loading states.

---

### 📚 Content and Course Management
- **Course Creation and Editing**:  
  - Instructors can manage courses via a dashboard, ensuring up-to-date content.  

- **Blog Management**:  
  - Instructors can publish blog posts for additional educational materials, announcements, or updates.  

- **Subscriptions and Reviews**:  
  - Students can subscribe to courses, leave comments, and post reviews to improve engagement and course quality.

---

### ✉️ Contact Form
- **Email Integration**:  
  - Users can send emails directly to support or administrators for communication and support requests.

---

### 🎨 Theming and UX
- **Light/Dark Mode**:  
  - Users can toggle between themes to enhance accessibility and improve the user experience.  
  - Implemented with Tailwind CSS by updating the `<html>` tag classes.  

- **Error Notifications**:  
  - React Toastify displays real-time feedback on user actions, like course enrollment or content creation.

---

## 🛠️ Tech Stack
### **Frontend**:  
- Vite, React, React Router, Tailwind CSS  

### **Backend**:  
- Express.js, Node.js, MongoDB  

### **State Management**:  
- React Context API for managing user authentication and role-based access  

### **Validation**:  
- Validator library for client-side validation, with server-side checks for security  

### **Error Handling**:  
- React Toastify for user notifications  

### **Authentication**:  
- JWT for secure session management and role-based access control  

---

## 📂 Project Structure

### Backend (Express.js)

- **Routes**:
  - `authRoutes`: Manages registration, login, and authentication.
  - `courseRoutes`: Handles course creation, editing, and retrieval.
  - `blogRoutes`: Enables instructors to create, update, and delete blog posts.
  - `contactRoutes`: Processes messages sent through the contact form and sends emails.

- **Models**:
  - `User`: Defines user data, including role (student or instructor).
  - `Course`: Stores course information (title, description, instructor details, etc.).
  - `BlogPost`: Contains blog content created by instructors.

### Frontend (Vite + React)

- **Components**:
  - `Dashboard`: Role-based dashboard for students and instructors.
  - `CourseList`: Displays available courses to students.
  - `CourseDetail`: Shows individual course details, comments, and review sections.
  - `Blog`: List of blog posts authored by instructors.
  - `ContactForm`: Form for users to contact support or administrators.

- **Contexts**:
  - `AuthContext`: Manages user authentication, login state, and role information.
  - `DataContext`: Handles information about user object, role, subscriptions, and more.

---

## 📖 Usage

### Instructor Role:

- **Create and Manage Courses**: Go to the dashboard to add new courses or edit existing ones.
- **Write Blog Posts**: Use the blog management section to publish and update blog content.
- **View Student Engagement**: Track comments and reviews on courses.

### Student Role:

- **Browse and Subscribe to Courses**: View courses and subscribe to enroll.
- **Comment and Review**: Leave feedback and rate courses, contributing to course improvement and community interaction.
- **Wishlist**: Allow students to add courses to their wishlist, visible in the dashboard.

---

## 🔐 Security and Validation

- **JWT and Role-Based Access Control**: Ensures users can only access and modify resources based on their role.
- **Client and Server-Side Validation**: Form validation with the Validator library on the client side and additional server-side validation to prevent unauthorized actions.
- **Error and Success Notifications**: Uses React Toastify for real-time user feedback.

---

## 🔧 Future Improvements

- **Enhanced Role Management**: Potential to add more roles with varying permissions (e.g., admins).
- **Course Analytics**: Track student progress and course performance metrics for instructors.
- **Live Chat or Q&A Feature**: Enable real-time interaction between students and instructors.
- **Ecommerce Shop**: Add functionality to buy real courses.


---

## 📜 License

This project is open-source and available under the MIT License.
