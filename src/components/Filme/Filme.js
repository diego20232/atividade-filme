import ExibePerfil from '../ExibePerfil/ExibePerfil';


function Filme ({titulo, listaP}){
    return (
      <>
      <h1 id="font">{titulo}</h1>
      
   <div className='div-exibe'>
      {listaP.map((p) =>
      <ExibePerfil nome={p.nome} img={p.img} ano={p.ano}/>
      )}
   </div>
      </>
    )
}
export default Filme;