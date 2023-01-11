
let point = document.querySelectorAll(".pop_up_open");
let value1 = document.querySelector("#firstField");
let isTrue = true;
let gen;


point[0].addEventListener('click', function(gen){
    let first = point[0].innerHTML;
    gen = first;
    meth2(gen);
});

point[1].addEventListener('click', function(gen){
    let first = point[1].innerHTML;
    gen = first;
    meth2(gen);
});

point[2].addEventListener('click', function(gen){
    let first = point[2].innerHTML;
    gen = first;
    meth2(gen);
});



function meth(b, ordinalValue){
    b.innerHTML = ordinalValue;
};


function meth2(value){
    
if(value == "Товар"){
    meth(value1, "Товар");
}else if(value == "Цена"){
    meth(value1, "Цена");
}else{
    meth(value1, "Количество на скаладе");
}
}

/* function createElementForInsert(){
    let span = document.createElement('span');
    span.className = "number";
    span.innerHTML = ""; //получение первичного ключа из массива
    B.before(span);
}
 */