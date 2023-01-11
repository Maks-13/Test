
let point = document.querySelectorAll(".pop_up_open");
let value1 = document.querySelector("#firstField");
let isTrue = true;
let gen;


if(point.length > 0){
for(let value of point){
    value.addEventListener('mouseover', function(gen){
        let popupName = value.getAttribute('href').replace('#', '');
        const currentPopup = document.getElementById(popupName);
        value.addEventListener('mousemove', function(){
        });
        value.style.cursor = "pointer";
        popupOpen(currentPopup);
        let first = value.innerHTML;
        gen = first;
        meth2(gen);
    });
}
}

const popupCloseIcon = document.querySelector('.pop_up_close');
const el = popupCloseIcon;
el.addEventListener('click', function (e){
    popupClose(el.closest('.pop_up'));
    e.preventDefault();
});

function popupOpen(currentPopup){
    if(currentPopup){
        currentPopup.classList.add('open');
        currentPopup.addEventListener('click', function(e){
            if (!e.target.closest('.pop_up_content')){
              popupClose(e.target.closest('.pop_up'));
            }
        })
    }
}


function popupClose(popupActive){
    popupActive.classList.remove('open');
}

function meth(b, ordinalValue){
    b.innerHTML = ordinalValue;
};


function meth2(value){
if(value == "Порядковый номер"){
    meth(value1, "Порядковый номер");
}else if(value == "Товар"){
    meth(value1, "Товар");
}else if(value == "Цена"){
    meth(value1, "Цена");
}else{
    meth(value1, "Количество на складе");
}
}
