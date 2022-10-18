import Header from "../src/components/Header";
import Link from "next/link";


function Times() {

    return (
        <div>
            <Header />

            <h1>Times</h1>

            <Link href="/">
                <a>Home</a>
            </Link>

        </div>)
}


export default Times