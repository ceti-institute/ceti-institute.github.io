PROJ_DATA = [
  {
    names: ["Scott Nieradka"],
    project: "Perth Amboy",
    medium: "Installation",
    walltag: "Installation, 2022",
    location: "Room 208",
    src: "",
    mediaType: ""
  },
  {
    names: ["Sean Light, Scott Garner, Joe Kortum, Tanner Johnson"],
    project: "Unearthed",
    medium: "Installation",
    walltag: "light/paint/wood/small parts, 2022",
    location: "North Critique space",
    src: "unearthed.png",
    mediaType: "img"
  },
  {
    names: ["Michelle Guthrie, Nanda D'Agostino"],
    project: "Restore",
    medium: "Installation, inflatable sculpture, video projection",
    walltag: "Installation, inflatable sculpture, video projection",
    location: "Room 216",
    src: "",
    mediaType: ""
  },
  {
    names: ["Matt Sottile"],
    project: "Untitled",
    medium: "Dynamic projection mapped painting",
    walltag: "Dynamic projection mapped painting",
    location: "Painting Studio rm 254",
    src: "",
    mediaType: ""
  },

  {
    names: ["Kryston Skinner"],
    project: "Moonstruck",
    medium: "Projection & mixed media",
    walltag: "Projection & mixed media",
    location: "Room 219",
    src: "",
    mediaType: ""
  },
  {
    names: [`Nanda D'Agostino`],
    project: "Resist",
    medium: "Projection",
    walltag: "Video projection",
    location: "South Critique space",
    src: "",
    mediaType: ""
  },
  {
    names: ["Justin Patrizi"],
    project: "Wave Conduit",
    medium: "Multi-TV installation",
    walltag: "Processed media on outmoded medium",
    location: "Room 219",
    src: "",
    mediaType: ""
  },
  {
    names: ["Heather Dunaway Smith"],
    project: "The Cold Moon",
    medium: "AR Digital Art",
    walltag: "AR Digital Art",
    location: "North Hallway middle",
    src: "cold-moon.png",
    mediaType: "img"
  },
  {
    names: ["Scott Garner"],
    project: "Hello, CETI",
    medium: "Projection",
    walltag: "Interactive projection",
    location: "North Hallway East",
    src: "",
    mediaType: ""
  },
  {
    names: ["David Lobser"],
    project: "Cosmic Sugar",
    medium: "Projection & VR",
    walltag: "VR artwork and projection",
    location: "North Critique Space",
    src: "",
    mediaType: ""
  },
  {
    names: ["Helen Leigh", "Jerry Belich"],
    project: "My Own Personal Thundercloud",
    medium: "Soft sculpture with LED animation",
    walltag: "Soft sculpture with LED animation",
    location: "FMH Mezzanine",
    src: "",
    mediaType: ""
  },

  {
    names: ["Zack Marlow", "Ayse Gursoz"],
    project: "Portal",
    medium: "Installation + Projection",
    walltag: "Interactive projection",
    location: "South Critique Space",
    src: "",
    mediaType: ""
  },
  {
    names: ["Laurel Jensen", "Brad Anderson"],
    project: "Flowers with Attitude",
    medium: "Small Sculpture",
    walltag: "Light-up Sculpture",
    location: "West hallway across from critique room",
    src: "",
    mediaType: ""
  },
  {
    names: ["Brad Anderson"],
    project: "Interactive Living Light Display",
    medium: "Installation",
    walltag: "Light-Up Sculpture",
    location: "219",
    src: "interactive-light-display.png",
    mediaType: "img"
  },
  {
    names: ["Laurel Jensen"],
    project: "UnTangled Dragons Building For Starlight",
    medium: "Projection",
    walltag: "Projection",
    location: "Room 243 Sewing Studio",
    src: "untangled-dragons.png",
    mediaType: "img"
  },

  {
    names: ["Laurel Jensen", "Brad Anderson", "Dan Good", "Francesca Frattaroli"],
    project: "Jabberwocky Having Tea with the Octopus",
    medium: "Sculpture and mixed media",
    walltag: "3D Printed Light-Up Scupture.",
    location: "Room 232 Conference Room",
    src: "jabberwocky.png",
    mediaType: "img"
  },

  {
    names: ["Steven Christian"],
    project: "Eyelnd Feevr: Roscoe N Friends",
    medium: "AR artwork",
    walltag: "AR artwork using the Eyelnd Feevr app",
    location: "North Hall West",
    src: "",
    mediaType: ""
  },
  {
    names: ["Jesse England"],
    project: "Untitled",
    medium: "Plastic, LED lights",
    walltag: "Plastic, LED lights",
    location: "219",
    src: "",
    mediaType: ""
  },
  {
    names: ["Eric Reiter"],
    project: "Untited",
    medium: "SD video, 14 min. looped, CRT display",
    walltag: "SD video, 14 min. looped, CRT display",
    location: "Space under south stairs to Mezzanine",
    src: "",
    mediaType: ""
  }
  //  {
  //   names:[],
  //   project:'',
  //   medium:'',
  //   walltag: '',
  //   location:'',
  //src: '',
  //mediaType: ''
  // },
]

function createProject(PROJ_DATA) {
  const numProjects = PROJ_DATA.length
  let htmlPrHolder = $(".projects_list")
  for (i = 0; i < numProjects; i++) {
    if (PROJ_DATA[i].src) {
      htmlPrHolder.append(`<li class="project-cards"><div class="project-img">
    <img class="proj-pic" src="/images/wlf22/${PROJ_DATA[i].src}">
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

function init() {
  createProject(PROJ_DATA)
  showInfo()
}
$(init())
