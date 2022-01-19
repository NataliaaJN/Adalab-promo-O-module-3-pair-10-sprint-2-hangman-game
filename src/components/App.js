import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';
import Header from './Header';
import Dummy from './Dummy';

function App() {
  const [lastLetter, setLastLetter] = useState('');
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);

  useEffect(() => {
    callToApi().then((response) => {
      setWord(response);
    });
  }, []);

  const handleInput = (event) => {
    let inputValue = event.target.value;
    setLastLetter(inputValue);
    if (inputValue) {
      inputValue = event.target.value
        .toLocaleLowerCase()
        .match('[A-zÁ-úÄ-üñÑ]');
      if (inputValue) {
        const foundLetter = userLetters.find(
          (letter) => letter === inputValue[0]
        );
        if (!foundLetter) {
          setUserLetters([...userLetters, inputValue[0]]);
        }
      }
    }
  };

  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map((letter, index) => {
      if (userLetters.includes(letter)) {
        return (
          <li key={index} className="letter">
            {letter}
          </li>
        );
      } else {
        return <li key={index} className="letter"></li>;
      }
    });
  };

  const renderErrorLetters = () =>
    userLetters
      .filter((letter) => !word.includes(letter))
      .map((letter, index) => (
        <li key={index} className="letter">
          {letter}
        </li>
      ));

  const numberOfErrors = userLetters.filter(
    (letter) => !word.includes(letter)
  ).length;

  return (
    <div className="page">
      <Header />
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">{renderSolutionLetters()}</ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">{renderErrorLetters()}</ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">
              Escribe una letra:
            </label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              value={lastLetter ? lastLetter : ''}
              onChange={handleInput}
            />
          </form>
        </section>
        <Dummy numberOfErrors={numberOfErrors} />
      </main>
    </div>
  );
}

export default App;
