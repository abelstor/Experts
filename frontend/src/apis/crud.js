import axios from 'axios';

const baseUrl = 'http://localhost:5000/experts';

export const searchExperts = (location, callback) => {
    axios.get(`${baseUrl}/search/${location}`).then((res) => {
        callback(res.data);
    });
}

export const addExpert = (expert, callback) => {
    axios.post(`${baseUrl}/${expert.id}`, expert).then((res) => {
        callback(res.data);
    }).catch((error) => {
        callback(error);
    });
}