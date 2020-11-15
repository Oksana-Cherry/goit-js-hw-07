//Напиши скрипт, который для каждого элемента массива ingredients 
//создаст отдельный li, после чего вставит все li за одну операцию
//в список ul.ingredients.Для создания DOM - узлов используй 
//document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ulIngredients = document.querySelector('#ingredients');
// понятно, но очень долго(((
/*let link1 = document.createElement('li');
link1.textContent = ingredients[0];
let link2 = document.createElement('li');
link2.textContent = ingredients[1];

ulIngredients.append(link1, link2,);
console.log(ulIngredients);*/

const foodRef = ingredients.forEach(ingredient => {
  let items = document.createElement("li");
  items.textContent = ingredient;
  ulIngredients.append(items);
});
console.log(ulIngredients);
