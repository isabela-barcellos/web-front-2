import ConteudoPrincipal from './Componentes/ConteudoPrincipal/ConteudoPrincipal'
import Rodape from './Componentes/Rodape/Rodape'
import Cabecalho from './Componentes/Cabecalho/Cabecalho'
import FormContato from './Componentes/formContato/FormContato'

function App() {
  

  return (
    <>
     <Cabecalho/>
     <section id = "info">
      <ConteudoPrincipal/>
     </section>
     <FormContato/>
     <Footer/>
     


     
    </>
  )
}

export default App
