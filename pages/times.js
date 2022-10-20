import Header from "../src/components/Header";
import Link from "next/link";


function Times() {

    return (
        <div>
            <Header />

            <div className="container">

                <h1>Times</h1>

                <div>
                    <div className="button-19">
                        <Link href="/"><a>voltar</a></Link>
                    </div>
                </div>


            </div>
        </div>)

}


export default Times