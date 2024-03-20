To document the routes of the application, we can create a separate document or section within the codebase where we describe each route, its method, parameters (if any), and the expected response.

Here's a sample documentation for the routes in the application:

---

## Checkmeng Application API Documentation

### Superadmins

- **POST /api/superadmins**

  - Create a new superadmin.
  - Request Body: JSON object containing superadmin data.
  - Response: Newly created superadmin object.

- **GET /api/superadmins**
  - Get all superadmins.
  - Response: Array of superadmin objects.

### School Admins

- **POST /api/schooladmins**

  - Create a new school admin.
  - Request Body: JSON object containing school admin data.
  - Response: Newly created school admin object.

- **GET /api/schooladmins**

  - Get all school admins.
  - Response: Array of school admin objects.

- **POST /api/classes**

  - Create a new class.
  - Request Body: JSON object containing class data.
  - Response: Newly created class object.

- **POST /api/arms**

  - Create a new arm (subdivision of a class).
  - Request Body: JSON object containing arm data.
  - Response: Newly created arm object.

- **POST /api/schools**

  - Create a new school.
  - Request Body: JSON object containing school data.
  - Response: Newly created school object.

- **POST /api/students**

  - Input student data.
  - Request Body: JSON object containing student data.
  - Response: Success message or error.

- **POST /api/compute-results**
  - Compute student results.
  - Request Body: JSON object containing necessary data for result computation.
  - Response: Success message or error.

### Students

- **POST /api/students**

  - Create a new student.
  - Request Body: JSON object containing student data.
  - Response: Newly created student object.

- **GET /api/students**
  - Get all students.
  - Response: Array of student objects.

### Other Controllers

- **POST /api/teachers**

  - Create a new teacher.
  - Request Body: JSON object containing teacher data.
  - Response: Newly created teacher object.

- **POST /api/settings**

  - Create a new setting.
  - Request Body: JSON object containing setting data.
  - Response: Newly created setting object.

- **POST /api/schools**

  - Create a new school.
  - Request Body: JSON object containing school data.
  - Response: Newly created school object.

- **POST /api/results**
  - Create a new result.
  - Request Body: JSON object containing result data.
  - Response: Newly created result object.

---

This documentation provides a clear overview of the available routes in the application, their purposes, and how to use them. You can expand on this documentation as needed, providing additional details for each route.

As for the navigation controllers and routes, you can create a separate file (e.g., `navigationController.js`) to handle navigation-related logic. Then, define the routes for navigation endpoints and mount them in your `app.js` file similarly to how other routes are mounted.

Let me know if you need further assistance!
