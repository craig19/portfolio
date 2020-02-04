// x00075734

// scrollspy body
$('body').scrollspy({target: ".navbar", offset: 50});

// smooth scrolling to all links inside nav
$("#mainNav a").on('click', function(event) {

  //check if hash has a value before overriding default behavior
  if (this.hash !== "") {

    //prevent default anchor click behavior
    event.preventDefault();

    //store hash
    var hash = this.hash;

    //use jQuerys animate() for smooth scroll   
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 850, function(){

      window.location.hash = hash;
    });

  }

// hide model on page load
});

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})