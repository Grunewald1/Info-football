import Header from "../src/components/Header";

import Link from "next/link";



function Jogadores() {
    return (
        <div>
            <Header />

            <div className="container">
                <h1>Jogadores</h1>

                <Link href="/">
                    <div>
                        <div className="button-19">
                                voltar
                        </div>
                    </div>
                </Link>

            </div>

        </div>)
}
export default Jogadores

