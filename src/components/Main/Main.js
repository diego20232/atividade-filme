import './main.css'
import HomemAranha from '../imagens/homemaranha.jpg';
import HomemFormiga from '../imagens/formiga.webp';
import AltasAventuras from '../imagens/up.jpg';
import VovozonaFilme from '../imagens/vovozona.webp';
import LaCasa from '../imagens/lacasaa.webp';
import Lupim from '../imagens/luoim.webp';
import Outer from '../imagens/outer.webp';
import Rag from '../imagens/ragnarok.jpg';
import Som from '../imagens/liberdade.jpg';
import Monica from '../imagens/monica.jpg';
import Strange from '../imagens/srange.webp';
import Invisivel from '../imagens/invisvel.jpeg'
import Encanto from '../imagens/encanto.jpeg';
import Filha from '../imagens/a filha do rei.jpg';
import Suru from '../imagens/suru.jpg';
import Filme from  '../Filme/Filme';

function Main () {
    const titulo = [
        {nome: "Homem formiga" , img: HomemFormiga , ano: 1998},
        {nome: "up altas aventuras" , img: AltasAventuras , ano: 2005},
        {nome: "Vovozona 2" , img: VovozonaFilme, ano: 2007},
        {nome: "Som" , img: Som, ano: 2000},
        {nome: "Monica" , img: Monica, ano: 2006}
    ]

    const series = [
    {nome: "La Casa de papel" , img: LaCasa , ano: 2022},
    {nome: "Lupim" , img: Lupim , ano: 2022},
    {nome: "Outer banks" , img: Outer , ano: 2022},
    {nome: "Ragnarok" , img: Rag , ano: 2022},
    {nome: "Strange things" , img: Strange , ano: 2023},
    {nome: "Cidade invisivel" , img: Invisivel , ano: 2020}
    ]
 

    const destaque = [
    {nome: "Homem aranha" , img: HomemAranha , ano: 2000},
    {nome: "Encanto" , img: Encanto , ano: 2008},
    {nome: "A filha do rei" , img: Filha , ano: 1998},
    {nome: " Um Suburbano Sortudo" , img: Suru , ano: 2022}
    ]

    return(
        <main>
            <Filme titulo={"Filmes Destaque"} listaP={destaque}/>
            <Filme titulo={"Filmes"} listaP={titulo}/>
            <Filme titulo={"Series"} listaP={series}/>
        </main>
    )
}

export default Main;