# Kam Chat - AI Powered Chat Application

A web-based chat application using Node.js, Express, EJS, and Google's Gemini API for intelligent chat responses.

## Features

*   Modern, responsive chat interface with message bubbles.
*   Powered by Google's Gemini API for chat responses.
*   Light and Dark theme customization.
*   Smart reply suggestions to speed up conversations.
*   Real-time message display with typewriter effect for bot messages.

## Prerequisites

*   [Node.js](https://nodejs.org/) (which includes npm) - Version 18.x or higher recommended.
*   A [Google Gemini API Key](https://ai.google.dev/). You can obtain one from Google AI Studio.

## Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repository-name.git
    ```
    *(Please replace `https://github.com/your-username/your-repository-name.git` with the actual URL of this repository if you know it, otherwise leave as a placeholder).*

2.  **Navigate to the project directory:**
    ```bash
    cd your-repository-name
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Create a `.env` file:**
    In the root of the project, create a file named `.env`.

5.  **Add your Gemini API key to the `.env` file:**
    Open the `.env` file and add your API key in the following format:
    ```env
    GEMINI_API_KEY=YOUR_ACTUAL_GEMINI_API_KEY
    ```
    Replace `YOUR_ACTUAL_GEMINI_API_KEY` with your real API key.

## Running the Application

1.  **For development mode (with automatic server restarts via nodemon):**
    ```bash
    npm run dev
    ```

2.  **For production mode:**
    ```bash
    npm start
    ```

3.  Once the server is running, open your web browser and navigate to:
    [http://localhost:3000](http://localhost:3000) (or the port number shown in the console if 3000 is already in use).

## How to Use

*   **Sending Messages:** Type your message into the input field at the bottom of the page and press Enter or click the send button.
*   **Themes:** Use the theme toggle (usually in the navigation bar or settings) to switch between Light and Dark modes.
*   **Smart Replies:** When the AI responds, you may see suggested replies appear as clickable buttons. Click one to send it quickly.
*   **Conversation History:** Scroll through the chat area to see previous messages.

---

Enjoy chatting!
