import { useEffect, useState } from "react";
import { fetchEvents, createLead } from "../services/api";

const LeadForm = () => {
  const [events, setEvents] = useState([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventId: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadEvents() {
      try {
        const data = await fetchEvents();
        setEvents(data);
      } catch {
        setError("Unable to load events");
      }
    }
    loadEvents();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!form.name || !form.email || !form.phone || !form.eventId) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);
      await createLead(form);
      setMessage("Thank you! We will contact you shortly.");
      setForm({ name: "", email: "", phone: "", eventId: "" });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Get a Personalized Quote
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            type="text"
            name="phone"
            placeholder="Your Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <select
            name="eventId"
            value={form.eventId}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          >
            <option value="">Select Event</option>
            {events.map((event) => (
              <option key={event._id} value={event._id}>
                {event.title}
              </option>
            ))}
          </select>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {message && <p className="text-green-600 text-sm">{message}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded font-semibold transition transform hover:bg-blue-700 hover:scale-[1.02] active:scale-95"
          >
            {loading ? "Submitting..." : "Get Quote"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default LeadForm;
