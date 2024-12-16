# CleverConvo: Multimodal Text Wizard

CleverConvo is an AI-powered multimodal conversational solution that combines text, audio, and image-based interactions to facilitate natural and intelligent conversations. It leverages state-of-the-art technologies like CNN, LSTM, and Google's APIs to enable features such as image description, language translation, recommendation engines, sentiment analysis, and content generation.

This project was developed using **Next.js** for the frontend and **Python Django** for the backend, integrating Google’s APIs for advanced AI functionalities.

---

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Status](#project-status)
- [Project Structure](#project-structure)
- [Contributing](#contributing)


---

## Features
- **Multimodal Interaction**: Supports text, audio, and image-based interactions.
- **Image Description**: Provides descriptions of uploaded images.
- **Language Translation**: Translates text into multiple languages.
- **Recommendation Engine**: Suggests content or actions based on user input.
- **Sentiment Analysis**: Analyzes user sentiment in conversations.
- **Content Generation**: Generates creative text or responses based on prompts.

---

## Demo

You can also watch a detailed walkthrough of the project [here](https://github.com/user-attachments/assets/bac3b0af-54f2-46b6-97d1-e074fee8afd6).

---

## Tech Stack
- **Frontend**: Next.js
- **Backend**: Django (Python)
- **APIs**: Google’s Cloud APIs (Vision, Translation, etc.)
- **Machine Learning**: CNN and LSTM for AI functionalities
- **Database**: PostgreSQL
- **Others**: REST APIs, SCSS, Webpack, React-Redux

---

## Installation

Follow these steps to fork and set up the project locally:

### Prerequisites
Ensure you have the following installed on your system:
- **Python 3.9+**
- **Node.js 16+**
- **npm 8+** or **yarn**
- **PostgreSQL**
- **Git**

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/cleverconvo.git
   cd cleverconvo
   ```

2. **Set Up the Backend (Django)**
   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Create a virtual environment and activate it:
     ```bash
     python -m venv venv
     source venv/bin/activate  # On Windows: venv\Scripts\activate
     ```
   - Install dependencies:
     ```bash
     pip install -r requirements.txt
     ```
   - Configure the database in `cleverconvo/settings.py` (update the `DATABASES` section with your PostgreSQL credentials).
   - Apply migrations:
     ```bash
     python manage.py migrate
     ```
   - Start the backend server:
     ```bash
     python manage.py runserver
     ```

3. **Set Up the Frontend (React.js)**
   - Navigate to the frontend directory:
     ```bash
     cd ../frontend
     ```
   - Ensure `package.json` and `package-lock.json` are present in the directory.
   - Install dependencies:
     ```bash
     npm install  # Or: yarn install
     ```
   - Start the development server:
     ```bash
     npm start  # Or: yarn start
     ```

4. **Set Up Google Cloud APIs**
   - Create a Google Cloud project and enable APIs (Vision API, Translation API, etc.).
   - Download the credentials JSON file and place it in the `backend` directory.
   - Set the `GOOGLE_APPLICATION_CREDENTIALS` environment variable:
     ```bash
     export GOOGLE_APPLICATION_CREDENTIALS="path/to/your/credentials.json"
     ```

---

## Usage

1. Open the frontend in your browser at `http://localhost:3000`.
2. Use the various features like image description, language translation, and sentiment analysis.
3. The backend runs at `http://localhost:8000` and handles API requests.

---

## Project Status

🚧 **This project is currently in progress.** 🚧

We are actively working on adding new features, including:
- **Subscription Modal**: A feature to manage user subscriptions.
- **Blog Page**: A dedicated page for blogs and articles.
- **Additional Functionalities**: More enhancements and capabilities are planned.

Stay tuned for updates!

---

## Project Structure
```
cleverconvo/
├── backend/                 # Django backend
│   ├── manage.py            # Django entry point
│   ├── cleverconvo/         # Django app folder
│   │   ├── settings.py      # Project settings
│   │   ├── ...
├── frontend/                # React.js frontend
│   ├── src/                 # React source files
│   ├── public/              # Public assets
│   ├── package.json         # Frontend dependencies
│   ├── package-lock.json    # Lock file for consistent dependencies
├── requirements.txt         # Backend dependencies
├── README.md                # Project documentation
└── ...
```

---

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch.
3. Commit your changes and push to your fork.
4. Create a pull request.


