import { useEffect, useState } from "react";
import { fetchEvents, fetchPackages } from "../services/api";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedEventId, setSelectedEventId] = useState(null);
  const [packages, setPackages] = useState([]);
  const [packageLoading, setPackageLoading] = useState(false);

  useEffect(() => {
    async function loadEvents() {
      try {
        const data = await fetchEvents();
        setEvents(data);
      } catch {
        setError("Unable to load events");
      } finally {
        setLoading(false);
      }
    }
    loadEvents();
  }, []);

  const handleViewPackages = async (eventId) => {
    if (selectedEventId === eventId) {
      setSelectedEventId(null);
      setPackages([]);
      return;
    }

    setSelectedEventId(eventId);
    setPackageLoading(true);

    try {
      const data = await fetchPackages(eventId);
      setPackages(data.packages);
    } catch {
      alert("Failed to load packages");
    } finally {
      setPackageLoading(false);
    }
  };

  return (
    <section
      id="events"
      className="-mt-32 max-w-7xl mx-auto px-6 pb-20 relative z-20"
    >
      {/* FEATURED EVENT */}
      {!loading && events.length > 0 && (
        <div className="mb-24 flex justify-center">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl max-w-4xl w-full">
            <div className="grid md:grid-cols-2 min-h-[280px]">
              <img
                src={events[0].imageUrl}
                alt={events[0].title}
                className="h-74 w-full object-cover"
              />

              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold">
                  {events[0].title}
                </h3>

                <p className="mt-3 text-gray-700 text-sm">
                  {events[0].description}
                </p>

                <p className="mt-3 text-xs text-gray-500">
                  {new Date(events[0].startDate).toDateString()}
                </p>

                <a
                  href="#events"
                  className="mt-5 inline-block bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium w-fit hover:bg-blue-700 transition"
                >
                  View Packages
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* HEADING */}
      <h2 className="text-3xl font-bold text-center mb-10 mt-32">
        Upcoming Events
      </h2>

      {loading && <p className="text-center">Loading events...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* EVENTS GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div
            key={event._id}
            className="border rounded-xl shadow transition transform hover:-translate-y-1 hover:shadow-xl p-4 bg-white"
          >
              <div className="relative overflow-hidden">

            <img
              src={event.imageUrl}
              alt={event.title}
              className="h-45 w-full object-cover rounded"
            />
            </div>

            <h3 className="mt-4 text-xl font-semibold">
              {event.title}
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              {event.description}
            </p>

            <p className="mt-3 text-sm text-gray-500">
              {new Date(event.startDate).toDateString()}
            </p>

            <button
              onClick={() => handleViewPackages(event._id)}
              className="mt-4 text-blue-600 font-medium"
            >
              {selectedEventId === event._id
                ? "Hide Packages ↑"
                : "View Packages →"}
            </button>

            {selectedEventId === event._id && (
              <div className="mt-4 border-t pt-4">
                {packageLoading && <p>Loading packages...</p>}

                {!packageLoading &&
                  packages.map((pkg) => (
                    <div
                      key={pkg._id}
                      className="border rounded-lg p-3 mb-3 bg-gray-50 hover:bg-white transition"
                    >
                      <h4 className="font-semibold">
                        {pkg.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {pkg.details}
                      </p>
                      <p className="mt-1 text-sm font-medium">
                        ₹{pkg.basePrice.toLocaleString()}
                      </p>
                    </div>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
