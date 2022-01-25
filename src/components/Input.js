const Input = (props) => {
  const handleChangeInput = (ev) =>
    props.handleInput(ev.target.value);

  return (
    <><label className="title" htmlFor="last-letter">
      Escribe una letra:
    </label><input
        autoComplete="off"
        className="form__input"
        maxLength="1"
        type="text"
        name="last-letter"
        id="last-letter"
        value={props.lastLetter ? props.lastLetter : ""}
        onChange={handleChangeInput} />
    </>
  );
}

export default Input;