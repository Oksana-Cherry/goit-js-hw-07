// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет
// инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.
/*подсказка из чата:
параметр input : valueAsNumber
вашSelectorSpan.style.fontSize = `${значение переменной}px`
вашSelectorInput.valueAsNumber*/

const inputFontRef = document.querySelector('#font-size-control');

const spanTexRef = document.querySelector('#text')

inputFontRef.addEventListener('input', () => { spanTexRef.style.fontSize = `${inputFontRef.valueAsNumber}px` })



/*valueAsNumber: Значение элемента, интерпретируемое как одно из следующих в порядке:
временная стоимость
число
NaN если преобразование невозможно*/



