// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

document.querySelector('form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out!');
    this.reset();
});

  var modal = document.getElementById("imgModal");
  var modalImg = document.getElementById("imgInModal");
  var captionText = document.getElementById("caption");

  // Attach click to all project images
  document.querySelectorAll(".popup-img").forEach(img => {
    img.addEventListener("click", function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    });
  });

  // Close modal
  document.querySelector(".close").onclick = function() {
    modal.style.display = "none";
  }