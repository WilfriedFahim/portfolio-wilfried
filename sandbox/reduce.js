import { skillsMock } from "../sandbox/skills.mock.js";

const grouped = skillsMock.reduce((acc, skill) => {
	acc[skill.group] = acc[skill.group] || [];
	acc[skill.group].push(skill);
	return acc;
}, {});

console.log(grouped);
// grouped = { "Frontend": [ ... ], "Backend": [ ... ], ... }
