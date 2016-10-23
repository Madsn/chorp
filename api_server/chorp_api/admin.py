from django.contrib import admin
from .models import Pet, PetType, Booking


@admin.register(Pet)
class PetAdmin(admin.ModelAdmin):
    pass


@admin.register(PetType)
class PetType(admin.ModelAdmin):
    pass


@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    pass
