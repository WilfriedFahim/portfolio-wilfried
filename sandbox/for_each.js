import { skillsMock } from "../sandbox/skills.mock.js";

let groupFrontEnd = [];
let groupBackend = [];
let groupeDesignOutils = [];
let groupSoftSkills = [];

skillsMock.forEach((skill) => {
	if (skill.group === "Frontend") groupFrontEnd.push(skill);
	if (skill.group === "Backend") groupBackend.push(skill);
	if (skill.group === "Design & Outils") groupeDesignOutils.push(skill);
	if (skill.group === "Soft Skills") groupSoftSkills.push(skill);
});
console.log("Frontend :", groupFrontEnd);
console.log("Backend :", groupBackend);
console.log("Design & Outils :", groupeDesignOutils);
console.log("Soft Skills :", groupSoftSkills);
