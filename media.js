// Mock media data
const mediaData = [
  { 
    id: 1, 
    title: "Leadership Summit 2025", 
    image: "https://via.placeholder.com/800x600?text=JCI+Summit", 
    category: "events",
    date: "2025-03-15",
    likes: 42,
    comments: 8
  },
  { 
    id: 2, 
    title: "Community Cleanup", 
    image: "https://via.placeholder.com/800x600?text=Cleanup+Project", 
    category: "projects",
    date: "2025-02-10",
    likes: 28,
    comments: 5
  }
];

// Render media
function renderMedia(filter = "all") {
  const container = document.getElementById(`media-grid-${filter}`);
  container.innerHTML = mediaData
    .filter(item => filter === "all" || item.category === filter)
    .map(item => `
      <div class="col-md-6 col-lg-4">
        <div class="card h-100">
          <img src="${item.image}" class="card-img-top" style="height:200px;object-fit:cover">
          <div class="card-body">
            <h5>${item.title}</h5>
            <small class="text-muted">${item.date}</small>
            <div class="d-flex justify-content-between mt-2">
              <span><i class="fas fa-heart text-danger"></i> ${item.likes}</span>
              <span><i class="fas fa-comment"></i> ${item.comments}</span>
            </div>
          </div>
        </div>
      </div>
    `).join('');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderMedia("all");
  renderMedia("events");
  renderMedia("projects");
});
