//participants from https://docs.google.com/spreadsheets/d/1diYFaKSkEImWN75mjc4ihQ6KActnkWCxMdlz4Vfzahc/edit#gid=1812818967
let DATA = [
  { first: "Alain", last: "Bally", web: "", linky: "" },
  { first: "Alan", last: "Ma", web: "", linky: "" },
  { first: "alex", last: "michaluk", web: "", linky: "" },
  { first: "Allison", last: "Meechoovet", web: "", linky: "" },
  { first: "Ayse", last: "Gursoz", web: "aysegursoz.com", linky: "http://www.aysegursoz.com" },
  {
    first: "Benjamin",
    last: "Hencke",
    web: "bhencke.com",
    linky: "http://bhencke.com"
  },
  { first: "Bernardo", last: "Pantoja", web: "https://vimeo.com/hologramfields", linky: "https://vimeo.com/hologramfields" },
  { first: "Brad", last: "Andersen", web: "", linky: "" },
  { first: "Brendan", last: "Jones", web: "", linky: "" },
  { first: "Byron", last: "Greenlee", web: "", linky: "" },
  { first: "Daniel", last: "Young", web: "", linky: "" },
  { first: "David", last: "Lobser", web: "http://dlobser.com", linky: "http://dlobser.com" },
  { first: "DEEPAK", last: "KELOTH", web: "", linky: "" },
  { first: "Elaina", last: "Tardif", web: "", linky: "" },
  { first: "Ola", last: "Onipede", web: "", linky: "" },
  { first: "Emmett", last: "Crass", web: "@cosmos_quartz", linky: "http://instagram.com/cosmos_quartz" },
  { first: "Fernanda", last: "D'Agostino", web: "https://www.fernandadagostino.com/", linky: "https://www.fernandadagostino.com/" },
  { first: "Georgia ", last: "Bryant", web: "", linky: "" },
  { first: "Helen", last: "Leigh", web: "twitter: @helenleigh", linky: "https://twitter.com/helenleigh" },
  { first: "Hilary", last: "Tsai", web: "", linky: "" },
  { first: "Jacob", last: "Richman", web: "", linky: "" },
  { first: "Loni", last: "Hoodenpyle", web: "", linky: "" },
  { first: "Jerry", last: "Belich", web: "https://jerrytron.com", linky: "https://jerrytron.com" },
  { first: "Jesse", last: "England", web: "http://jesseengland.net", linky: "http://jesseengland.net" },
  { first: "JJ", last: "Vazquez", web: "www.locomotionshoots.com", linky: "http://www.locomotionshoots.com" },
  { first: "Julie", last: "Perini", web: "www.julieperini.com", linky: "http://www.julieperini.com" },
  { first: "Justin", last: "Patrizi", web: "", linky: "" },
  
  { first: "Karl", last: "Benjamin", web: "", linky: "" },
  { first: "Keenan", last: "McCune", web: "@symmetriccollective", linky: "https://www.instagram.com/symmetriccollective/" },
  { first: "Layna", last: "Lewis", web: "@elevengallonhead https://www.instagram.com/vivalafreepdx/", linky: "https://www.instagram.com/vivalafreepdx/" },
  { first: "Leslie ", last: "Villela", web: "", linky: "" },
  { first: "Laurel ", last: "Jensen", web: "", linky: "" },
  { first: "Lillyanne", last: "Pham", web: "lillyannepham.com / instagram: @lillyannepham", linky: "http://instagram.com/lillyannepham" },
  { first: "Matthew", last: "Sottile", web: "", linky: "" },
  { first: "Michelle", last: "Guthrie", web: "@Michellemguthrie on IG", linky: "http://instagram.com/Michellemguthrie" },
  { first: "Miguel", last: "Higgins Moy", web: "", linky: "" },
  { first: "Nandini", last: "Ranganathan", web: "", linky: "" },
  { first: "Peter", last: "Vickery", web: "", linky: "" },
  { first: "Rashad", last: "Pridgen", web: "www.rashadxsoulnubian.com", linky: "http://www.rashadxsoulnubian.com" },
  { first: "Scott", last: "Nieradka", web: "", linky: "" },
  { first: "Scott", last: "Garner", web: "http://scottmadethis.net/", linky: "http://scottmadethis.net/" },
  { first: "Shana ", last: "Palmer", web: "ShanaPalmer.com", linky: "http://ShanaPalmer.com" },
  { first: "ShengYao", last: "Liu", web: "", linky: "" },
  { first: "Tomas", last: "Cotik", web: "", linky: "" },
  { first: "Zack", last: "Marlow", web: "zackmarlow.com", linky: "http://www.zackmarlow.com/" }
]
function sortByFirst() {
  let sortedData = DATA.sort((a, b) => a.first - b.first)
  return sortedData
}
function createParticipant() {
  const numParticipants = DATA.length
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
  sortByFirst(DATA)
  createParticipant(DATA)
  showLinks()
}
$(init())
