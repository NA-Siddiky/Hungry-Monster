const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');

// event Handler /
searchBtn.addEventListener('click', getMealList);

// functions of get meal //
function getMealList() {
    let searchInputText = document.getElementById('search-input').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputText}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.meals) {
                mealList.innerHTML = '';
                data.meals.forEach(meal => {        // Traversing items using forEach Loop/
                    const mealItem = document.createElement('div');
                    mealItem.setAttribute('class', 'meal-item');
                    mealItem.innerHTML = `
                    <div class="meal-img">
                        <img src="${meal.strMealThumb}" alt="meal">
                    </div>
                    <div class="meal-name">
                        <h3>${meal.strMeal}</h3>
                    </div>
                    `
                    mealList.appendChild(mealItem);
                });
                ingredientsOfMeal();
                mealList.classList.remove('noResult');
            }
            else {                                  // if item, not found /
                mealList.innerHTML = "No Mill found as per your request. Sorry! Try again"
                mealList.classList.add('noResult');
            }
        });
}

// functions of get Ingredients //
function ingredientsOfMeal() {
    const mealIngredients = document.querySelectorAll(".meal-item");
    for (let i = 0; i < mealIngredients.length; i++) {
        const food = mealIngredients[i];
        
        //function for getting ingredients list //
        food.addEventListener('click', function () {
            const callAPI = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food.innerText}`;
            const ingredient = document.getElementById('ingredient');
            fetch(callAPI)
                .then(response => response.json())
                .then(data => {
                    document.getElementById("get-name").innerText = data.meals[0].strMeal;
                    const ingredientList = document.getElementById("ingredient");
                    const li = `
                    <li>${data.meals[0].strIngredient1}</li>
                    <li>${data.meals[0].strIngredient2}</li>
                    <li>${data.meals[0].strIngredient3}</li>
                    <li>${data.meals[0].strIngredient4}</li>
                    `
                    ingredientList.innerHTML = li
                    document.getElementById('show-image').src = data.meals[0].strMealThumb;
                })
            document.getElementById('meal-details').classList.remove('d-none');
        })
    }
}