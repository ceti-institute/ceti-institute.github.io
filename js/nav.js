'use strict'

function topNavList() {
  $('#topnavlist').html(`
  <ul>
    <li><a href="/about">About</a></li>
    <li><a href="/community">Community</a></li> 
    <li><a href="/programs">Programs</a>
          <ul>
            <li><a href="/programs/enchanted-tech-22">Enchanted Tech</a></li>
            <li><a href="/programs/xrchive">XRchive</a></li>
            <li><a href="/gallery-of-the-future/">Gallery of the Future</a></li>
            <li><a href="/device-sharing">Device Sharing</a></li>
            <li><a href="/programs/constellations">Winter Light Festival</a></li>
          </ul>
    </li>
    <li><a href="/learn">Workshops</a></li>
    <li><a href="/techlab">Lab</a></li>        
  </ul>
  `)
}
// removed this for now <li><a href="/news">News</a></li>

function mobileNav() {
  $('#mobilenavlist').html(`
      <div class="icon">
        <div class="hamburger"></div>
      </div>
      <div class="menu-mobile">
      <strong><a href="/about">About</a></strong>
      <strong><a href="/programs">Programs</a></strong>
        <a href="/programs/enchanted-tech-22">Enchanted Tech</a>
        <a href="/programs/xrchive">XRchive</a>
        <a href="/gallery-of-the-future/">Gallery of the Future</a>
        <a href="/device-sharing">Device Sharing</a>
        <a href="/programs/constellations">Winter Light Festival</a>
      <strong><a href="/community">Community</a></strong>
      <strong><a href="/learn">Workshops</a></strong>
    <strong><a href="/techlab">Lab</a> </strong>
      </div>
    `)
}
// removed this for now <strong><a href="/news">News</a></strong>

function footerNav() {
  $('footer div').html(
    `<div class="left">
    <a href="https://www.facebook.com/CETI.Institute/" target="_blank"><img src="/images/icons/facebook.png" /></a>
    <a href="https://www.instagram.com/ceti.institute/" target="_blank"><img src="/images/icons/instagram1.png" /></a>
    <a href="https://twitter.com/ceti_institute" target="_blank"><img src="/images/icons/twitter1.png" /></a>
    <a href="https://www.youtube.com/channel/UCNORXg1dJPQDrRy_slCEOMA" target="_blank"><img src="/images/icons/youtube.png" /></a>
    <a href="/techlab/index.html#calendar" ><img src="/images/icons/calendar.png" /></a>
    </div>
    <div class="right">
      <a href="/newsletter">newsletter</a> &nbsp;
      <a href="https://www.google.com/url?q=https://docs.google.com/document/d/1JtNCIvxhhIJV5qav-BQsP0WRljAPQRi8vtfIENG9Bm8/edit?usp%3Dsharing&sa=D&source=editors&ust=1635383362779000&usg=AOvVaw0BJTeaszReP_Mh6Kl3FvA9" target="_blank">code of conduct</a> &nbsp;
      <a href="mailto:hello@ceti.institute">hello@ceti.institute</a> 
    </div>
        `
  )
}

function toggleIcon() {
  $('.icon').on('click', function () {
    $('.icon').toggleClass('active')
    $('.menu-mobile').slideToggle(300)
  })
}

function closeMobileMenu() {
  $('.menu-mobile').on('click', 'a', function () {
    $('.icon').trigger('click')
  })
}

// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function (e) {
  // target element id
  var id = $(this).attr('href')

  // target element
  var $id = $(id)
  if ($id.length === 0) {
    return
  }

  // prevent standard hash navigation (avoid blinking in IE)
  e.preventDefault()

  // top position relative to the document
  var pos = $id.offset().top

  // animated top scrolling
  $('body, html').animate({ scrollTop: pos })
})

//when the page loads call these;
$(topNavList)
$(mobileNav)
$(footerNav)

$(toggleIcon)
$(closeMobileMenu)
