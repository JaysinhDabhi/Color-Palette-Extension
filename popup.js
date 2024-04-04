document.addEventListener('DOMContentLoaded', function () {
    let colors = document.querySelectorAll('.color');
    let message = document.getElementById('message'); // Get the message element
    colors.forEach(color => {
      color.addEventListener('click', function () {
        let colorCode = window.getComputedStyle(this).getPropertyValue('--color');
        navigator.clipboard.writeText(colorCode).then(function() {
          console.log('Color code copied to clipboard: ' + colorCode);
          // Show the message
          message.style.display = 'block';
          // Hide the message after 2 seconds
          setTimeout(function() {
            message.style.display = 'none';
          }, 2000);
        }, function(err) {
          console.error('Failed to copy color code: ', err);
        });
      });
    });
  
    let link = document.getElementById('link');
    link.addEventListener('click', function () {
      window.open('https://www.buymeacoffee.com/jaysinhdabhi', '_blank');
    });
  });
  