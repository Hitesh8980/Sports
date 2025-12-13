const allowedTransitions = {
  New: ["Contacted"],
  Contacted: ["Quote Sent"],
  "Quote Sent": ["Interested", "Closed Lost"],
  Interested: ["Closed Won", "Closed Lost"]
};

function canTransition(from, to) {
  const allowed = allowedTransitions[from] || [];
  return allowed.includes(to);
}

module.exports = { canTransition };
