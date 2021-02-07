const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');


// event Handler /
searchBtn.addEventListener('click', getMealList);


// functions of get meal //
function getMealList() {
    let searchInputText = document.getElementById('search-input').value.trim();
    // console.log(searchInputText);

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`)
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
