from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Contact
from .serializers import ContactSerializer

# Contact form API
class ContactCreateView(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response({
            'success': True,
            'message': 'Message received! I\'ll get back to you soon.',
            'data': serializer.data
        })

# Projects data (static for now)
@api_view(['GET'])
def projects_list(request):
    projects = [
        {
            'id': 1,
            'title': 'Automated Business Intelligence Scraper',
            'description': 'Production-grade automation system to extract business data from Google Maps at scale. Implemented parallel scraping with rate limiting, anti-detection strategies, and fault-tolerant architecture.',
            'tech_stack': ['Python', 'Playwright', 'asyncio', 'Docker', 'Pandas'],
            'link': 'https://github.com/amjaid',
            'featured': True
        },
        {
            'id': 2,
            'title': 'Career Counseling System',
            'description': 'System to guide students based on interests and academic background. Features user authentication, form validation, and admin dashboard.',
            'tech_stack': ['PHP', 'JavaScript', 'MySQL', 'HTML', 'CSS'],
            'link': 'https://github.com/amjaid',
            'featured': True
        },
        {
            'id': 3,
            'title': 'Lost & Found Management System',
            'description': 'Campus-based system to report and track lost items. Implemented UML modeling and database management for item tracking.',
            'tech_stack': ['Java', 'SQL', 'UML', 'Database Design'],
            'link': 'https://github.com/amjaid',
            'featured': True
        }
    ]
    return Response(projects)

# Skills data (static for now)
@api_view(['GET'])
def skills_list(request):
    skills = {
        'programming': ['Python', 'JavaScript', 'Java', 'PHP', 'C++', 'SQL'],
        'backend': ['Django', 'Django REST Framework', 'Node.js'],
        'frontend': ['React', 'Vite', 'HTML', 'CSS', 'JavaScript'],
        'automation': ['Playwright', 'asyncio', 'Scrapy', 'BeautifulSoup', 'Pandas'],
        'tools': ['Docker', 'Git', 'Linux', 'VS Code', 'Figma'],
        'databases': ['MySQL', 'PostgreSQL', 'SQLite']
    }
    return Response(skills)