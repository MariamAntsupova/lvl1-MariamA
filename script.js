const CardsList = document.querySelector(".cards");
let limitNum = document.querySelector('.butval').value;

function request(){
    fetch(` https://fakestoreapi.com/products?limit=${limitNum}`)
        .then(response => response.json())
        .then(json => 
            json.forEach(element => {
                
                CardsList.innerHTML += `
                <div class="card  align-items-center text-center d-flex p-5 flex-fill" style="width: 18rem; border: none;">

                    <img src="${element.Image}" class="card-img-top">

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
