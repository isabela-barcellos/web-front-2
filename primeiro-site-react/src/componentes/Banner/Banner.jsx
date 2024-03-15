import './Banner.css'
function Banner(props){
    console.log
    return(
        <header>
            <h1 className="título-principal">{props.textoBanner}</h1>
            <p>Texto do componente</p>
        </header>
    )
}

export default Banner