export default function NavLink(props) {
	return (
		<a href={props.link} className={props.classes}>
			{props.text}
		</a>
	);
}
