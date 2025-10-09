import * as React from 'react'

function Greeting({initialName = ''}) {
  // 🐨 inicialize o estado como o valor do localStorage
  // 💰 window.localStorage.getItem('name') ?? initialName
  const [name, setName] = React.useState( /* verifica se existe algo salvo no localstorage com a chave name 
  caso exista usa esse valor se nao existir usa o valor initialname */
  //() => inicializarvar() 
  () => window.localStorage.getItem('name') ?? initialName
  )
  
  // valor inicial da variavel , "??" operador de coesistencia de valor

// lazy initialaizer =>   quando o valor inicial de uma variavel de estado e FORNECIDO por uma funçao garantimos que esse valor inicial sera atribuido 
// apenas uma vez porem no nosso exemplo aki duas na fase de montagem de componente
  //function inicializarvar() {
    //console.count('Inicializou "name"')
    //return  window.localStorage.getItem('name') ?? initialName 
  //}

    const [count, setCount] = React.useState(0)


  // 🐨 Aqui é onde usamos `React.useEffect`.
  // A função deve armazenar `name` no localStorage.
  // 💰 window.localStorage.setItem('name', name)
   React.useEffect( /* adicionando uma arrow function vazia */() => {window.localStorage.setItem('name',name)
   console.count('Componente foi atualizado !')
  }, /* usando o window para a atribuiçaop do localstore*/ [name]) // vetor de dependencias este useeffect sera executado apenas   

  //so usar o lazy quando realmente nescessario 

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Olá {name}</strong> : 'Por favor, informe seu nome'}
      <br/> <button onClick ={() => setCount(count + 1)}>Contagem: {count}
      </button>
    </div>
  )
}

function Exercicio02() {
  return <Greeting initialName='orozimbo' />
}

export default Exercicio02