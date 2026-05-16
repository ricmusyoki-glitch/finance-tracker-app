# Finance Tracker App

A personal finance tracking web application built with React and Firebase. Track your income and expenses, view your balance summary, and manage transactions in real time.

## Features

- Email/password authentication via Firebase Auth
- Add income and expense transactions
- Delete transactions
- Real-time balance, income, and expenses summary
- Search/filter transactions
- User profile page with financial stats
- Fully responsive on mobile and desktop
- Data persisted in Firebase Firestore

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Firebase (Auth + Firestore)
- React Router DOM
- Vitest + Testing Library

## Getting Started

### Installation

1. Clone the repository

2. Install dependencies

3. Create a .env file in the root directory and add your Firebase config

4. Start the development server



## Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project
3. Enable **Authentication → Email/Password**
4. Enable **Firestore Database** (start in test mode)
5. Copy your web app config into `.env`

## Running Tests
Run npm test

## Versioning

This project follows [Semantic Versioning](https://semver.org/).

Current version: **v1.0.0**

## License

MIT
