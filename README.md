# Angular Management App
## Description
This project is a feature-rich Angular web application designed for managing users and products. It includes essential functionalities such as login, adding and editing users and products, and displaying user and product lists. The application demonstrates efficient use of Angular's component-based architecture, forms, and services.

---
## Features
- **Authentication:**
  - User login functionality
- **User Management:**
  - Add and edit users.
  - User list with dynamic updates.
- **Product Management:**
    - Add and edit products.
    - View a product list with detailed information.

---
## Acknowledgments
This project was developed as part of the **Hamkaran System Angular Bootcamp**, a structured training program focusing on modern web development practices. Special thanks to the mentors and the team at **Hamkaran System** for their continuous support and insightful feedback throughout the project.

---
## Technologies Used
- **Framework**: Angular
- **Language**: TypeScript, HTML, CSS
- **State Management**: Angular Services
- **Routing**: Angular Router
- **Styling**: CSS

---
## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AmirAhmadChitforoosh/UserProduct-Manager
   cd UserProduct-Manager
   
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
Use the following default credentials to log in and start using the application:
  ```json
  {
    "username": "admin"
    "password": "admin"
  }
```


---
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
- **POST** `/api/auth`
  - Description: Validates user credentials and returns a token for authenticated sessions.  
  - Payload:  
    ```json
    {
      "username": 
      "password": 
    }
    ```
### User Management
- **GET** `/api/users`
  - Description: Retrieves a list of all users.
    
- **POST** `/api/users` 
  - Description: Adds a new user to the database.
    
- **PUT** `/api/users`
  - Description: Edits the information of users.

- **DELETE** `/api/users`
  - Description: Deletes a user from the database.

- **GET** `/api/users/current`
  - Description: Retrieves the information of the currently authenticated user.
    
### Product Management
- **GET** `/api/products`
  - Description: Retrieves a list of all products.
 
- **POST** `/api/products`
  - Description: Adds a new product to the database.  

- **PUT** `/api/products`
  - Description: Updates details of products.

- **DELETE** `/api/products`
  - Description:  Deletes a product from the database.
 

---
 ## Contact
Feel free to reach out if you have suggestions or feedback:
- **GitHub:** [AmirAhmadChitforoosh](https://github.com/AmirAhmadChitforoosh)
- **Email:** amirahmad.chitforoosh@gmail.com

  
  

  


