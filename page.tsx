
import Header from "./components/Header.js";
import MainSection from "./components/MainSection.js";
import Footer from "./components/Footer.js";
import About from "./section/About/page.jsx";
import Contact from "./section/Contact/page.jsx";
import Service from "./section/Service/page.jsx"


export default function Home(){
    return(
        <div> <Header/><MainSection/><About/><Service/><Contact/><Footer/>
            <title>Vaniza CH</title>
        </div>
    )
}
