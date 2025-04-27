

# **AI Safety Incident Log API**

This is a simple RESTful API service designed to log and manage AI safety incidents. The API is built using **Node.js** with **Express** and **MongoDB** as the database. This project aims to assess the basic backend development skills, including API design, data handling, and persistence.

### **Table of Contents**
1. [Prerequisites](#prerequisites)
2. [Setting Up the Project](#setting-up-the-project)
3. [Running the Application](#running-the-application)
4. [API Endpoints Usage](#api-endpoints-usage)
5. [Error Handling](#error-handling)
6. [Populating Database (Optional)](#populating-database-optional)
7. [Environment Variables](#environment-variables)
8. [Submission](#submission)

---

## **Prerequisites**

Before running the application, ensure you have the following installed on your machine:

- **Node.js**: Download and install from [here](https://nodejs.org/).
- **MongoDB**: You can either run MongoDB locally or use a cloud-based service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

## **Setting Up the Project**

### 1. Clone the Repository
Clone this repository to your local machine:
```bash
git clone https://github.com/sauravsuman12210691/HumanChain-AI-Safety-Incident-Log-API.git

### 2. Install Dependencies
Navigate to the project directory and run the following command to install all required dependencies:
```bash
cd .\HumanChain-AI-Safety-Incident-Log-API
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root of the project and add the following content:
```env
MONGO_URI=mongodb://localhost:27017/incidentLog  # MongoDB connection string
PORT=5000  # Port for the server
```

> **Note**: If using a cloud database like MongoDB Atlas, replace `MONGO_URI` with your connection string.

## **Running the Application**
### **Populating Database (Optional)**

To populate the database with sample incidents, run the following command:
```bash
npm run populate
```
This will delete any existing incidents and insert 2-3 sample incidents into the database.

---
### 1. Start the Application
To run the application in development mode with auto-reloading, use `nodemon`:
```bash
npm run dev
```

For **production mode** (no auto-reloading):
```bash
npm start
```

The application will be available at `http://localhost:5000`.

## **API Endpoints Usage**

### **1. Get All Incidents**
- **Endpoint**: `GET /incidents`
- **Description**: Retrieves all incidents stored in the database.
- **Example Request**:
  ```bash
  curl -X GET http://localhost:5000/incidents
  ```
- **Response**:
  ```json
  [
    {
      "id": 1,
      "title": "AI Bias Detected",
      "description": "The AI showed hiring bias against female candidates.",
      "severity": "High",
      "reported_at": "2025-04-27T12:00:00Z"
    },
    {
      "id": 2,
      "title": "Chatbot Misbehaving",
      "description": "Chatbot produced offensive responses during customer support.",
      "severity": "Medium",
      "reported_at": "2025-04-27T12:00:00Z"
    }
  ]
  ```

### **2. Create a New Incident**
- **Endpoint**: `POST /incidents`
- **Description**: Log a new incident to the database.
- **Request Body** (Example):
  ```json
  {
    "title": "AI Bias Detected",
    "description": "The AI showed hiring bias against female candidates.",
    "severity": "High"
  }
  ```
- **Example Request**:
  ```bash
  curl -X POST http://localhost:5000/incidents \
    -H "Content-Type: application/json" \
    -d '{
      "title": "AI Bias Detected",
      "description": "The AI showed hiring bias against female candidates.",
      "severity": "High"
    }'
  ```
- **Response**:
  ```json
  {
    "id": 3,
    "title": "AI Bias Detected",
    "description": "The AI showed hiring bias against female candidates.",
    "severity": "High",
    "reported_at": "2025-04-27T12:00:00Z"
  }
  ```

### **3. Get an Incident by ID**
- **Endpoint**: `GET /incidents/{id}`
- **Description**: Retrieve a specific incident by its ID.
- **Example Request**:
  ```bash
  curl -X GET http://localhost:5000/incidents/1
  ```
- **Response**:
  ```json
  {
    "id": 1,
    "title": "AI Bias Detected",
    "description": "The AI showed hiring bias against female candidates.",
    "severity": "High",
    "reported_at": "2025-04-27T12:00:00Z"
  }
  ```

### **4. Delete an Incident by ID**
- **Endpoint**: `DELETE /incidents/{id}`
- **Description**: Delete an incident by its ID.
- **Example Request**:
  ```bash
  curl -X DELETE http://localhost:5000/incidents/1
  ```
- **Response**:
  ```json
  {
    "message": "Incident deleted successfully"
  }
  ```

## **Error Handling**
The API returns standard HTTP error responses when an error occurs.

- **400 Bad Request**: Invalid data or missing required fields.
  Example:
  ```json
  {
    "error": "Title, description, and severity are required."
  }
  ```

- **404 Not Found**: If an incident is not found by the specified ID.
  Example:
  ```json
  {
    "error": "Incident not found"
  }
  ```



## **Environment Variables**
You need to configure the following environment variables:

- **MONGO_URI**: MongoDB connection string (either local or remote).
- **PORT**: The port on which the server will run (default: `5000`).

Example `.env` file:
```env
MONGO_URI=mongodb://localhost:27017/incidentLog
PORT=5000
```

---
