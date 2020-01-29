from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from .models import Entry
from .serializers import EntrySerializer

# Create your views here.

class EntryView(APIView):
    def get(self, request):
        entries = Entry.objects.all()
        serialized = EntrySerializer(entries, many=True)
        return Response({"entries": serialized.data})

    def post(self, request):
        entry = request.data.get('entry')
        serialized = EntrySerializer(data=entry)
        if serialized.is_valid(raise_exception=True):
            entry_saved = serialized.save()
        return Response({"success": "Entry '{}' created successfully".format(entry_saved.title)})

    def put(self, request, pk):
        saved_entry = get_object_or_404(Entry.objects.all(), pk=pk)
        data = request.data.get("entry")
        serializer = EntrySerializer(instance=saved_entry, data=data, partial=True)

        if serializer.is_valid(raise_exception=True):
            entry_saved = serializer.save()

        return Response({"success": "Article {} updated successfully".format(entry_saved.title)})