# ToDo App 📝

A simple full-stack ToDo application to manage tasks.  
This project demonstrates **frontend-backend integration, REST APIs, and JSON-based storage** — perfect for a portfolio showcase.

---

## Features

- Add, delete, and mark tasks as completed
- Persistent storage using a JSON file
- Interactive frontend built with HTML, CSS, and JavaScript
- Backend REST API built with Node.js and Express
- CORS enabled for frontend-backend communication

---

## Tech Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- Database: JSON file (`data.json`)
- Utilities: CORS, UUID

---

## Folder Structure

- ToDo-App/
  - backend/
    - server.js : Express server handling API requests
    - data.json : Stores the ToDo items
  - frontend/
    - index.html : Main frontend page
    - scripts.js : Frontend JavaScript (fetches API)
    - styles.css : CSS styling
  - package.json : Project metadata & dependencies
  - package-lock.json : NPM lockfile
  - README.md : Project documentation
  - LICENSE : MIT License

---

## How to Run Locally

1. Install Node.js from https://nodejs.org/  
2. Open terminal and go to the project folder. For example, if your folder is on Desktop:  
   cd ~/Desktop/ToDo-App  
3. Install project dependencies by running:  
   npm install  
4. Start the backend server:  
   node backend/server.js  
5. Open `frontend/index.html` in your browser. The frontend will communicate with the backend at http://localhost:3000

---

## How it Works

- `frontend/scripts.js` interacts with the backend API:
  - GET /todos → Fetch all tasks
  - POST /todos → Add a new task
  - PUT /todos/:id → Toggle task completion
  - DELETE /todos/:id → Delete a task
- Backend (`server.js`) updates `data.json` for persistent storage.

---

## Author

Ajay Jothiraj – [GitHub Profile](https://github.com/Ajay12git)

---

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.
