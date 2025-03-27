# GitHub User Search

## Description
GitHub User Search is a web application that allows users to search for GitHub profiles and view their details, including repositories, followers, and bio information.

## Features
- Search for GitHub users by username
- Display user profile information (avatar, bio, followers, repositories, etc.)
- View a list of repositories owned by the user
- Responsive and user-friendly UI

## Tech Stack
- **Frontend:** Vite, React, Tailwind CSS
- **State Management:** Zustand
- **API:** GitHub REST API

## Installation

### Prerequisites
Ensure you have **Node.js** and **npm** installed on your system.

### Steps to Set Up
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/github-user-search.git
   cd github-user-search
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory and add your GitHub API key (if required):
   ```ini
   VITE_APP_GITHUB_API_KEY=your_github_api_key_here
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Usage
1. Enter a GitHub username in the search bar.
2. Click on "Search" to fetch user details.
3. View the profile information and repositories.

## Deployment
To deploy the application, you can use services like **Vercel** or **Netlify**:
```sh
npm run build
```
This generates a `dist/` folder, which you can deploy.

## License
This project is licensed under the MIT License.

## Author
Developed by ** Hagos Yacob **.

## Contributing
Contributions are welcome! Feel free to fork this repository and submit pull requests.

