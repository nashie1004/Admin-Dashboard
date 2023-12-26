import axios from 'axios';

// Create an instance of Axios with custom configuration
const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_SERVER_PORT, // Set a base URL for all requests
  timeout: 10000, // Set a timeout for requests (in milliseconds)
});

export class DashboardService{
    name: string;

    constructor() {
        this.name = '';
    }
}