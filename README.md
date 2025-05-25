# 📝 Todo Summary Assistant

A full-stack application that lets users manage a list of to-do items, generate a summary of incomplete tasks using an LLM (Mistral via OpenRouter), and send the summary to a Slack channel.

---

## 🚀 Features

- ✅ Add, edit, delete to-do items
- 📋 View a list of current tasks
- 🤖 Generate a natural language summary of pending tasks using Mistral LLM
- 📤 Send summaries directly to a Slack channel via webhook
- 🔔 Visual feedback via toast notifications for success/failure
- 🛠 Built with React, Vite, TailwindCSS, shadcn/ui, Node.js, Prisma, and Mistral LLM

---

## 🛠️ Setup Instructions

### Prerequisites

- Node.js v18+
- PostgreSQL or any supported Prisma database
- Slack workspace with webhook access
- [OpenRouter](https://openrouter.ai) account and API key for Mistral

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/todo-summary-assistant.git
cd todo-summary-assistant
```

### 2. Install Frontend Dependencies

```
cd client/
npm install
```

### 3. Install Backend Dependencies

```
cd server/
npm install
```

### 4. Configure Environment Variables
Create a .env file in /server with:

```
# Database configuration
DATABASE_URL=postgres://user:password@localhost:6543/mydatabase
DIRECT_URL=postgres://user:password@localhost:6543/mydatabase

# OpenRouter API key
OPENROUTER_API_KEY=your_openrouter_api_key_here

# Slack webhook URL for notifications
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/your/slack/webhook/url
```

### 5. Setup Database

```
npx prisma migrate dev --name init
npx prisma generate
```

### 6. Run the App
Backend

```
cd server
npm run dev
```

Frontend
```
cd client
npm run dev
```

## 🤖 LLM & Slack Integration

Slack
Go to https://api.slack.com/apps and create a new app

Enable Incoming Webhooks

Create a webhook URL and copy it to your .env file under SLACK_WEBHOOK_URL

Mistral via OpenRouter
Create an account at https://openrouter.ai

Go to your API key settings

Copy your key and add it to .env as OPENROUTER_API_KEY

> **Note**: You’ll be using the Mistral model via OpenRouter’s API endpoint.

## 🧠 Design & Architecture Decisions

### Frontend

- React + Vite for fast and modern UI development.

- TailwindCSS with shadcn/ui for clean UI components.

- sonner for toast notifications—non-intrusive and accessible feedback.

- Validation to prevent empty or duplicate tasks.

### Backend

- Node.js + Express for RESTful APIs.

- Prisma ORM for database interaction (PostgreSQL recommended).

- LLM integration is abstracted in a utility layer using OpenRouter’s Mistral endpoint.

- Slack Webhook used to post summaries, keeping Slack integration simple and decoupled.

## 🗂️ Project Structure

```
/client
  └── src/
      ├── components/
      ├── pages/
      ├── services/
      ├── App.jsx
      └── main.jsx

/server
  ├── prisma/
  ├── routes/
  ├── controllers/
  ├── utils/
  ├── index.js
  └── .env
```

<h3 align="center">Thank you for checking out my work. Have a nice day! </h3>