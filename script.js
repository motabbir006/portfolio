document.addEventListener("DOMContentLoaded", function() {
  const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navbarLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetSection = document.querySelector(targetId);

          const offset = document.querySelector('.navbar').offsetHeight; 

          const targetPosition = targetSection.offsetTop - offset; 

          window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
          });
      });
  });
});

function updateCountdown(elementId, countdown) {
  document.getElementById(elementId).textContent = countdown;
}


function startCountdown(elementId, endValue) {
  let countdown = 0;
  updateCountdown(elementId, countdown);
  const interval = setInterval(function() {
      countdown++;
      if (countdown <= endValue) {
          updateCountdown(elementId, countdown);
      } else {
          clearInterval(interval); 
      }
  }, 20); 
}

document.addEventListener("DOMContentLoaded", function() {
  startCountdown("countdown1", 30);
  startCountdown("countdown2", 130);
  startCountdown("countdown3", 310);
  startCountdown("countdown4", 10);
});
function animateImages() {
  // Target each circle-box
  const box1 = document.getElementById('box1');
  const box2 = document.getElementById('box2');
  const box3 = document.getElementById('box3');
  const box4 = document.getElementById('box4');

  // Create and insert keyframes for the animations
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = `
      @keyframes moveIn1 {
          0% {
              transform: translate(-200px, -200px) scale(0.5) rotate(0deg);
              opacity: 0;
          }
          100% {
              transform: translate(50px, 50px) scale(1) rotate(360deg);
              opacity: 1;
          }
      }
      @keyframes moveIn2 {
          0% {
              transform: translate(700px, -200px) scale(0.5) rotate(0deg);
              opacity: 0;
          }
          100% {
              transform: translate(300px, 50px) scale(1) rotate(360deg);
              opacity: 1;
          }
      }
      @keyframes moveIn3 {
          0% {
              transform: translate(-200px, 700px) scale(0.5) rotate(0deg);
              opacity: 0;
          }
          100% {
              transform: translate(50px, 300px) scale(1) rotate(360deg);
              opacity: 1;
          }
      }
      @keyframes moveIn4 {
          0% {
              transform: translate(700px, 700px) scale(0.5) rotate(0deg);
              opacity: 0;
          }
          100% {
              transform: translate(300px, 300px) scale(1) rotate(360deg);
              opacity: 1;
          }
      }
  `;
  document.head.appendChild(styleSheet);

  // Initial positions outside the container
  box1.style.transform = 'translate(-200px, -200px) scale(0.5)';
  box2.style.transform = 'translate(700px, -200px) scale(0.5)';
  box3.style.transform = 'translate(-200px, 700px) scale(0.5)';
  box4.style.transform = 'translate(700px, 700px) scale(0.5)';

  // Apply animation using keyframes
  setTimeout(() => {
      box1.style.animation = 'moveIn1 2s ease forwards';
  }, 500);

  setTimeout(() => {
      box2.style.animation = 'moveIn2 2s ease forwards';
  }, 1000);

  setTimeout(() => {
      box3.style.animation = 'moveIn3 2s ease forwards';
  }, 1500);

  setTimeout(() => {
      box4.style.animation = 'moveIn4 2s ease forwards';
  }, 2000);
}
window.onload = animateImages;

document.getElementById('loadMoreBtn').addEventListener('click', function() {
    var prod2 = document.getElementById('prod2');
    var button = this;

    if (prod2.classList.contains('hidden')) {
        prod2.classList.remove('hidden');
        prod2.style.display = 'flex';
        button.innerText = 'Show Less Projects';
    } else {
        prod2.classList.add('hidden');
        prod2.style.display = 'none'; // Hide the section
        button.innerText = 'Load More Projects';
    }
});
