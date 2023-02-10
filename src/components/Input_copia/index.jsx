const Input = ({ label, id, type, error, register }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} {...register(id)} />
      {error ? <p>{error}</p> : null}
    </div>
  );
};

export default Input;