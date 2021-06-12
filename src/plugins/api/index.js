import axios from 'axios'
import Character from './resources/characters'


export default {
    install: (Vue, options) => {
        axios.defaults.baseURL = options.baseURL
        
        Vue.prototype.$api = {
            characters: new Character(axios)
        }
    }
}