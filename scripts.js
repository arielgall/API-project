
//Feed
const getStuff = 'https://raw.githubusercontent.com/janaipakos/ghibliapi/master/data.json';

let doStuff = function(data) {
  let title, description;
  
  //console.log(data.films);
  for (i=0; i < data.films.length; i++){
    const template = `<h1>${data.films[i].title}</h1>
<p>${data.films[i].description}</p>`;
    $('#app').append(template);
  }
};

$.getJSON(getStuff, doStuff);

//let showStuff = function(data) {}
