import axios from 'axios';

export function callShelf(payload) {

}

export function callPostShelfItem(payload) {
    const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
    };

    return axios.post('/api/shelf', payload, config)
        .then(response => response.data)
        .catch((error) => {
            console.log(error);
        })
}

