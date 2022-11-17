/* # Confs*/
const URL_API = 'https://ffxivcollect.com/api/minions';
/* # Function*/
function getElement(q) {
  return document.querySelector(q);
}
const getAPI = (url, functionCallback) => {
  fetch(url)
    .then(
      (response) => response.json(), // resolve (retorno OK)
      (error) => console.error(error) // reject (erro no retorno)
    )
    .then(
      (dataJson) => functionCallback(dataJson), // resolve (retorno OK)
      (erro) => console.error(erro) // reject (erro no retorno)
    );
};
const getLista = function () {};
/* # Services*/

//
