import styles from './Ingredients.module.css';

export default function RecipeIngredients() {
  let ingredients = [
    '1 cup olive oil',
    '1 onion, chopped',
    '2 cloves garlic, minced',
    '1 cup frozen chopped broccoli, thawed',
    '2 cups frozen corn kernels',
  ];
  return (
    <div>
      <h3>Recipe Ingredients</h3>
      <ul className={styles.ingredientList}>
        <li>{ingredients[0]}</li>
        <li>{ingredients[1]}</li>
        <li>{ingredients[2]}</li>
        <li>{ingredients[3]}</li>
        <li>{ingredients[4]}</li>
        <li>{ingredients[5]}</li>
      </ul>
    </div>
  );
}
