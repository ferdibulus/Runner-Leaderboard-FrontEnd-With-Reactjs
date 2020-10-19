import axios from 'axios'

const RUNNERS_REST_API_URL = 'http://localhost:8080/runners';

class runnersService {
    getRunners(){
        axios.get(RUNNERS_REST_API_URL);
    }
}

export default new runnersService();