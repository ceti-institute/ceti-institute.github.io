"use strict"

function toggleIcon() {
  $(".icon").on("click", function () {
    $(".icon").toggleClass("active")
    $(".menu-mobile").slideToggle(300)
  })
}

function closeMobileMenu() {
  $(".menu-mobile").on("click", "a", function () {
    $(".icon").trigger("click")
  })
}

function topNavList() {
  $("#topnavlist").html(`<ul>
        <li><a href="#">Projects</a>
          <ul>
            <li><a href="/programs/enchanted-tech">Enchanted Tech</a></li>
            <li><a href="/gallery-of-the-future/">Gallery of the Future</a></li>
            <li><a href="/device-sharing">Device Sharing</a></li>
            <li><a href="/wlf2020">Winter Light Fesrtival</a></li>
          </ul>
        </li>
        <li><a href="/newsletter">Newsletter</a></li>
      </ul>
      `)
}

function mobileNav() {
  $("#mobilenavlist").html(`
      <div class="icon">
        <div class="hamburger"></div>
      </div>
      <div class="menu-mobile">
      <strong><a href="#">Projects</a></strong>
        <a href="/programs/enchanted-tech">Enchanted Tech</a>
        <a href="/gallery-of-the-future/">Gallery of the Future</a>
        <a href="/device-sharing">Device Sharing</a>
        <a href="/wlf2020">Winter Light Fesrtival</a>
        <strong><a href="/newsletter">Newsletter Signup</a></strong>
      </div>
    `)
}
// handle links with @href started with '#' only
$(document).on("click", 'a[href^="#"]', function (e) {
  // target element id
  var id = $(this).attr("href")

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
  $("body, html").animate({ scrollTop: pos })
})
// end nav scripts

$(".modal-link").click(function () {
  $(this).find(".modal").toggleClass("hide")
})

//when the page loads call toggleIcon;
$(topNavList)
$(mobileNav)

$(toggleIcon)
$(closeMobileMenu)
