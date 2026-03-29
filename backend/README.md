# Portfolio Backend (Django)

## Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## API Endpoints

- `POST /api/contact/` - Submit contact form
- `GET /api/projects/` - Get projects list
- `GET /api/skills/` - Get skills list

## Run with React

Make sure React is running on port 5173, then run Django on port 8000.