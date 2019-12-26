const hackathonProjectsModule = (function () {
  'use strict';

  const _urlParams = new URLSearchParams(window.location.search);
  const _urlSlug = _urlParams.get('project');
  const _curProject = SITE_DATA.projects.find((projectItem)=>{
    let curProjectSlug = projectItem.title
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map(x => x.toLowerCase())
      .join('_');
    return curProjectSlug === _urlSlug;
  });

  //const _projectIndex = 0; //MH - TEMP
  //const _curProject = SITE_DATA.projects[_projectIndex]; //MH - TEMP

  function init() {
    populateInfo();
    populateParticipants();
  }

  function populateInfo(){
    const $projectTitle = document.querySelector('.hackathon__project_title');
    const $projectDescription = document.querySelector('.hackathon__info_description_text_container');
    const $projectImageContainer = document.querySelector('.hackathon__project_image_container');
    $projectTitle.innerHTML = _curProject.title;
    $projectDescription.innerHTML = _curProject.description;
    $projectImageContainer.innerHTML = `<img src="images/projects/lg/${_curProject.image}" alt="${_curProject.title}" class="hackathon__info_image">`;
  }

  function populateParticipants() {
    console.log('populateParticipants');
    const curParticipants = _curProject.participants;
    const $participantsList = document.querySelector('.hackathon__contributors_list');

    curParticipants.forEach((participantItem, index) => {

      const participantObj = SITE_DATA.participants.find((participant,index)=>{
        return participant.name == participantItem;
      });

      console.log(participantObj);

      const participantAvatar = participantObj.avatar && participantObj.avatar !== '' ? `<img src="images/participants/${participantObj.avatar}" alt="${participantObj.name}" class="hackathon__participant_image">` : `<img src="images/participants/placeholder.svg" alt="Participant Placeholder Image" class="hackathon__participant_image">`;

      const participantMarkup = `
          <li class="hackathon__participant_item">
            ${participantAvatar}
            <span class="hackathon__participant_name">${participantObj.name}</span>
          </li>
      `
      $participantsList.insertAdjacentHTML('beforeend', participantMarkup);
    })

  }

  return {
    init: init
  };
}());

hackathonProjectsModule.init();