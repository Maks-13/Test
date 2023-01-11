
let variable = document.querySelector("specialStyle");

/* function createElementFromHtml(htmlString) {
    const div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
  }
  
  
  const table = document.getElementById('design_table'); 
  
  let tableRow; */

  /* const createHtmlForInsert = (id, item, price, amount) => `<div>
    <span class="number">${id}</span>
    <span class="specialStyle">${item}</span>
</div>
<div><span class="specialStyle">${price}</span></div>
<div><span class="specialStyle">${amount}</span></div>`; */
  /* // for {
  const tableRow = createElementFromHtml(createHtmlForInsert(1,2,3,4)); */

  
  // }

window.onload = function () {
    UpdateDisplay();
};

function UpdateDisplay() {
    const url = 'http://localhost:3000';
    let response;
    let request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.send();

    request.onreadystatechange = function () {

        const id = "idKindsItems";
        const item = "KindItem";
        const price = "PriceOneItem";
        const amount = "AmountItems";

        if (this.readyState != 4) return;

        if (request.status != 200) {
            alert(request.status + ":" + request.status);

        } else {
            response = Array.from(JSON.parse(request.response));
            for (let obj of response) {
                createHtmlForInsert([obj[id], obj[item], obj[price], obj[amount]]);
            }
        }
    }
}

function createHtmlForInsert(arr){
let i = 0;
const element  = document.querySelector('.design_table'); 
const fragment = document.createDocumentFragment();
const browsers = arr; 

browsers.forEach((browser) => {
    const div = document.createElement('div');
    div.textContent = browser;
    div.className = 'elem';
    fragment.appendChild(div);
});

element.appendChild(fragment);
};
/* table.append(tableRow); */

/* const fragment = new DocumentFragment(); */



/* let popUp1 = document.querySelector('.design_table');

fragment.innerHTML = createHtmlForInsert;

popUp1.append(fragment); */

/* function createElementForInsert(id, Item, Price, Amount) {
    function Create() {
        this.func1 = function (num, firstElem, secondElem = null) {

            let popUp1 = document.querySelector('.design_table');

            let div11 = document.createElement('div');

            div11.className = "elem";

            popUp1.append(div11);

            let measure = popUp1.lastElementChild;

            let span2 = document.createElement('span');

            span2.className = "specialStyle";

            span2.innerHTML = firstElem;

            measure.prepend(span2);

            if (num == 0){

            let span1 = document.createElement('span');

            span1.className = "number";

            span1.innerHTML = secondElem;

            measure.prepend(span1);

            };
    };

    };

    let create = new Create();
    create.func1(0, b, a);
    create.func1(1, c);
    create.func1(2, d);
}
 */
