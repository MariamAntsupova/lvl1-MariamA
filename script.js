const CardsList = document.querySelector(".cards");
let limitNum = document.querySelector('#butval');
let fetchAPI = `https://fakestoreapi.com/products?limit=${limitNum.value}`;
const datacols2 = document.querySelector(".datacols2").value;
const datacols3 = document.querySelector(".datacols3").value;
const datacols4 = document.querySelector(".datacols4").value;
const datacols6 = document.querySelector(".datacols6").value;



limitNum.addEventListener('change', (event) => {
    CardsList.innerHTML = ' ' ;
    const fetchAPI = `https://fakestoreapi.com/products?limit=${event.target.value}`;
    request(fetchAPI);
  });



function request(fetchAPI){
    fetch(fetchAPI)
        .then(response => response.json())
        .then(json => 
            json.forEach(element => {
                CardsList.innerHTML += `
                <div class="card  align-items-center text-center d-flex p-5 flex-fill border-0 " >

                    <img src="${element.image}" class="card-img-top">

                    <div class="starred">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star unchecked"></span>
                    </div>
                    <div class="card-body">
                        <p class="card-text">${element.title}</p>
                        <h5 class="card-title">${element.price}</h5>
                    </div>
                    <div class="dots d-flex ">
                        <span class="dot bg-primary"></span>
                        <span class="dot bg-secondary"></span>
                        <span class="dot bg-info"></span>
                    </div>
                </div>
            `
            })
            
        )
}
function colsQuantity2(){
    CardsList.className += `row row-cols-${datacols2}`;
    console.log(CardsList)
}

function colsQuantity3(){
    CardsList.className +=  `row row-cols-${datacols3}`;
}
function colsQuantity4(){
    CardsList.className +=  `row row-cols-${datacols4}`;

}
function colsQuantity6(){
    CardsList.className +=  `row row-cols-${datacols6}`;

}
function table(){
    CardsList.className +=  `row row-cols-${datacols4}`;
}

function list(){
    CardsList.className +=  `col col-md-auto`;
}