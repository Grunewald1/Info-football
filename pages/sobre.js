
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


                <div>
                    <div className="button-19">
                        <Link href="/"><a>voltar</a></Link>
                    </div>
                </div>

            </div>


        </div>)
}


export default Sobre