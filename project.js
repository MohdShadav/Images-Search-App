let Access_key  = "GWMeJfpb5PsRyS5mvNOwJoEKkXRMdqobPGtG4-g-ihM";

let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let showData = document.querySelector(".showData");
let loadMoreBtn = document.getElementById("loadMoreBtn");

let page = 1;

const getData = async (searchValue, pageNo ) => {
    let fetching = await fetch(`https://api.unsplash.com/search/photos?query=${searchValue} &per_page=15&P=${pageNo} age&client_id=${Access_key}`);
    let jsonData = await fetching.json();
    console.log(jsonData.results);

    if(pageNo == 1){
        showData.innerHTML= "";
    }

    if(searchInput.value == "")
    {
        showData.innerHTML= `
        <h1>Please Search</h1>
        `
    }
    else{
        document.querySelector(".loadMore").style.display = "block";
    }

    jsonData.results.forEach(function(data){
        console.log(data.urls.small);

        let div = document.createElement("div");
        div.classList.add("card");
        showData.appendChild(div);

        div.innerHTML=` 
         <img src=${data.urls.small} alt="">
            <a href=${data.links.html} target="Blank">${data.alt_description}</a> `
    })
}

searchBtn.addEventListener("click", function(){
    let searchValue = searchInput.value;
    getData(searchValue, 1);

});
loadMoreBtn.addEventListener("click", function(){
    let searchValue = searchInput.value;
    getData(searchValue, page++);
});