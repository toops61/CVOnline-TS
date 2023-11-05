import { Link, Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { updateGeneralBooleans } from "./redux/generalBooleansSlice";
import Home from "./pages/Home";
import SoundEngineer from "./pages/SoundEngineer";
import RadioEngineer from "./pages/RadioEngineer";
import Seipra from "./pages/Seipra";
import Projects from "./pages/Projects/Projects";
import Imc from "./pages/Projects/Imc";
import WikiApp from "./pages/Projects/WikiApp";
import Cookies from "./pages/Projects/Cookies";
import AppMeteo from "./pages/Projects/AppMeteo";
import CouleursJS from "./pages/Projects/CouleursJS";
import Pomodoro from "./pages/Projects/Pomodoro";
import Formulaire from "./pages/Projects/Formulaire";
import Memory from "./pages/Projects/Memory";
import Scroll from "./pages/Projects/Scroll";
import Slider from "./pages/Projects/Slider";
import Password from "./pages/Projects/Password";
import Filter from "./pages/Projects/Filter";
import VideoPlayer from "./pages/Projects/VideoPlayer";
import Morpion from "./pages/Projects/Morpion";
import Particules from "./pages/Projects/Particules";
import Animate from "./pages/Projects/Animate";
import Typing from "./pages/Projects/Typing";
import Calculator from "./pages/Projects/Calculator";
import AudioPlayer from "./pages/Projects/AudioPlayer";
import Quizz from "./pages/Projects/Quizz";
import PrimeNumbers from "./pages/PersoProjects/PrimeNumbers";
import NasaPictures from "./pages/PersoProjects/NasaPictures";
import Converter from "./pages/PersoProjects/Converter";
import CountryFlags from "./pages/PersoProjects/CountryFlags";
import BooksSearch from "./pages/PersoProjects/BooksSearch";

function App() {
  const dark = useAppSelector(state => state.generalBooleansSlice.darkMode);

  const dispatch = useAppDispatch();

  const switchMode = () => {
    dispatch(updateGeneralBooleans({darkMode:!dark}));
  }

  return (
      <div className={dark ? "App dark" : "App"}>
        <Link className="back" to="/"></Link>
        <div className="button-container">
          <button className="switch-button" onClick={switchMode}></button>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/soundEngineer" element={<SoundEngineer />} />
          <Route path="/radioEngineer" element={<RadioEngineer />} />
          <Route path="/seipra" element={<Seipra />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Imc" element={<Imc />} />
          <Route path="/Quizz" element={<Quizz />} />
          <Route path="/WikiApp" element={<WikiApp />} />
          <Route path="/Cookies" element={<Cookies />} />
          <Route path="/AppMeteo" element={<AppMeteo />} />
          <Route path="/CouleursJS" element={<CouleursJS />} />
          <Route path="/Pomodoro" element={<Pomodoro />} />
          <Route path="/Formulaire" element={<Formulaire />} />
          <Route path="/Memory" element={<Memory />} />
          <Route path="/Scroll" element={<Scroll />} />
          <Route path="/Slider" element={<Slider />} />
          <Route path="/Password" element={<Password />} />
          <Route path="/Filter" element={<Filter />} />
          <Route path="/VideoPlayer" element={<VideoPlayer />} />
          <Route path="/Morpion" element={<Morpion />} />
          <Route path="/Particules" element={<Particules />} />
          <Route path="/Animate" element={<Animate />} />
          <Route path="/Typing" element={<Typing />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/AudioPlayer" element={<AudioPlayer />} />
          <Route path="/Prime" element={<PrimeNumbers />} />
          <Route path="/Nasa" element={<NasaPictures />} />
          <Route path="/Converter" element={<Converter />} />
          <Route path="/CountryFlags" element={<CountryFlags />} />
          <Route path="/BooksSearch" element={<BooksSearch />} />
        </Routes>
      </div>
  );
}

export default App
