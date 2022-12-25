import './Card.css';

export const Card = ({ text = 'Hello', href, toDo }) => {
  return (
    <li className="item">
      <p>{text}</p>
      <a href={href}>{href}</a>
    </li>
  );
};
