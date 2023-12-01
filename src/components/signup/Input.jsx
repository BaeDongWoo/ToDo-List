const Input = ({ title, typed, className, value, onChangeEvent }) => {
  return (
    <div className="form-group">
      <label htmlFor={className}>{title}</label>
      <input
        type={typed}
        className={className}
        value={value}
        onChange={(e) => onChangeEvent(e.target.value)}
        required
      />
    </div>
  );
};
export default Input;
