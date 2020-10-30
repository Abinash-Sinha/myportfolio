import "./App.css";
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import TitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import Skills from "./pages/skills/skills.component";
import Slide from "react-reveal/Slide";
import Experience from "./pages/experience/experience.component";

const App = () => {
	return (
		<div className="App" style={{ position: "relative" }}>
			<MyNavbar />
			<MyCarousal />
			<TitleMessage />
			<div>
				<Parallax
					blur={10}
					bgImage={require("./assets/img/parallax/background2.webp")}
					bgImageAlt=""
					strength={200}
				>
					<div>
						<Container className="container-box rounded">
							<Fade duration={500}>
								<About />
							</Fade>
						</Container>
					</div>
					<div>
						<Container className="container-box rounded">
							<Slide bottom duration={500}>
								<hr />
								<Skills />
							</Slide>
						</Container>
					</div>
					<div>
						<Container className="container-box rounded">
							<Fade duration={500}>
								<hr />

								<Experience />
							</Fade>
						</Container>
					</div>
				</Parallax>
			</div>
		</div>
	);
};

export default App;
