// src/api/axiosData.js
import axios from 'axios';

export async function axiosData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch data using axios:', error);
    throw error;
  }
}
