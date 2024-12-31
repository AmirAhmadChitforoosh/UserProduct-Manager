# Angular Management App
## Description
This project is a feature-rich Angular web application designed for managing users and products. It includes essential functionalities such as login and signup, adding and editing users and products, and displaying user and product lists. The application demonstrates efficient use of Angular's component-based architecture, forms, and services.

---
## Features
- **Authentication:**:
  - User login functionality
- **User Management:**
  - Add, edit, and display user details.
  - User list with dynamic updates.
- **Product Management:**
    - Add and edit products.
    - View a product list with detailed information.

---
## Acknowledgments
- This project was created as part of the **Hamkaran System Angular Bootcamp**, which provided structured training and guidance in modern web development practices.
- Thanks to the mentors and team at **Hamkaran System** for their support and feedback throughout the project.

---
## Technologies Used
- **Framework**: Angular
- **Language**: TypeScript, HTML, CSS
- **State Management**: Angular Services
- **Routing**: Angular Router
- **Styling**: CSS

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   
2. Install dependencies:
   ```bash
   npm install
   
3. Start the development server:
   ```bash
   ng serve
4. Open the application in your browser:
  - Navigate to `http://localhost:4200`.

---
## Getting Started
The first username and password for the webpage to start working is
  ```json
  {

    "username": "admin"
    "password":  "admin"
    
  }

## HTTP Requests

This project uses a variety of HTTP requests to interact with a backend running on `localhost:3000`. Below is a summary of the endpoints and their functionality:

- User Model:
  ```json
  {
    "id":
    "firstName":
    "lastName":
    "role":
    "nationalCode":
    "mobile":
    "username":
    "password":
    
  }

- Product Model:
  ```json
  {
  "id":
  "name":
  "code":
  "weight":
  }

### Authentication
- **POST `/api/auth`**  
  - Description: Validates user credentials and returns a token for authenticated sessions.  
  - Payload:  
    ```json
    {
      "username": "username123",
      "password": "password123"
    }
    ```

### User Management
- **GET `/api/users`**  
  - Description: Retrieves a list of all users.
  - 
- **POST `/api/users`**  
  - Description: Adds a new user to the database.   

- **PUT `/users/:id`**  
  - Description: Updates the information of a specific user.  
  - Payload:  
    ```json
    {
      "name": "Updated Name",
      "email": "updated.email@example.com"
    }
    ```

### Product Management
- **GET `/products`**  
  - Description: Retrieves a list of all products.  

- **POST `/products`**  
  - Description: Adds a new product to the database.  
  - Payload:  
    ```json
    {
      "name": "Product Name",
      "price": 25.99,
      "description": "Product description"
    }
    ```

- **PUT `/products/:id`**  
  - Description: Updates details of a specific product.  
  - Payload:  
    ```json
    {
      "name": "Updated Product Name",
      "price": 30.00,
      "description": "Updated product description"
    }
    ```

  


