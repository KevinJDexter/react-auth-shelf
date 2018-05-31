import axios from 'axios';

export function getShelfItems(payload) {
    const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
    
      return axios.get('api/shelf', config)
        .then(response => response.data)
        .catch((error) => { throw error; });
}
