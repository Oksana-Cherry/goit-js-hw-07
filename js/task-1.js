const titleCategories = document.querySelectorAll('.item');//querySelector это современный стандарт для поиска DOM-узлов
console.log(`В списке ${titleCategories.length} категории.`);
//console.dir(titleCategories)
const categoriesArray = [...titleCategories]//распыление 
  .map(categories => `Категория: ${categories.children[0].textContent}\nКоличество элементов: ${categories.children[1].children.length}`)
  .join("\n");
console.log(categoriesArray);
//вариант-2 от ребят
/*const getCategoriesInfo = () => {
  const categoriesListItemsRef = document.querySelectorAll('.item');
  console.log(`В списке ${categoriesListItemsRef.length} категории`);

  categoriesListItemsRef.forEach(category => {
    const categoryTitleRef = category.querySelector('h2');
    const categoryElementsRef = category.querySelectorAll('li');
    console.log(`Категория: ${categoryTitleRef.textContent}`);
    console.log(`Количество элементов: ${categoryElementsRef.length}`);
  });
};
getCategoriesInfo();*/