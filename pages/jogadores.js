import Header from "../src/components/Header";

import Link from "next/link";



function Jogadores() {
    return (
        <div>
            <Header />

            <h1>Jogadores</h1>

            <Link href="/">
                <a>voltar a home </a>
            </Link>

        </div>)
}
export default Jogadores

