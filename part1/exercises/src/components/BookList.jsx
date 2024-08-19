export default function BookList() {
  let pageTitle = 'My Favorite Books';
  let book1 = 'https://m.media-amazon.com/images/I/81utljGNBJL._SL1500_.jpg';
  let book2 = 'https://m.media-amazon.com/images/I/61AxelCgTUL._SL1360_.jpg';
  let book3 = 'https://m.media-amazon.com/images/I/71Q0PcxtLWL._SL1360_.jpg';

  return (
    <div>
      <h3>{pageTitle}</h3>
      <img src={book1} alt="The Last Punisher" />
      <img src={book2} alt="Leave No Man Behind" />
      <img src={book3} alt="Swift Sword" />
    </div>
  );
}
