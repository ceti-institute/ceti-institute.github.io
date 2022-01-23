//participants from https://docs.google.com/spreadsheets/d/1diYFaKSkEImWN75mjc4ihQ6KActnkWCxMdlz4Vfzahc/edit#gid=1812818967
DATA = [
  { first: "Alain", last: "Bally", web: "", linky: "" },

  { first: "Alanna", last: "Risse", web: "@alannarisse", linky: "http://alannarisse.com" },

  { first: "alex", last: "michaluk", web: "", linky: "" },

  { first: "Allison", last: "Meechoovet", web: "", linky: "" },

  { first: "Anand", last: "Kailasam", web: "https://www.behance.net/ArkReactor", linky: "https://www.behance.net/ArkReactor" },

  { first: "BB", last: "Andersson", web: "bbandersson.com/", linky: "http://bbandersson.com/" },
  {
    first: "Benjamin",
    last: "Hencke",
    web: "bhencke.com",
    linky: "http://bhencke.com"
  },

  { first: "Bernardo", last: "Pantoja", web: "https://vimeo.com/hologramfields", linky: "https://vimeo.com/hologramfields" },

  { first: "Brendan", last: "Jones", web: "", linky: "" },

  { first: "DEEPAK", last: "KELOTH", web: "", linky: "" },
  { first: "Byron", last: "Greenlee", web: "", linky: "" },
  { first: "Elaina", last: "Tardif", web: "", linky: "" },
  { first: "Ola", last: "Onipede", web: "", linky: "" },
  { first: "Emmett", last: "Crass", web: "@cosmos_quartz", linky: "http://instagram.com/cosmos_quartz" },

  { first: "Fernanda", last: "D'Agostino", web: "https://www.fernandadagostino.com/", linky: "https://www.fernandadagostino.com/" },

  { first: "Helen", last: "Leigh", web: "twitter: @helenleigh", linky: "https://twitter.com/helenleigh" },

  { first: "Hilary", last: "Tsai", web: "", linky: "" },

  { first: "Jacob", last: "Richman", web: "", linky: "" },

  { first: "Zack", last: "Marlow", web: "zackmarlow.com", linky: "http://www.zackmarlow.com/" },

  { first: "Loni", last: "Hoodenpyle", web: "", linky: "" },

  { first: "Jerry", last: "Belich", web: "https://jerrytron.com", linky: "https://jerrytron.com" },

  { first: "Jesse", last: "England", web: "http://jesseengland.net", linky: "http://jesseengland.net" },

  { first: "JJ", last: "Vazquez", web: "www.locomotionshoots.com", linky: "http://www.locomotionshoots.com" },

  { first: "Julie", last: "Perini", web: "www.julieperini.com", linky: "http://www.julieperini.com" },
  { first: "David", last: "Lobser", web: "http://dlobser.com", linky: "http://dlobser.com" },
  { first: "Justin", last: "Patrizi", web: "", linky: "" },
  { first: "Layna", last: "Lewis", web: "@elevengallonhead https://www.instagram.com/vivalafreepdx/", linky: "https://www.instagram.com/vivalafreepdx/" },
  { first: "Georgia ", last: "Bryant", web: "", linky: "" },
  { first: "Karl", last: "Benjamin", web: "", linky: "" },
  { first: "Leslie ", last: "Villela", web: "", linky: "" },
  { first: "Laurel ", last: "Jensen", web: "", linky: "" },
  { first: "Lillyanne", last: "Pham", web: "lillyannepham.com / instagram: @lillyannepham", linky: "http://instagram.com/lillyannepham" },

  { first: "Matthew", last: "Sottile", web: "", linky: "" },
  { first: "Brad", last: "Andersen", web: "", linky: "" },
  { first: "Ayse", last: "Gursoz", web: "aysegursoz.com", linky: "http://www.aysegursoz.com" },
  { first: "Keenan", last: "McCune", web: "@symmetriccollective", linky: "https://www.instagram.com/symmetriccollective/" },
  { first: "Michelle", last: "Guthrie", web: "@Michellemguthrie on IG", linky: "http://instagram.com/Michellemguthrie" },

  { first: "Miguel", last: "Higgins Moy", web: "", linky: "" },

  { first: "Nandini", last: "Ranganathan", web: "", linky: "" },

  { first: "Peter", last: "Vickery", web: "", linky: "" },

  { first: "Rashad", last: "Pridgen", web: "www.rashadxsoulnubian.com", linky: "http://www.rashadxsoulnubian.com" },

  { first: "Scott", last: "Nieradka", web: "", linky: "" },

  { first: "Scott", last: "Garner", web: "http://scottmadethis.net/", linky: "http://scottmadethis.net/" },

  { first: "Shana ", last: "Palmer", web: "ShanaPalmer.com", linky: "http://ShanaPalmer.com" },

  { first: "Tomas", last: "Cotik", web: "", linky: "" }
]

function createParticipant(DATA) {
  console.log("populate Participants")
  const numParticipants = DATA.length
  console.log(numParticipants)
  let htmlHolder = $(".participants_list")
  for (i = 0; i < numParticipants; i++) {
    if (i < numParticipants && DATA[i].web == "") {
      htmlHolder.append(`<li class="showStuff"><div class="avatar"></div>
      <span class="name">
      ${DATA[i].first} ${DATA[i].last}</span>
      <div class="weblinks hide"><a href="${DATA[i].linky}" target="_blank">${DATA[i].web}</a></div></li>`)
    } else if (i < numParticipants && DATA[i].web != "") {
      htmlHolder.append(`<li class="showStuff"><div class="avatar"></div>
      <span class="name colorLink">
      ${DATA[i].first} ${DATA[i].last}</span>
      <div class="weblinks hide"><a href="${DATA[i].linky}" target="_blank">${DATA[i].web}</a></div></li>`)
    } else {
      htmlHolder.append(`no participants`)
    }
  }
  console.log(htmlHolder)
  return htmlHolder
}
function showLinks() {
  $(".showStuff").click(function () {
    $(this).find(".weblinks").toggleClass("hide")
  })
}
function init() {
  createParticipant(DATA)
  showLinks()
}
$(init())
