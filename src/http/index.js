import HttpUtils from './http'
import api from './api'
class Https {
  login = (parmas = {}) => (HttpUtils.get(api.login,parmas))
}
export default new Https()
