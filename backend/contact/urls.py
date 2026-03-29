from django.urls import path
from . import views

urlpatterns = [
    path('contact/', views.ContactCreateView.as_view(), name='contact'),
    path('projects/', views.projects_list, name='projects'),
    path('skills/', views.skills_list, name='skills'),
]