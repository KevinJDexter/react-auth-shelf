import axios from 'axios';

export function callShelf(payload) {

}

export function getUsers() {
    return axios.get('/api/shelf/count')
        .then((response) => response.data)
        .catch((error) => { throw error; });
}