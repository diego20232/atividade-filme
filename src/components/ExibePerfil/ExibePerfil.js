import './exibeperfil.css'
function ExibePerfil ({img, ano, nome, destaque}) {
    return (
        <div>
         <img className="imgg" src={img} alt={nome}/>
         <h1 className='nome'>{nome}</h1>
         <p> Ano: {ano}</p>
         <img className= "img-desataque" src={destaque}/>
        </div>
    )
}

export default ExibePerfil;