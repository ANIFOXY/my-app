// src/api/axiosData.js
import axios from 'axios';

const API_KEY = '243745ae424d410c9a2437ca8810790b';

export async function axiosData() {
  try {
    const response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error('Failed to fetch data using axios:', error);
    throw error;
  }
}
