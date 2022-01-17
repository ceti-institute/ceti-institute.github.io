//participants from https://docs.google.com/spreadsheets/d/1diYFaKSkEImWN75mjc4ihQ6KActnkWCxMdlz4Vfzahc/edit#gid=1812818967
DATA = [
  { first: "Alain", last: "Bally", email: "alain.bally@gmail.com", web: "", linky: "" },

  { first: "Alanna", last: "Risse", email: "arisse@pdx.edu", web: "@alannarisse", linky: "http://alannarisse.com" },

  { first: "alex", last: "michaluk", email: "orangeskeleton@gmail.com", web: "", linky: "" },

  { first: "Allison", last: "Meechoovet", email: "ameechoovet@gmail.com", web: "", linky: "" },

  { first: "Anand", last: "Kailasam", email: "anand@pdx.edu", web: "https://www.behance.net/ArkReactor", linky: "https://www.behance.net/ArkReactor" },

  { first: "BB", last: "Andersson", email: "b.anderson@pdx.edu", web: "bbandersson.com/", linky: "http://bbandersson.com/" },
  {
    first: "Benjamin",
    last: "Hencke",
    email: "hencke@gmail.com",
    web: "bhencke.com",
    linky: "http://bhencke.com"
  },

  { first: "Bernardo", last: "Pantoja", email: "bernazombie@gmail.com", web: "https://vimeo.com/hologramfields", linky: "https://vimeo.com/hologramfields" },

  { first: "Brendan", last: "Jones", email: "brendanjones.pdxdfv@gmail.com", web: "", linky: "" },

  { first: "DEEPAK", last: "KELOTH", email: "deepak.keloth@gmail.com", web: "", linky: "" },

  { first: "Elaina", last: "Tardif", email: "elainatardif@gmail.com", web: "", linky: "" },

  { first: "Emmett", last: "Crass", email: "ecrass@pdx.edu", web: "@cosmos_quartz", linky: "http://instagram.com/cosmos_quartz" },

  { first: "Fernanda", last: "D'Agostino", email: "nandada@aol.com", web: "https://www.fernandadagostino.com/", linky: "https://www.fernandadagostino.com/" },

  { first: "Helen", last: "Leigh", email: "helen.leigh@crowdsupply.com", web: "twitter: @helenleigh", linky: "https://twitter.com/helenleigh" },

  { first: "Hilary", last: "Tsai", email: "htsai@pnca.edu", web: "", linky: "" },

  { first: "Jacob", last: "Richman", email: "richman.jacob@gmail.com", web: "", linky: "" },

  { first: "Jerry", last: "Belich", email: "jerry@jerrytron.com", web: "https://jerrytron.com", linky: "https://jerrytron.com" },

  { first: "Jesse", last: "England", email: "jesse.england@gmail.com", web: "http://jesseengland.net", linky: "http://jesseengland.net" },

  { first: "JJ", last: "Vazquez", email: "jjv4@pdx.edu", web: "www.locomotionshoots.com", linky: "http://www.locomotionshoots.com" },

  { first: "Julie", last: "Perini", email: "perini@pdx.edu", web: "www.julieperini.com", linky: "http://www.julieperini.com" },

  { first: "Justin", last: "Patrizi", email: "justinzero@gmail.com", web: "", linky: "" },

  { first: "Layna", last: "Lewis", email: "llewis@willamette.edu", web: "@elevengallonhead https://www.instagram.com/vivalafreepdx/", linky: "https://www.instagram.com/vivalafreepdx/" },

  { first: "Leslie ", last: "Villela", email: "leslie.villela@intel.com", web: "", linky: "" },

  { first: "Lillyanne", last: "Pham", email: "lilpham@pdx.edu", web: "lillyannepham.com / instagram: @lillyannepham", linky: "http://instagram.com/lillyannepham" },

  { first: "Matthew", last: "Sottile", email: "mjsottile@me.com", web: "", linky: "" },

  { first: "Michelle", last: "Guthrie", email: "michelleguthrie@gmail.com", web: "@Michellemguthrie on IG", linky: "http://instagram.com/Michellemguthrie" },

  { first: "Miguel", last: "Higgins Moy", email: "mhigginsmoy@gmail.com", web: "", linky: "" },

  { first: "Nandini", last: "Ranganathan", email: "nandini@ceti.institute", web: "", linky: "" },

  { first: "Peter", last: "Vickery", email: "Vfxpeter@gmail.com", web: "", linky: "" },

  { first: "Rashad", last: "Pridgen", email: "rashadpridgen.ceo@gmail.com", web: "www.rashadxsoulnubian.com", linky: "http://www.rashadxsoulnubian.com" },

  { first: "Scott", last: "Nieradka", email: "nieradka@pdx.edu", web: "", linky: "" },

  { first: "Scott", last: "Garner", email: "scott@j38.net", web: "http://scottmadethis.net/", linky: "http://scottmadethis.net/" },

  { first: "Shana ", last: "Palmer", email: "Beverlyshana@gmail.com", web: "ShanaPalmer.com", linky: "http://ShanaPalmer.com" },

  { first: "Stephen", last: "Lee", email: "Steplee@pdx.edu", web: "@j_stephen_lee, jstephenlee.com", linky: "http://jstephenlee.com" },

  { first: "Tomas", last: "Cotik", email: "tcotik@pdx.edu", web: "", linky: "" }
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
