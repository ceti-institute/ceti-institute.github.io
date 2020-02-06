const hackathonModule = (function () {
  'use strict';

  const _participantsList = [];


  function init() {
    populateParticipants();
    populateProjects();
  }

  function titleCase(str) {  return str.toLowerCase().replace(/(^|\s)\S/g,  (firstLetter) => firstLetter.toUpperCase());}

  function populateProjects(){
    const $projectsContainer = document.querySelector('.hackathon__projects_container');
    SITE_DATA.projects.map((projectItem,index)=>{
      let projectSlug = projectItem.title
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map(x => x.toLowerCase())
      .join('_');

      const projectLink = `hackathon-project.html?project=${projectSlug}`
      const projectMarkup = `
      <div class="hackathon__project_container">
          <a class="hackathon__project_info_container" href="${projectLink}">
            <p class="hackathon__project_title">${projectItem.title}</p>
          </a>
        <img src="images/projects/thumb/${projectItem.image}" alt="Project Image" class="hackathon__project_image">
      </div>
      `
      $projectsContainer.insertAdjacentHTML('beforeend',projectMarkup);
    });
  }

  function populateParticipants() {
    console.log('populateParticipants');
    const numParticipants = SITE_DATA.participants.length;
    let curLetter = null;

    SITE_DATA.participants.forEach((participantItem,index)=>{
      let participantFirst = participantItem['First Name'];
      let participantLast = participantItem['Last Name'];
      let participantInsta = participantItem['Instagram'];
      let participantWebpage = participantItem['Webpage'];
      participantItem.name = titleCase(`${participantFirst ? participantFirst : ''} ${participantLast ? participantLast : ''}`);
      //participantItem.name = participantItem['First Name'] + participantItem['Last Name']
      participantItem.link = participantInsta ? `http://instagram.com/${participantInsta}` : participantWebpage ? `http://${participantWebpage}` : '';
    });

    const curParticipants = SITE_DATA.participants.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    curParticipants.forEach((participantItem, index) => {
      const column = index < numParticipants / 3 ? 0 : index < (numParticipants / 3) * 2 ? 1 : 2;
      const $column = document.getElementById(`Participants__column--${column}`);

      const firstLetter = participantItem.name.charAt(0);
      if (firstLetter !== curLetter) { //new letterGroup needed
        curLetter = firstLetter;
        const letterGroupMarkup = `
        <div class="hackathon__participants_group" id="Participants__group--${curLetter}">
          <span class="hackathon__participants_letter">${curLetter}</span>
          <ul class="hackathon__participants_list">
          
          </ul>
        </div>
        `
        $column.insertAdjacentHTML('beforeend', letterGroupMarkup);
      }
      const $letterGroup = document.getElementById(`Participants__group--${curLetter}`);
      const $letterGroupList = $letterGroup.querySelector('.hackathon__participants_list');
      const participantNameMarkup = `<span class="hackathon__participant_name">${participantItem.name}</span>`
      const participantLinkMarkup = participantItem.link && participantItem.link !== '' ? `<a href="${participantItem.link}" target="_blank">${participantNameMarkup}</a>` : participantNameMarkup; 
      const participantAvatar = participantItem.avatar && participantItem.avatar !== '' ? `<img src="images/participants/${participantItem.avatar}" alt="${participantItem.name}" class="hackathon__participant_image">` : `<img src="images/participants/placeholder.svg" alt="Participant Placeholder Image" class="hackathon__participant_image">`;
      const participantMarkup = `
          <li class="hackathon__participant_item" data-id="${participantItem.slug}">
            ${participantAvatar}
            ${participantLinkMarkup}
          </li>
      `
      $letterGroupList.insertAdjacentHTML('beforeend', participantMarkup);
    });

  }

  return {
    init: init
  };
}());

hackathonModule.init();

// carousel

var x = 0,
    carousel = $('.carousel'),
    items = carousel.find('li'),
    carouselHeight = 0,
    numberVisible = 3,
    intervalSec = 4000;

if(!carousel.find('li:first').hasClass("first")){
  carousel.find('li:first').addClass("first");
}

items.each(function(){
  if(x < numberVisible){
    carouselHeight = carouselHeight + $(this).outerHeight();
    x++;
  }
});

carousel.css({ height: carouselHeight, overflow: "hidden" });
  
function vertCycle() {
  var firstItem = carousel.find('li.first').html();
    
  carousel.append('<li>'+firstItem+'</li>');
  firstItem = '';
  carousel.find('li.first').animate({ marginTop: "-50px" }, 600, function(){  $(this).remove(); carousel.find('li:first').addClass("first"); });
}

if(intervalSec < 700){
  intervalSec = 700;
}

var init = setInterval("vertCycle()",intervalSec);

carousel.hover(function(){
  clearInterval(init);
}, function(){
  init = setInterval("vertCycle()",intervalSec);
});

