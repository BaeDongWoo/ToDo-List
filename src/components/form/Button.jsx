import './Button.css';
const Button = ({ label, className, clickHandler }) => {
  return (
    <button className={className} onClick={() => clickHandler()}>
      {label}
    </button>
  );
};
export default Button;
