var listMinion = new Array();
addEventListener('load', function () {
  getAPI(URL_API_CHARACTER, createMinionList);
});

const createMinionList = (data) => {
  let main = getElement('main');
  data.results.forEach((minion) => {
    let html = document.createElement('div');
    html.classList.add('card', 'col-2', 'my-4', 'card-preview');
    html.addEventListener('click', () => showMinionDetails(minion));

    let htmlBody = `
        <div id="card-header" class="card-header">
          <img class ="card-img-top"src="${minion.image}" alt="${minion.name}">
        </div>
        <div class="card-body  minion-name">
          <h3 id="minion-title" class="text-center">${minion.name}</h3>
        </div>
      </div>`;
    html.innerHTML = htmlBody;
    main.appendChild(html);
    listMinion.push(minion);
  });
};

const showMinionDetails = (minion) => {
  let div = document.createElement('div');
  getElement('#modal-body').innerHTML = '';
  div.classList.add('card', 'col-10', 'my-4');
  let cardBody = `<div class="card-header">
      <img class ="card-img-top"src="${minion.image}" alt="h1">
    </div>
    <div class="card-body ">
      <h3 id="minion-card-title" class="text-center"><b>${minion.name}</b></h3>
      <article> 
        <ul class="list-group">
          <li class="list-group-item"><b>Description:</b> ${minion.description}</li>
          <li class="list-group-item"><b>Tooltip:</b> ${minion.tooltip}</li> 
          <li class="list-group-item"><b>Patch:</b> ${minion.patch}</li> 
          <li class="list-group-item"><b>Owned:</b> ${minion.owned}</li> 
          <li class="list-group-item"><b>Item Preview:</b> <img src="${minion.icon}"></li> 
          
        </ul>
      </article>
</div>`;
  div.innerHTML = cardBody;
  getElement('#modal-body').appendChild(div);
  $('#charModal').modal('show');
};
