$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
       
        // Adding the amount of miliseconds it takes too scroll
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 600, function(){
     
          
          window.location.hash = hash;
        });
      }
    });
  });