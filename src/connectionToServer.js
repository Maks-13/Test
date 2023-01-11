
let variable = document.querySelector("specialStyle");


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
