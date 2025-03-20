import Technology from '../technology/Technology'
import { Nivel} from './Nivel'
import { Type} from './Type'


export default interface Project {
    id:           number
    name:         string
    description:  string
    images:       string[]
    type:         Type
    nivel:        Nivel
    repository:   string
    emphasis:     boolean      
    technologies: Technology[]
}
