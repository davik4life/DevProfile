// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import "./index.css";
// import the JSON Data
import { skillSetsData } from "./data.js";

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

function Skills({ skillsObj }) {
	return (
		<div style={{ backgroundColor: skillsObj.skillsColor }}>
			{skillsObj.skillName} {skillsObj.emoji}
		</div>
	);
}

function Skillsets() {
	return (
		<div className="skills">
			{skillSetsData.map((skill) => (
				<Skills skillsObj={skill} key={skill.skillName} />
			))}
			{/* This was the old implementation during version 1 */}
			{/* <Skills name="JavaScript " icon="💪" color="skyblue" />
			<Skills name="HTML + CSS" icon="👌" color="purple" />
			<Skills name="GitHub" icon="👍" color="blue" />
			<Skills name="MongoDB" icon="👶" color="pink" />
			<Skills name="React" icon="👊" color="orange" />
			<Skills name="MySQL" icon="👍" color="yellow" />
			<Skills name="WordPress" icon="🤖" color="aqua" />
			<Skills name="HTML + CSS" icon="👌" color="violet" /> */}
		</div>
	);
}

// Old way I implemented the color

// function Skillsets() {
// 	return (
// 		< className="skills">
//       <div style={{ backgroundColor: "grey" }}>
//         <Skills name="HTML + CSS" icon="👌" />
//       </div>
// 			<div style={{ backgroundColor: "purple" }}>
// 				<Skills name="Svelte" icon="👌" />
// 			</div>
// 			<div style={{ backgroundColor: "red" }}>
// 				<Skills name="GitHub" icon="👌" />
// 			</div>
// 			<div style={{ backgroundColor: "pink" }}>
// 				<Skills name="MongoDB" icon="👶" />
// 			</div>
// 			<div style={{ backgroundColor: "brown" }}>
// 				<Skills name="React" icon="👊" />
// 			</div>
// 			<div style={{ backgroundColor: "yellow" }}>
// 				<Skills name="MySQL" icon="👍" />
// 			</div>
// 			<div style={{ backgroundColor: "aqua" }}>
// 				<Skills name="WordPress" icon="🤖" />
// 			</div>
// 			<div style={{ backgroundColor: "violet" }}>
// 				<Skills name="Docker" icon="🤖" />
// 			</div>
// 		</div>
// 	);
// }
