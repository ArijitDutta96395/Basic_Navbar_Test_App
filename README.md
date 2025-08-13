# Basic Routing Navbar App

This is a simple Node.js application that demonstrates basic routing and serves a multi-page website with a navigation bar. The application is built using Express.js.

## Features

*   **Multi-page Website:** The application serves multiple HTML pages, including a homepage, about page, products page, and contact page.
*   **Static File Serving:** The application serves static files, such as CSS stylesheets.
*   **Basic Routing:** The application uses Express.js to handle routing and serve the appropriate HTML page based on the URL.
*   **Improved UI:** The user interface has been improved with a modern design, including a responsive navigation bar, a clean layout, and a consistent color scheme.

## Technologies Used

*   **Node.js:** A JavaScript runtime environment that allows you to run JavaScript on the server-side.
*   **Express.js:** A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
*   **HTML5:** The standard markup language for creating web pages.
*   **CSS3:** A stylesheet language used to describe the presentation of a document written in a markup language like HTML.

## Setup and Usage

To run this application locally, you will need to have Node.js and npm (Node Package Manager) installed on your machine.

1.  **Clone the repository or download the source code.**
2.  **Navigate to the project directory in your terminal.**
3.  **Install the dependencies:**

    ```bash
    npm install express
    ```

4.  **Start the server:**

    ```bash
    node server2.js
    ```

5.  **Open your web browser and navigate to `http://localhost:3000` to view the application.**

## File Structure

```
.gitignore
node_modules/
package-lock.json
package.json
public/
├── about.html
├── contact.html
├── index.html
├── products.html
└── styles.css
README.md
server.js
server1.js
server2.js

```

*   **`server2.js`**: The main application file that contains the Node.js Express server code.
*   **`public/`**: This directory contains all the static files, such as HTML and CSS.
    *   **`index.html`**: The homepage of the website.
    *   **`about.html`**: The about page of the website.
    *   **`products.html`**: The products page of the website.
    *   **`contact.html`**: The contact page of the website.
    *   **`styles.css`**: The stylesheet for the website.
*   **`README.md`**: This file, which provides information about the application.
