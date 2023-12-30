// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import "./index.css";

export default function App() {
	return (
		<div className="entire">
			<HeaderText />
			<MyPhoto />
			<DevBio />
			<Skillsets />
		</div>
	);
}

function HeaderText() {
	return (
		<>
			<header className="header">
				<title>My Developer Card</title>
				{/* <h1>My Developer Card.</h1> */}
			</header>
		</>
	);
}

function MyPhoto() {
	return (
		<div className="img">
			<img src="/images/IMG_4723.JPG" alt="My Profile Image" />
		</div>
	);
}

function DevBio() {
	return (
		<div className="devBio">
			<h1>Victor Adeshile</h1>
			<p>
				Hi, My name is Victor Adeshile. I am a React Developer and I am
				open for more work opportunities and collaborations with other
				Team members. Looking forward to a patnership.
			</p>
		</div>
	);
}

function Skills(props) {
	return (
		<div>
			{props.name} {props.icon}
		</div>
	);
}

function Skillsets() {
	return (
		<div className="skills">
			<div style={{ backgroundColor: "green" }}>
				<Skills name="JavaScript " icon="💪" />
			</div>
			<div style={{ backgroundColor: "purple" }}>
				<Skills name="HTML + CSS" icon="👌" />
			</div>
			<div style={{ backgroundColor: "blue" }}>
				<Skills name="GitHub" icon="👍" />
			</div>
			<div style={{ backgroundColor: "pink" }}>
				<Skills name="MongoDB" icon="👶" />
			</div>
			<div style={{ backgroundColor: "brown" }}>
				<Skills name="React" icon="👊" />
			</div>
			<div style={{ backgroundColor: "yellow" }}>
				<Skills name="MySQL" icon="👍" />
			</div>
			<div style={{ backgroundColor: "aqua" }}>
				<Skills name="WordPress" icon="🤖" />
			</div>
			<Skills name="HTML + CSS" icon="👌" />
		</div>
	);
}
