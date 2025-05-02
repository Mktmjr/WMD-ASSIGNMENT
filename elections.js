// Mock candidates
const candidates = [
    { id: 1, name: "Galaletsang Sefakwe", role: "Chapter President", votes: 124, image: "https://via.placeholder.com/150?text=Galaletsang" },
    { id: 2, name: "Mooketsi Kgosi Mooketsi Jr", role: "VP Operations", votes: 89, image: "https://via.placeholder.com/150?text=Mooketsi" }
  ];
  
  // Render candidates
  document.getElementById('candidates-grid').innerHTML = candidates.map(candidate => `
    <div class="col-md-6">
      <div class="card shadow-sm h-100">
        <img src="${candidate.image}" class="card-img-top p-3 rounded-circle mx-auto d-block" style="width:150px;height:150px;object-fit:cover">
        <div class="card-body text-center">
          <h3>${candidate.name}</h3>
          <p class="text-muted">${candidate.role}</p>
          <button class="btn btn-primary vote-btn" data-id="${candidate.id}">Vote</button>
          <div class="mt-2"><small>${candidate.votes} votes</small></div>
        </div>
      </div>
    </div>
  `).join('');
  
  // Simulate voting
  document.querySelectorAll('.vote-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      alert("Vote recorded! (Backend integration pending)");
    });
  });
  
  // Countdown timer (demo only)
  function updateCountdown() {
    document.getElementById('countdown-timer').textContent = "05:23:11:45"; // Replace with real logic
  }
  setInterval(updateCountdown, 1000);