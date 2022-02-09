//projects from here https://docs.google.com/spreadsheets/d/1yRlJl3JJ551jLILcs1r9xMDr1ZZcH3VDtgo3Vdhc32o/edit#gid=0
PROJ_DATA = [
  {
    names: ["Scott Nieradka"],
    project: "Perth Amboy",
    medium: "Installation",
    walltag: "Installation, 2022",
    location: "Room 208",
    thumb: "sodium-vapor-lamp.png",
    src: "https://vimeo.com/675302308",
    mediaType: "vid"
  },
  {
    names: ["Sean Light, Scott Garner, Joe Kortum, Tanner Johnson"],
    project: "Unearthed",
    medium: "Installation",
    walltag: "light/paint/wood/small parts, 2022",
    location: "North Critique space",
    thumb: "unearthed.png",
    src: "https://vimeo.com/675308317",
    mediaType: "vid"
  },
  {
    names: ["Michelle Guthrie, Nanda D'Agostino"],
    project: "Restore",
    medium: "Installation, inflatable sculpture, video projection",
    walltag: "Installation, inflatable sculpture, video projection",
    location: "Room 216",
    thumb: "",
    src: "",
    mediaType: ""
  },
  {
    names: ["Matt Sottile"],
    project: "Untitled",
    medium: "Dynamic projection mapped painting",
    walltag: "Dynamic projection mapped painting",
    location: "Painting Studio rm 254",
    thumb: "sottile_untitled.png",
    src: "sottile_untitled-lg.png",
    mediaType: "img"
  },

  {
    names: ["Kryston Skinner"],
    project: "Moonstruck",
    medium: "Projection & mixed media",
    walltag: "Projection & mixed media",
    location: "Room 219",
    thumb: "",
    src: "",
    mediaType: ""
  },
  {
    names: [`Nanda D'Agostino`],
    project: "Resist",
    medium: "Projection",
    walltag: "Video projection",
    location: "South Critique space",
    thumb: "",
    src: "",
    mediaType: ""
  },
  {
    names: ["Justin Patrizi"],
    project: "Wave Conduit",
    medium: "Multi-TV installation",
    walltag: "Processed media on outmoded medium",
    location: "Room 219",
    thumb: "",
    src: "",
    mediaType: ""
  },
  {
    names: ["Heather Dunaway Smith"],
    project: "The Cold Moon",
    medium: "AR Digital Art",
    walltag: "AR Digital Art",
    location: "North Hallway middle",
    thumb: "cold-moon.png",
    src: "cold-moon.png",
    mediaType: "img"
  },
  {
    names: ["Scott Garner"],
    project: "Hello, CETI",
    medium: "Projection",
    walltag: "Interactive projection",
    location: "North Hallway East",
    thumb: "hello-ceti.png",
    src: "hello-ceti.png",
    mediaType: "img"
  },
  {
    names: ["David Lobser"],
    project: "Cosmic Sugar",
    medium: "Projection & VR",
    walltag: "VR artwork and projection",
    location: "North Critique Space",
    thumb: "cosmic-sugar.png",
    src: "cosmic-sugar-lg.png",
    mediaType: "img"
  },
  {
    names: ["Helen Leigh", "Jerry Belich"],
    project: "My Own Personal Thundercloud",
    medium: "Soft sculpture with LED animation",
    walltag: "Soft sculpture with LED animation",
    location: "FMH Mezzanine",
    thumb: "",
    src: "",
    mediaType: ""
  },

  {
    names: ["Zack Marlow", "Ayse Gursoz"],
    project: "Portal",
    medium: "Installation + Projection",
    walltag: "Interactive projection",
    location: "South Critique Space",
    thumb: "",
    src: "",
    mediaType: ""
  },
  {
    names: ["Laurel Jensen", "Brad Anderson"],
    project: "Flowers with Attitude",
    medium: "Small Sculpture",
    walltag: "Light-up Sculpture",
    location: "West hallway across from critique room",
    thumb: "",
    src: "",
    mediaType: ""
  },
  {
    names: ["Brad Anderson"],
    project: "Interactive Living Light Display",
    medium: "Installation",
    walltag: "Light-Up Sculpture",
    location: "219",
    thumb: "interactive-light-display.png",
    src: "https://vimeo.com/675307223",
    mediaType: "vid"
  },
  {
    names: ["Laurel Jensen"],
    project: "UnTangled Dragons Building For Starlight",
    medium: "Projection",
    walltag: "Projection",
    location: "Room 243 Sewing Studio",
    thumb: "untangled-dragons.png",
    src: "untangled-dragons-lg.png",
    mediaType: "img"
  },
  {
    names: ["Scott Garner"],
    project: "Spherical Glow",
    medium: "Projection",
    walltag: "Projection",
    location: "Room 218",
    thumb: "spherical-glow.png",
    src: "spherical-glow-lg.png",
    mediaType: "img"
  },
  {
    names: ["Laurel Jensen", "Brad Anderson", "Dan Good", "Francesca Frattaroli"],
    project: "Jabberwocky Having Tea with the Octopus",
    medium: "Sculpture and mixed media",
    walltag: "3D Printed Light-Up Scupture.",
    location: "Room 232",
    thumb: "jabberwocky.png",
    src: "jabberwocky.png",
    mediaType: "img"
  },

  {
    names: ["Steven Christian"],
    project: "Eyelnd Feevr: Roscoe N Friends",
    medium: "AR artwork",
    walltag: "AR artwork using the Eyelnd Feevr app",
    location: "North Hall West",
    thumb: "",
    src: "",
    mediaType: ""
  },
  {
    names: ["Jesse England"],
    project: "Loop",
    medium: "Plastic, LED lights",
    walltag: "Plastic, LED lights",
    location: "219",
    thumb: "loop.png",
    src: "loop_lg.png",
    mediaType: "img"
  },
  {
    names: ["Eric Reiter"],
    project: "Wobbly",
    medium: "SD video, 14 min. looped, CRT display",
    walltag: "SD video, 14 min. looped, CRT display",
    location: "Space under south stairs to Mezzanine",
    thumb: "wobbly.png",
    src: "https://vimeo.com/675290916",
    mediaType: "vid"
  }
  //  {
  //   names:[],
  //   project:'',
  //   medium:'',
  //   walltag: '',
  //   location:'',
  //thumb: '',
  //src: '',
  //mediaType: ''
  // },
]

function createProject(PROJ_DATA) {
  const numProjects = PROJ_DATA.length
  let htmlPrHolder = $(".projects_list")
  for (i = 0; i < numProjects; i++) {
    //spits out html for projects with images
    if (PROJ_DATA[i].src && PROJ_DATA[i].mediaType == "img") {
      htmlPrHolder.append(`<li class="project-cards"><div class="project-img">
    <img class="proj-pic" src="/images/wlf22/${PROJ_DATA[i].thumb}">
    <span class="proj-title">${PROJ_DATA[i].project}</span>
    </div>
      <div class="project-info hide">
      <p><strong>Team:</strong> ${PROJ_DATA[i].names}<br>
      <strong>Project Name:</strong> 
      ${PROJ_DATA[i].project}<br>
      <strong>Medium:</strong> ${PROJ_DATA[i].medium}<br>
      <strong>Location:</strong> ${PROJ_DATA[i].location}<br>
      <a class="example-image-link" href="/images/wlf22/${PROJ_DATA[i].src}" data-lightbox="example-set" data-title="${PROJ_DATA[i].project} by ${PROJ_DATA[i].names}">View Image</a>
      </div>
      </li>`)
      //spits out html for projects with videos
    } else if (PROJ_DATA[i].src && PROJ_DATA[i].mediaType == "vid") {
      htmlPrHolder.append(`<li class="project-cards"><div class="project-img">
    <img class="proj-pic" src="/images/wlf22/${PROJ_DATA[i].thumb}">
    <span class="proj-title">${PROJ_DATA[i].project}</span>
    </div>
      <div class="project-info hide">
      <p><strong>Team:</strong> ${PROJ_DATA[i].names}<br>
      <strong>Project Name:</strong> 
      ${PROJ_DATA[i].project}<br>
      <strong>Medium:</strong> ${PROJ_DATA[i].medium}<br>
      <strong>Location:</strong> ${PROJ_DATA[i].location}<br>
      <a href="${PROJ_DATA[i].src}" target="_blank">View Video</a>
      </li>`)
      //spits out html for projects without images or videos
    } else {
      htmlPrHolder.append(`<li class="project-cards"><div class="project-img">
    <span class="proj-title">${PROJ_DATA[i].project}</span>
    </div>
      <div class="project-info hide">
      <p><strong>Team:</strong> ${PROJ_DATA[i].names}<br>
      <strong>Project Name:</strong> 
      ${PROJ_DATA[i].project}<br>
      <strong>Medium:</strong> ${PROJ_DATA[i].medium}<br>
      <strong>Location:</strong> ${PROJ_DATA[i].location}
      </div>
      </li>`)
    }
  }
  console.log(htmlPrHolder)
  return htmlPrHolder
}
function showInfo() {
  $(".project-cards").click(function () {
    $(this).find(".project-img").toggleClass("hide")
    $(this).find(".project-info").toggleClass("hide")
  })
}
$(document).ready(function () {
  var $videoSrc
  $(".video-btn").click(function () {
    $videoSrc = $(this).data("src")
  })
  console.log($videoSrc)

  // when the modal is opened autoplay it
  $("#myModal").on("shown.bs.modal", function (e) {
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr("src", $videoSrc + "?autoplay=1&muted=1")
  })

  // stop playing the youtube video when I close the modal
  $("#myModal").on("hide.bs.modal", function (e) {
    // a poor man's stop video
    $("#video").attr("src", $videoSrc)
  })

  // document ready
})

function init() {
  createProject(PROJ_DATA)
  showInfo()
}
$(init())
