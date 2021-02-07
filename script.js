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
                data.meals.forEach(meal => {
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
            } else {
                mealList.innerHTML = "No Mill found as per your request. Sorry!!"
                mealList.classList.add('noResult');
            }

        });
}

function ingredientsOfMeal() {
    const mealIngredients = document.querySelectorAll(".meal-item");
    for (let i = 0; i < mealIngredients.length; i++) {
        const food = mealIngredients[i];
        food.addEventListener('click', function () {
            const APIurl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food.innerText}`;
            const ingredient = document.getElementById('ingredient');
            fetch(APIurl)
                .then(response => response.json())
                .then(data => {
                    document.getElementById("get-name").innerText = data.meals[0].strMeal;

                    const listItem = document.createElement('li');
                    listItem.innerText = data.meals[0].strIngredient1;
                    listItem.innerText += data.meals[0].strIngredient2;
                    listItem.innerText += data.meals[0].strIngredient3;
                    ingredient.appendChild(listItem);

                    document.getElementById('show-image').src = data.meals[0].strMealThumb;
                })
            document.getElementById('meal-details').classList.remove('d-none');
        })
    }
}