import "./css/index.css";
import NavLink from "./NavLink";
import RowArticles from "./RowArticles";
import ColumnArticles from "./ColumnArticles";
import MyColour from "./MyColour";
import YourColour from "./YourColour";

function App() {
	return (
		<>
			<header id="top" className="banner">
				<h1>Sasha Windred: User Manual</h1>
				<nav>
					<NavLink
						link="#myStyle"
						classes="nav-a-bubble"
						text="My Style"
					/>
					<NavLink
						link="#myValues"
						classes="nav-a-bubble"
						text="My Values"
					/>
					<NavLink
						link="#myHelp"
						classes="nav-a-bubble"
						text="How to Help"
					/>
					<NavLink
						link="#myCommunication"
						classes="nav-a-bubble"
						text="Communication"
					/>
					<NavLink
						link="#myIrks"
						classes="nav-a-bubble"
						text="No Patience"
					/>
					<NavLink
						link="#myMisunderstandings"
						classes="nav-a-bubble"
						text="Misunderstandings"
					/>
					<NavLink
						link="#colours"
						classes="nav-a-bubble"
						text="Favourite Colours"
					/>
				</nav>
			</header>
			<main>
				<RowArticles />
				<ColumnArticles />
				<section id="colours" className="coloursWrap">
					<MyColour />
					<YourColour />
				</section>
			</main>
			<footer className="banner">
				<p className="footer-p">Sasha Windred</p>
				<NavLink link="#top" classes="footer-a" text="Return to Top" />
			</footer>
		</>
	);
}

export default App;
