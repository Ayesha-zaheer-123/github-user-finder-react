#  GitHub User Finder

A simple and elegant React application that lets you search for any GitHub user and instantly view their profile details including avatar, bio, followers, following, repositories, location, email, and Twitter handle.

![GitHub User Finder](https://img.shields.io/badge/React-19-blue?logo=react)
![GitHub API](https://img.shields.io/badge/GitHub-API-black?logo=github)

##  Preview

A clean dark-themed UI inspired by GitHub's own design  search a username and get a full profile card with stats.

## Features

-  Search any GitHub username in real time
-  Displays user avatar, name, and bio
- Shows followers, following, and public repository counts
-  Displays location, email, and Twitter/X handle (if available)
-  error handling for invalid/non-existent usernames
-  Fully responsive design (mobile friendly)
-  Dark GitHub style theme

## 🛠️ Tech Stack

- **React** (Hooks: `useState`)
- **GitHub REST API** (`https://api.github.com/users/{your-username}`)
- **CSS3** (Flexbox & Grid, media queries)
- **Font Awesome** (for icons)

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Ayesha-zaheer-123/github-finder.git
   ```

2. Navigate to the project folder
   ```bash
   cd github-finder
   ```

3. Install dependencies
   ```bash
   npm install
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:5173` (or the URL shown in your terminal)

## 📁 Project Structure

```
github-finder/
├── node_modules/
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── Githubfinder.jsx
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## ⚙️ How It Works

1. The user types a GitHub username into the input field.
2. On clicking **Search**, a request is sent to the GitHub API:
   ```
   https://api.github.com/users/{your-username}
   ```
3. If the user exists, their profile data (name, bio, stats, etc.) is displayed in a card.
4. If the user doesn't exist, an error message **"User not found!"** is shown instead.


## 👩‍💻 Author

**Ayesha Zaheer**
