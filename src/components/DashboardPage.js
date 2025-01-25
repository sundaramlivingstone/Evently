import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EventCard from "./EventCard";
import { PlusIcon, CalendarIcon, UserGroupIcon } from "@heroicons/react/solid";

const DashboardPage = () => {
  const [events, setEvents] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    date: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("/api/events", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  const filteredEvents = events.filter((event) => {
    return (
      (!filters.category || event.category === filters.category) &&
      (!filters.date || new Date(event.date) <= new Date(filters.date))
    );
  });

  const handleCreateEvent = () => {
    navigate("/create-event");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Events Dashboard</h1>
        <button
          onClick={handleCreateEvent}
          className="bg-brand-primary text-white px-4 py-2 rounded-lg flex items-center"
        >
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
            value={filters.date}
            onChange={(e) => setFilters({ ...filters, date: e.target.value })}
            className="border rounded-lg px-3 py-2 w-1/2"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
