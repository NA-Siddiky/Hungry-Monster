const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');

// functions of get meal //
function getMealList() {
    let searchInputText = document.getElementById('search-input').value;
    if (searchInputText === '') {
        alert("Please type item name & try again")
    }
    else {
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
}

// functions of get Ingredients //
function ingredientsOfMeal() {
    const mealIngredients = document.querySelectorAll(".meal-item");
    for (let i = 0; i < mealIngredients.length; i++) {
        const food = mealIngredients[i];

        //function for getting ingredients list //
        food.addEventListener('click', function () {
            const callAPI = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food.innerText}`;
            fetch(callAPI)
                .then(response => response.json())
                .then(data => {
                    document.getElementById("get-name").innerText = data.meals[0].strMeal;
                    const ingredientsList = data.meals[0];
                    const newIngredientsList = [];
                    for (let i = 5; i <= 15; i++) {
                        if (ingredientsList[`strIngredient${i}`]) {
                            newIngredientsList.push(
                                `<li class="list-group-item">• ${ingredientsList[`strMeasure${i}`]} ${ingredientsList[`strIngredient${i}`]
                                }</li>`
                            );
                        }
                    }
                    const ingredientList = document.getElementById("ingredient");
                    const li = `
                    ${newIngredientsList.join('')}
                    `
                    ingredientList.innerHTML = li
                    document.getElementById('show-image').src = data.meals[0].strMealThumb;
                })
            document.getElementById('meal-details').classList.remove('d-none');
        })
    }
}

// functions of search button //
function searchBtnAction() {
    const mealDetailsName = document.getElementById('get-name');
    const mealDetailsImage = document.getElementById('show-image');
    const mealDetailsIngredient = document.getElementById('ingredient');

    mealDetailsName.innerHTML = 'Please select an Item for more information';
    mealDetailsImage.src = '';
    mealDetailsIngredient.innerHTML = '';
    getMealList();
}