import React, { useState } from "react";
import { CalendarIcon, FilterIcon, PlusIcon } from "@heroicons/react/solid";

const EventDashboard = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Tech Conference 2024",
      description: "Annual technology conference",
      date: "2024-07-15",
      category: "Technology",
      attendees: 150,
      totalCapacity: 200,
    },
    // More sample events...
  ]);

  const [filters, setFilters] = useState({
    category: "",
    dateRange: "",
  });

  const filteredEvents = events.filter(
    (event) =>
      (!filters.category || event.category === filters.category) &&
      (!filters.dateRange || event.date <= filters.dateRange)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Events Dashboard</h1>
        <button className="bg-brand-primary text-white px-4 py-2 rounded-lg flex items-center">
          <PlusIcon className="h-5 w-5 mr-2" />
          Create Event
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex space-x-4 mb-6">
          <select
            value={filters.category}
            onChange={(e) =>
              setFilters({ ...filters, category: e.target.value })
            }
            className="border rounded-lg px-3 py-2 w-1/2"
          >
            <option value="">All Categories</option>
            <option value="Technology">Technology</option>
            <option value="Music">Music</option>
            <option value="Sports">Sports</option>
          </select>

          <input
            type="date"
            value={filters.dateRange}
            onChange={(e) =>
              setFilters({ ...filters, dateRange: e.target.value })
            }
            className="border rounded-lg px-3 py-2 w-1/2"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">{event.name}</h2>
                <CalendarIcon className="h-6 w-6 text-brand-primary" />
              </div>
              <p className="text-gray-600 mb-2">{event.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{event.date}</span>
                <span className="text-sm font-bold">
                  {event.attendees}/{event.totalCapacity} Attendees
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventDashboard;
