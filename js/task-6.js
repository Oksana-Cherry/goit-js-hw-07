/*Сколько символов должно быть в инпуте, указывается 
в его атрибуте data-length.
Если введено подходящее количество, то border инпута 
становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.*/ 


  
const inputRef = document.querySelector('#validation-input')

const dataLength = Number(inputRef.dataset.length);//считывать атрибутов(свойство dataset доступно только для чтения).
/*Методы elem.addEventListener() и elem.removeEventListener() 
это современный способ назначить или удалить обработчик, при этом можно 
использовать сколько угодно обработчиков на одном типе события.*/ 

inputRef.addEventListener('blur', () => {   // blur(Применяет эффект размытия к изображению.
  inputRef.classList.add('invalid');
  inputRef.classList.replace('valid', 'invalid');// replace возвращает новую строку 
    
  if (inputRef.value.length === dataLength) {

    inputRef.classList.add('valid');
    inputRef.classList.replace('invalid', 'valid')

  } else if (inputRef.value.length === 0) {

    inputRef.classList.remove('valid');
    inputRef.classList.remove('invalid');

  }
});

