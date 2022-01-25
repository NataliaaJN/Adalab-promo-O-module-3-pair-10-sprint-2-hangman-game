import Input from "./Input";


const Form = (props) => {
  return (
    <form className="form">
      <Input lastLetter={props.lastLetter} handleInput={props.handleInput} />
    </form>
  )
}

export default Form;