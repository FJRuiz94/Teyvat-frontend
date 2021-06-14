import axios from 'axios'
import Character from './resources/characters'
import Build from './resources/builds'
import Artifact from './resources/artifacts'


export default {
    install: (Vue, options) => {
        axios.defaults.baseURL = options.baseURL
        
        Vue.prototype.$api = {
            characters: new Character(axios),
            builds: new Build(axios),
            artifacts: new Artifact(axios)
        }
    }
}