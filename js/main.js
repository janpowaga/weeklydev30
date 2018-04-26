let menuToggle = () => {
  let hamburgerPart = document.querySelectorAll('.header__hamburger--part');
  let dropMenu = document.querySelectorAll('.header__navlist');
  dropMenu.item(2).classList.toggle('header__navlist--toggled');
  for (let i = 0; i < hamburgerPart.length; i++) {
    hamburgerPart.item(i).classList.toggle('header__hamburger--part-toggled');
  }
}

let hamburgerIcon = document.querySelectorAll('.header__hamburger');
hamburgerIcon.item(0).addEventListener('click', menuToggle);

let map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('contact__map'), {
      center: {lat: 52.2318861, lng: 21.0033694},
          zoom: 15
        });
}

  
let halfNav = window.innerHeight * 0.22;
window.addEventListener('scroll', function() {
	if (window.pageYOffset > halfNav) {
    document.querySelector('.header__nav--desktop').classList.add('header__nav--toggled')
  	} else {
    document.querySelector('.header__nav--desktop').classList.remove('header__nav--toggled')
    }
});