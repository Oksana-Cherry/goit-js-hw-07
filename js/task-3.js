/*Используй массив объектов images для создания тегов img 
вложенных в li. Для создания разметки используй шаблонные 
строки и insertAdjacentHTML().

Все элементы галереи должны добавляться в DOM за одну 
операцию вставки.
Добавь минимальное оформление галереи флексбоксами или 
гридами через css-классы.*/ 

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const imageRef = document.querySelector("#gallery");
const createGallery = () => {
    imageRef.classList.add('gallery')
    const imagesTags = ({ url, alt }) => `<li><img class="gallery-link" src='${url}' alt='${alt}'></li>`;
    const gallery = images.map(imagesTags).join(" ");//join(" ")без символов
    imageRef.insertAdjacentHTML('beforeend', gallery);//'beforeend' - внутрь element, в самый конец контента.
};
/*elem.insertAdjacentElement(position, elem) — вставляет 
в произвольное место не HTML-строку,
 а элемент elem*/
createGallery(images);
console.log(imageRef);




 //у меня шок.....(((( 

/*images .forEach(({url, alt}) => {
  const items = document.createElement('li');
  //const imgItems = document.createElement('img');
 
     //imgItems.src = 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
   //imgItems.alt = 'White and Black Long Fur Cat';
  items.insertAdjacentHTML('afterbegin',(`<img src='${url}' alt='${alt}' width='100'>`));
  imgeRef.append(items);
});
console.log(imgeRef);*/ 
