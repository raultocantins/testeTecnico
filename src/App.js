import "./App.css";

//template imports

import Appbar from "./template/appbar/Appbar";
import SectionOne from "./template/sectionOne/SectionOne";
import SectionTwo from "./template/sectionTwo/SectionTwo";
import SectionThird from "./template/sectionThird/SectionThird";
import SectionFourth from "./template/sectionFourth/SectionFourth";
import SectionFifth from "./template/sectionFifth/SectionFifth";
import SectionSeventh from "./template/sectionSeventh/SectionSeventh";
import SectionEigth from './template/sectionEigth/SectionEigth'
import Contact from './template/contact/Contact'
import Footer from './template/footer/Footer'
function App() {
  return (
    <div className="App">
      <div className="background">
        <Appbar />
        <SectionOne />
      </div>
      <SectionTwo />
      <SectionThird />
      <SectionFourth />
      <SectionFifth />
      <SectionSeventh />
      <SectionEigth/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
