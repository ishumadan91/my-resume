import '../scss/app.scss';

// Initialize the layout based on saved preference or default to single-column
document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.querySelector('.format-toggle');
  const resumeContainer = document.querySelector('.resume-container');
  
  // Set initial layout based on saved preference or default to single-column (ATS friendly)
  const savedLayout = localStorage.getItem('resumeLayout') || 'single';
  updateLayout(savedLayout);
  
  // Add click event listener to the toggle button
  if (toggleButton) {
    toggleButton.addEventListener('click', function(e) {
      e.preventDefault();
      const currentFormat = this.getAttribute('data-format');
      const newFormat = currentFormat === 'single' ? 'multi' : 'single';
      updateLayout(newFormat);
    });
  }
  
  function updateLayout(format) {
    // Update the UI
    if (format === 'single') {
      resumeContainer.classList.remove('multi-column');
      resumeContainer.classList.add('single-column');
      toggleButton.setAttribute('data-format', 'single');
      toggleButton.textContent = 'Switch to Two-Column';
    } else {
      resumeContainer.classList.remove('single-column');
      resumeContainer.classList.add('multi-column');
      toggleButton.setAttribute('data-format', 'multi');
      toggleButton.textContent = 'Switch to Single-Column';
    }
    
    // Save the preference
    localStorage.setItem('resumeLayout', format);
  }
});
