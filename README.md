# Abdullah Mohammad Jaid Portfolio

A modern portfolio website built with React + Vite (frontend) and Django + Django REST Framework (backend).

## Features

- 🚀 Modern dark theme with cyan/purple accents
- 📱 Fully responsive design
- 💼 Project showcase
- 🛠️ Skills section
- 📧 Contact form with API integration
- 🔗 Social links (GitHub, LinkedIn, Email)

## Tech Stack

- **Frontend:** React 18, Vite
- **Backend:** Django 5, Django REST Framework
- **Database:** SQLite (default)

## Quick Start

### Option 1: Run Separately

**Backend:**
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

### Option 2: With Docker

```bash
docker-compose up --build
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/contact/ | Submit contact form |
| GET | /api/projects/ | Get projects list |
| GET | /api/skills/ | Get skills list |

## Environment

- Backend runs on: http://localhost:8000
- Frontend runs on: http://localhost:5173

## Profile Information

- **Name:** Abdullah Mohammad Jaid
- **Email:** jaid@amjaid.com
- **GitHub:** github.com/amjaid
- **LinkedIn:** linkedin.com/in/amjaid
- **University:** UTM (Software Engineering, 2027)