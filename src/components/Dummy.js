import '../styles/components/dummy.scss'

const Dummy = (props) => {
  return <section className={'dummy error-' + props.numberOfErrors}>
    <span className="error-13 eye"></span>
    <span className="error-12 eye"></span>
    <span className="error-11 line"></span>
    <span className="error-10 line"></span>
    <span className="error-9 line"></span>
    <span className="error-8 line"></span>
    <span className="error-7 line"></span>
    <span className="error-6 head"></span>
    <span className="error-5 line"></span>
    <span className="error-4 line"></span>
    <span className="error-3 line"></span>
    <span className="error-2 line"></span>
    <span className="error-2 line"></span>
    <span className="error-1 line"></span>
  </section>
}

export default Dummy;


// Antes de continuar vamos a pensar un poco. Para hacer la funcionaldad del muñeco dijimos que teníamos que:
// Comparar el string word con el array userLetters para obtener el número de letras falladas:
// Si filtramos las letras del array userLetters comprobando si cada letra está incluida en word obtendremos las letras falladas en un nuevo array.
// La longitud de este array retornado por el filter es el número de errores.
// Estos cálculos son la lógica del juego, la inteligencia, es decir, los cálculos que hacemos para que el código cumpla con las reglas del juego. A estas funcionalidades también se le llama lógica de negocio.
// Una vez tenemos el número de errores solo tenemos que pintarlo para sustituir el 0 de la clase css <section className="dummy error-0">.
// Esta parte del código la llamamos vista o la interfaz, porque es lo que la usuaria ve y usa.
// Esta parte del código es más "tonta" porque no decide nada, solo pinta las cosas que la lógica de negocio le dice que pinte.
// Para realizar este ejercicio queremos:
// Dejar en el componente App el código de la lógica de negocio, es decir, todo o casi todo el código JS que va antes del retorno. Lo queremos hacer así para que la lógica de negocio esté en el componente App que es el más listo de todos, el que tiene todo el conocimiento sobre cómo debe funcionar el juego.
// Mover a un componente la vista o interfaz del juego, es decir el HTML, cuya única responsabilidad es pintar los datos bien para que los vea la usuaria.
// Por todo esto:
// Cread un componente llamado Dummy.js.
// Meted en este componente el último <section className="dummy error-0"> del HTML.
// Este componente debe recibir una prop llamada numberOfErrors de tipo number. Con esta prop debéis pintar la clase error-0, error-1...
// El componente App debe importar y usar este componente pasándole el número de errores que ha cometido la jugadora.
// Y como lo que estamos haciendo es refactorizar, si al finalizar todos los cambios el juego sigue funcionando bien y el muñeco se pinta bien, es que lo habéis hecho todo fetén.
