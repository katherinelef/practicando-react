function Cabecera(props) {
    const titulo = 'Saludo';
  
    return (
      <div style={{ borderColor: 'red' }}>
        <h2>{titulo}</h2>
        <p>
          Hola <b>{props.nombre}</b>.<br />
          Un link? <br />
          <a href="http://laboratoria.la">Laboratoria</a>
        </p>
      </div>
    )
  }
  
  ReactDOM.render(
    <Cabecera nombre="Mundo" />,
    document.getElementById('cabecera')
  );