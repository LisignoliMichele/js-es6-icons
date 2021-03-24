// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
// 
// Milestone 2
// Coloriamo le icone per tipo
// 
// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

const icons = [
  {
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'ice-cream',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'lemon',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'hamburger',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'pizza-slice',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'beer',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-whiskey',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'wine-bottle',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'cocktail',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'coffee',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-martini',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'dragon',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'kiwi-bird',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'frog',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'hippo',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'otter',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'horse',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
];

// Milestone 1


const container = $(".icons");


// icons.forEach((icon) => {

// const {name, family, prefix} = icon;

// html = `<div>
// <i class="${family} ${prefix}${name}"></i>
// <div class="title">${name}</div>
// </div>`;

// container.append(html)

// });

// Milestone 2

// divido le icone per categorie 

const iconsCategories = getCategories(icons) 



// 2.1 aggiungo la proprietá colore ad ogni oggetto icona in base alla categoria

const colors = ['lightblue', 'blue', 'darkblue'];

const iconsColored = icons.map((icon)=> {

const categoryIndex = iconsCategories.indexOf(icon.category);
const colorIcon = colors[categoryIndex];

icon.color = colorIcon;

return icon

});

// 2.2 mostro in pagina tutte le icone aggiornate con il colore assegnato ad ogni categoria.

printIcons (container, iconsColored);


// Milestone 3

// creo le options nella select per ogni categoria di icone 

const select = $('#type')

iconCategory.forEach((type) => {

  const selectHtml = `<option value="${type}">${type}</option>`;
  
  select.append(selectHtml);

});

// in base alla option scelta mostro la categoria selezionata

select.change(function(){

  const optionSelected = $(this).val();

  let iconsFiltered = iconsColored.filter((icon) => {
    return icon.category == optionSelected;
  });

  if (iconsFiltered.length == 0){
    iconsFiltered = iconsColored
  }
  
  printIcons (container, iconsFiltered);

});



// FUNZIONI

function printIcons (target, icons) {
  target.html("")

  icons.forEach((icon) => {

    const {name, family, prefix, color} = icon;
    
    html = `<div>
    <i class="${family} ${prefix}${name}"style="color:${color}"></i>
    <div class="title">${name}</div>
    </div>`;
    
    target.append(html)

  });
}

function getCategories(objArray) {
  
  const categories = [];

  icons.forEach((obj) => {

    if (categories.includes(obj.category) == false ){
      categories.push(obj.category)
    }
  });

  return categories;

}