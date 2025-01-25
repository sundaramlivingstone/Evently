import React from "react";
import { CalendarIcon, UserGroupIcon } from "@heroicons/react/solid";

const EventCard = ({ event }) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{event.name}</h2>
        <CalendarIcon className="h-6 w-6 text-brand-primary" />
      </div>
      <p className="text-gray-600 mb-2">{event.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">
          {new Date(event.date).toLocaleDateString()}
        </span>
        <span className="text-sm font-bold">
          <UserGroupIcon className="h-5 w-5 inline-block mr-1" />
          {event.currentAttendees}/{event.maxAttendees}
        </span>
      </div>
    </div>
  );
};

export default EventCard;
