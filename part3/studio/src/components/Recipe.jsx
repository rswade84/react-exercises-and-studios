import { useState } from 'react';

const RecipeAuthor = () => {
  let authorLink =
    'https://www.ambitiouskitchen.com/white-chocolate-blueberry-coconut-oatmeal-cookies/';
  let authorPhoto =
    'https://www.ambitiouskitchen.com/wp-content/uploads/2020/12/ak-mini-bio-2a-1-708x515.jpg';
  let authorName = 'Monique Volz';

  return (
    <div>
      <img
        src={authorPhoto}
        alt="Blueberry White Chocolate Oatmeal Cookies"
        style={{ objectFit: 'contain', borderRadius: '50%' }}
        width="200px"
      />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}></a>
      </div>
    </div>
  );
};

const RecipeIngredients = () => {
  const ingredients = [
    'Flour',
    'Eggs',
    'Chocolate Chips',
    'Blueberries',
    'Sugar',
  ];

  let ingredientListItems = ingredients.map((ingredient, index) => {
    return <li key={index}>{ingredient}</li>;
  });

  return (
    <div>
      <h3>Recipe Ingredients</h3>
      <ul>{ingredientListItems}</ul>
    </div>
  );
};

const RecipeDescription = () => {
  return (
    <div>
      <div>
        <h1></h1>
        <p></p>
      </div>
      <div className="recipePhotoBlock">
        <RecipeIngredients />
        <RecipeAuthor />
      </div>
    </div>
  );
};

const RecipePhoto = () => {
  return <img src="" alt="" className="imageUpdates" />;
};

export default function RecipeDisplay() {
  return (
    <div className="recipePhotoBlock">
      <RecipePhoto />
      <div>
        <RecipeDescription />
      </div>
    </div>
  );
}
