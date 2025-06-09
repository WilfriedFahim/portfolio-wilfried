// types/skill.types.ts

import { IconType } from "react-icons"; //Typages pour les icônes

export interface SkillType {
	label: string;
	group: string;
	icon: IconType;
	color: string;
	level: number; 
	description: string;
}

