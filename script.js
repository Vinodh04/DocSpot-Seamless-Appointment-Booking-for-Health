const doctors = [
  { name: "Dr. Anusha", specialty: "General Physician" },
  { name: "Dr. Vinodh", specialty: "Cardiologist" },
  { name: "Dr. Niharika", specialty: "Dermatologist" },
];

let selectedDoctor = null;

function registerUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if (email && password) {
    alert(`User ${email} registered successfully!`);
  } else {
    alert("Please fill all fields.");
  }
}

function filterDoctors() {
  const filter = document.getElementById("specialtyFilter").value;
  const list = document.getElementById("doctorList");
  list.innerHTML = "";

  const filtered = filter
    ? doctors.filter(doc => doc.specialty.includes(filter))
    : doctors;

  filtered.forEach(doc => {
    const div = document.createElement("div");
    div.textContent = `${doc.name} - ${doc.specialty}`;
    div.onclick = () => openBookingModal(doc);
    list.appendChild(div);
  });
}

function openBookingModal(doctor) {
  selectedDoctor = doctor;
  document.getElementById("bookingModal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("bookingModal").classList.add("hidden");
}

function submitAppointment() {
  const date = document.getElementById("appointmentDate").value;
  if (!date || !selectedDoctor) {
    alert("Please choose a date and a doctor.");
    return;
  }

  document.getElementById("bookingModal").classList.add("hidden");
  document.getElementById("confirmation").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("confirmation").classList.add("hidden");
  }, 3000);
}

// Initialize on load
window.onload = filterDoctors;
