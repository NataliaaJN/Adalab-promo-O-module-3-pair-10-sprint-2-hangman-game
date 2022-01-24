const Options = (props) => {
    const handleChangeNewWordInput= (ev)=> {
        props.handleNewWordInput(ev.currentTarget.value)
    };

  return (
    <>
      <form onSubmit={props.handleFormSubmit}>
        <label className="title" htmlFor="word">
          Escribe aquí la palabra que hay que adivinar:
        </label>
        <input
          autoFocus
          autoComplete="off"
          className="form__input"
          maxLength="15"
          type="text"
          id="word"
          name="word"
          onChange={handleChangeNewWordInput}
        />
      </form>
    </>
  );
};

export default Options;
