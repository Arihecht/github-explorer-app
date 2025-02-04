# GitHub Explorer App

A simple web application to search for GitHub users, view user details, and explore repository information, including the last 5 commits.

## Features
- 🔍 **Search GitHub Users** - Find users by their GitHub username.
- 👤 **View User Details** - See profile information and public repositories.
- 📂 **Explore Repositories** - View repository details, including descriptions, creation dates, and last 5 commits.

## Tech Stack
- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express, Axios
- **Testing**: Mocha, Chai, Jest, React Testing Library
- **Styling**: CSS (organized in `styles/` folder)

## Installation

### 1️⃣ Clone the repository:
```sh
 git clone https://github.com/<your-github-username>/github-explorer-app.git
 cd github-explorer-app
```

### 2️⃣ Install dependencies for both client and server:
```sh
 cd client
 npm install
 cd ../server
 npm install
```

### 3️⃣ Start the application:
#### Run the server:
```sh
 cd server
 npm run dev
```
#### Run the client:
```sh
 cd client
 npm start
```
The app should be available at `http://localhost:3000`.

## API Endpoints
The backend provides the following endpoints:
- `GET /api/github/search?q=<username>` - Search for GitHub users.
- `GET /api/github/user/:username` - Fetch user details and repositories.
- `GET /api/github/repo/:username/:repo` - Fetch repository details, including last 5 commits.

## Testing
### **Frontend Tests**
Run Jest tests:
```sh
 cd client
 npm test
```
### **Backend Tests**
Run Mocha & Chai tests:
```sh
 cd server
 npm test
```

## Folder Structure
```
/github-explorer-app
│── client/            # Frontend (React)
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components (Home, UserDetails, RepoDetails)
│   │   ├── services/    # API calls (Axios)
│   │   ├── styles/      # CSS styles
│   │   ├── App.js       # Main React App
│   │   ├── index.js     # React entry point
│   │   ├── setupTests.js # Jest setup
│   └── public/         # Static assets
│── server/            # Backend (Node.js, Express)
│   ├── controllers/    # API logic
│   ├── routes/         # Express routes
│   ├── tests/          # Mocha & Chai tests
│   ├── server.js       # Main server file
│── README.md          # Project documentation
│── package.json       # Dependencies & scripts
```

## Contributors
- [Ari Hecht](https://github.com/<Arihecht>)



