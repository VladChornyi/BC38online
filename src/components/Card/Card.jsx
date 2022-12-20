const Card = ({ text = 'Hello', href, toDo }) => {
  toDo('Hello');
  return (
    <li>
      <p>{text}</p>
      <a href={href}>{href}</a>
    </li>
  );
};

export default Card;
