import axios from 'axios';
const BASE_URL = 'http://65.109.84.169:8089/BeITFlowApi';

export default axios.create({
    baseURL: BASE_URL
});