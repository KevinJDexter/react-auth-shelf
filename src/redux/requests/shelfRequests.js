import axios from 'axios';

export function getShelfItems() {
    const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
    
      return axios.get('api/shelf', config)
        .then(response => response.data)
        .catch((error) => { throw error; });
}

export function deleteShelfItem(id) {
  const config = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  };

  return axios.delete(`api/shelf/${id}`, config)
    .then(response => console.log(response))
    .catch((error) => { throw error; });
}

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

