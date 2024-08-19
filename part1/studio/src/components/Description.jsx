const RecipeAuthor = () => {
  let authorLink = ''; // url here
  let authorPhoto = ''; // photo here
  let authorName = ''; // name here

  return (
    <div className={styles.recipeAuthorBlock}>
      <img src={authorPhoto} alt={authorName} className={styles.imageUpdates} />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}>Blog name</a>
      </div>
    </div>
  );
};
