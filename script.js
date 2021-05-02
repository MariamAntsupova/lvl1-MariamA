const search = document.querySelector(".search-button");
const musicList = document.querySelector(".result-cards");


search.addEventListener('click' , searchMusic);

function searchMusic(){
    let searchInput = document.querySelector('.input-class').value;
    fetch(` https://itunes.apple.com/search?term=${searchInput}`)
        .then(response => response.json())
        .then(data => {
            let html = "" ;
            if(data.results){
                data.results.forEach(results => {
                    html += `
                    <div class="card">
                        <div class="text-container">
                            <video class="video" controls>
                                <source src="${results.trackViewUrl}" type="video/mp4">
                            </video>
                            <h4><b>${results.artistName}</b></h4>
                            <p>${results.trackCensoredName}</p>
                        </div>
                    </div>
                    `
                });
            } else{
                html = "Sorry, we didn't find any music!";
            }

            musicList.innerHTML = html
        })
}
