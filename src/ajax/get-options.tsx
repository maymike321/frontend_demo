import axios from 'axios';

export function getOptions() {
    return axios.get('http://localhost:8000/options');
}