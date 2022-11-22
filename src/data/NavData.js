class NavElement {
	constructor(href, content) {
		this.href = href;
		this.content = content;
	}
}

const navArray = [];

const myStyle = new NavElement("#myStyle", "My Style");
navArray.push(myStyle);

const myValues = new NavElement("#myValues", "My Values");
navArray.push(myValues);

const myHelp = new NavElement("#myHelp", "How to Help");
navArray.push(myHelp);

const myCommunication = new NavElement("#myCommunication", "Communication");
navArray.push(myCommunication);

const myIrks = new NavElement("#myIrks", "No Patience");
navArray.push(myIrks);

const myMisunderstandings = new NavElement(
	"#myMisunderstandings",
	"Misunderstandings"
);
navArray.push(myMisunderstandings);

const colours = new NavElement("#colours", "Favourite Colours");
navArray.push(colours);

export default navArray;
