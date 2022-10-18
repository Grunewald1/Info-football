
import Header from "../src/components/Header";
import Link from "next/link";

function Sobre() {

    return (
        <div>
            <Header />

            <div className="container">
                <h1 className="color-dark">Sobre</h1>
                <p> 
                    aqui agente se preocupa em falar sobre todas as noticias do que acontece no mundo da bola.
                </p>

                <h2>siga agente nas redes socias para acompanhar novidadades</h2> 


                <Link href="/">
                    <div className="button-19">voltar a home </div>
                </Link>

            </div>


        </div>)
}


export default Sobre