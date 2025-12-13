const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchEvents() {
  const res = await fetch(`${BASE_URL}/api/events`);
  if (!res.ok) throw new Error("Failed to fetch events");

  const data = await res.json();

  return data.map(event => ({
    ...event,
    imageUrl: event.imageUrl.startsWith("http")
      ? event.imageUrl
      : `${BASE_URL}${event.imageUrl}`
  }));
}

export async function fetchPackages(eventId) {
  const res = await fetch(`${BASE_URL}/api/events/${eventId}/packages`);
  if (!res.ok) throw new Error("Failed to fetch packages");
  return res.json();
}

export async function createLead(payload) {
  const res = await fetch(`${BASE_URL}/api/leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Failed to submit lead");
  }

  return res.json();
}

