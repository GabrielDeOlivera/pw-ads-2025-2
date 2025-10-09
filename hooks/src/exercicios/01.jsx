import * as React from 'react'

function Greeting({initialName}) {
  // 💣 exclua esta declaração de variável e troque por uma chamada a React.useState
  //const name = ''
  const [name, setName] = React.useState(initialName)

  function handleChange(event) {
    // 🐨 atualize o nome aqui baseado em event.target.value
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Nome: </label>
        {/*em react componente controlado e aquele que tem seu valor sincornizado com a variavel de estado 
        assim quando a variavel de estado ,muda seu valor seu valor, o valor do componente tambem muda o inverso tambem ocorre 
        se o valor do componente muda o valor da variavel de estado tambem e mudado ou alterado 
        no caso abaixo isso e implementado associado o valor do atributo "value" a variavel de estado */}


        <input onChange={handleChange} id="name" value = {name} />
      </form>
      {name ? <strong>Olá{name}</strong> : 'Por favor, informe seu nome'}
    </div>
  )
}

function Exercicio01() {
  return Greeting({initialName: "Turíbio"})
}

export default Exercicio01