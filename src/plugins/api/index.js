import axios from "axios";
import Auth from './resources/auth'
import Exercise from './resources/exercise'
import Level from './resources/levels'

export default {
  install: (Vue, options) => {
    axios.defaults.baseURL = options.baseURL

    Vue.prototype.$api = {
      auth: new Auth(axios),
      exercises: new Exercise(axios),
      levels: new Level(axios)
    }
  }
}