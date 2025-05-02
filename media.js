// Mock data - Replace with real API calls later
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
    },
    // Add more mock items...
  ];
  
  // Generate media cards
  function renderMediaGrid(filter = "all") {
    const gridContainer = document.getElementById(`media-grid-${filter}`);
    gridContainer.innerHTML = "";
  
    const filteredData = filter === "all" 
      ? mediaData 
      : mediaData.filter(item => item.category === filter);
  
    filteredData.forEach(item => {
      gridContainer.innerHTML += `
        <div class="col-md-6 col-lg-4">
          <div class="card media-card h-100">
            <img src="${item.image}" class="card-img-top" alt="${item.title}">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="text-muted">${item.date}</p>
              <div class="d-flex justify-content-between">
                <span><i class="fas fa-heart text-danger"></i> ${item.likes}</span>
                <span><i class="fas fa-comment"></i> ${item.comments}</span>
              </div>
            </div>
          </div>
        </div>
      `;
    });
  }
  
  // Initialize grids
  document.addEventListener('DOMContentLoaded', () => {
    renderMediaGrid("all");
    renderMediaGrid("events");
    renderMediaGrid("projects");
  });