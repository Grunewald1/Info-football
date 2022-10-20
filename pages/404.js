import Link from "next/link";
import Header from "../src/components/Header";

export default function notfound() {
    return (
        <div>
            <Header></Header>
            <div className="container">

                <h1>404</h1>
                <p>parace que está página não existe!</p>
                
                <div>
                    <div className="button-19">
                        <Link href="/"><a>voltar</a></Link>
                    </div>
                </div>
            </div>
        </div>
    )
};