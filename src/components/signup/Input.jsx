const Input = ({ title, typed, id, value, onChangeEvent }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{title}</label>
      <input
        type={typed}
        id={id}
        value={value}
        onChange={(e) => onChangeEvent(e.target.value)}
        required
      />
    </div>
  );
};
export default Input;
