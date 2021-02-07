const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');

// event Handler /
searchBtn.addEventListener('click', getMealList);

mealList.addEventListener('click', function () {
    const mealDetails = document.getElementById("meal-details")
    mealDetails.className = "d-flex"
});



// functions of get meal //
function getMealList() {
    let searchInputText = document.getElementById('search-input').value.trim();
    // console.log(searchInputText);
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`

    fetch(url)
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


// const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`

// fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data.meals));

// const mealList = meals => {
//     console.log(meals[0].strMeal);

    // const ul = document.getElementById('ingredients');

    // // for (let i = 0; i <= meals.length; i++) {
    // //     const meal = meals[i];
    // const li = document.createElement('li');
    // li.innerText = meal.strIngredient1;
    // // console.log(meal.strIngredient1);
    // ul.appendChild(li);
    // // }
// }