import React, { useState } from "react";
import {
  CalendarIcon,
  LocationMarkerIcon,
  DocumentTextIcon,
} from "@heroicons/react/solid";

const EventCreation = () => {
  const [eventData, setEventData] = useState({
    name: "",
    description: "",
    date: "",
    time: "",
    location: "",
    category: "",
    maxAttendees: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Event creation logic
    console.log("Event Created:", eventData);
  };

  const updateField = (field, value) => {
    setEventData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-brand-background flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Create New Event
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Event Name"
                value={eventData.name}
                onChange={(e) => updateField("name", e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-primary"
                required
              />
              <DocumentTextIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>

            <div className="relative">
              <select
                value={eventData.category}
                onChange={(e) => updateField("category", e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-primary"
                required
              >
                <option value="">Select Category</option>
                <option value="Technology">Technology</option>
                <option value="Music">Music</option>
                <option value="Sports">Sports</option>
              </select>
              <LocationMarkerIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <textarea
            placeholder="Event Description"
            value={eventData.description}
            onChange={(e) => updateField("description", e.target.value)}
            className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-brand-primary"
            rows="4"
            required
          />

          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <input
                type="date"
                value={eventData.date}
                onChange={(e) => updateField("date", e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-primary"
                required
              />
              <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>

            <div className="relative">
              <input
                type="time"
                value={eventData.time}
                onChange={(e) => updateField("time", e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-primary"
                required
              />
              <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>

            <div>
              <input
                type="number"
                placeholder="Max Attendees"
                value={eventData.maxAttendees}
                onChange={(e) => updateField("maxAttendees", e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-primary"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-brand-primary text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventCreation;
