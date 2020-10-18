import axios from 'axios'

const RUNNERS_REST_API_URL = 'http://localhoast:8080';

class runnersService {
    getRunners(){
        axios.get(RUNNERS_REST_API_URL);
    }
}

export default new runnersService();