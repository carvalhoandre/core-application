import Technology from '../technology/Technology';
import { Nivel } from './Nivel';
import { Type } from './Type';

export default interface Project {
	id: number;
	name: string;
	description: string;
	images: string[];
	type: Type;
	nivel: Nivel;
	emphasis: boolean;
	technologies: Technology[];
  repository: string;
}
