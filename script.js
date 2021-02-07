const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');


// event Handler /
searchBtn.addEventListener('click', getMealList);


// functions of get meal //
function getMealList() {
    let searchInputText = document.getElementById('search-input').value.trim();
    // console.log(searchInputText);

    const url1 = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInputText}`
    // const url2 = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`

    fetch(url1)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            let html = "";
            if (data.meals) {
                data.meals.forEach(meal => {
                    html += `
                    <div class="meal-item" data-id = "${meal.idMeal}">
                        <div class="meal-img">
                            <img src="${meal.strMealThumb}" alt="meal">
                        </div>
                        <div class="meal-name">
                            <h3>${meal.strMeal}</h3>
                        </div>
                    </div>
                    `;
                })
                mealList.classList.remove('noResult');
            } else {
                html = "No Mill found as per your request. Sorry!!"
                mealList.classList.add('noResult');
            }
            mealList.innerHTML = html;
        });
}
<<<<<<< HEAD



// function getMealList() {
//     let searchInputText = document.getElementById('search-input').value.trim();
//     // console.log(searchInputText);

//     const url1 = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInputText}`
//     const url2 = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`

//     fetch(url1)
//         .then(response => response.json())
//         .then(data => {
//             // console.log(data);
//             let html = "";
//             if (data.meals) {
//                 data.meals.forEach(meal => {
//                     html += `
//                     <div class="meal-item" data-id = "${meal.idMeal}">
//                         <div class="meal-img">
//                             <img src="${meal.strMealThumb}" alt="meal">
//                         </div>
//                         <div class="meal-name">
//                             <h3>${meal.strMeal}</h3>
//                         </div>
//                     </div>
//                     `;
//                 })
//                 mealList.classList.remove('noResult');
//             } else {
//                 html = "No Mill found as per your request. Sorry!!"
//                 mealList.classList.add('noResult');
//             }
//             mealList.innerHTML = html;
//         });
// }













// function getMealList() {
//     let searchInputText = document.getElementById('search-input').value.trim();
//     console.log(searchInputText);

//     const getMeal = searchInputText => {
//         // const url1 = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInputText}`
//         const url2 = `https://www.themealdb.com/api/json/v1/1/search.php?i=${searchInputText}`
//         const url = `https://www.themealdb.com/api/json/v1/1/search.php?i='${searchInputText}'`;
//         console.log(url);

//         fetch(url)
//             .then(res => res.json())
//             .then(data => console.log(data));



//     }
//     getMeal();
// }





// const displayCountryDetail = name => {
//     const url = `https://restcountries.eu/rest/v2/name/${name}`
//     // console.log(url);
//     fetch(url)
//         .then(res => res.json())
//         .then(data => renderCountryInfo(data[0]));

// }
// const renderCountryInfo = country => {
//     // console.log(country);
//     const countryDiv = document.getElementById("countryDetail")
//     countryDiv.innerHTML = `
//     <h1>${country.name}</h1>
//     <p>Population: ${country.population}</P>
//     <p>Area: ${country.area}</p>  
//     <img src="${country.flag}">  
//     `
// }




// if (searchInputText.length = 1) {
//     API(url1)
// }
// else {
//     API(url2)
// }


// function API(url) {
//     fetch(API)
//         .then(response => response.json())
//         .then(data => {
//             // console.log(data);
//             let html = "";
//             if (data.meals) {
//                 data.meals.forEach(meal => {
//                     html += `
//                 <div class="meal-item" data-id = "${meal.idMeal}">
//                     <div class="meal-img">
//                         <img src="${meal.strMealThumb}" alt="meal">
//                     </div>
//                     <div class="meal-name">
//                         <h3>${meal.strMeal}</h3>
//                     </div>
//                 </div>
//                 `;
//                 })
//                 mealList.classList.remove('noResult');
//             } else {
//                 html = "No Mill found as per your request. Sorry!!"
//                 mealList.classList.add('noResult');
//             }
//             mealList.innerHTML = html;

//         });
// }


=======
>>>>>>> main
