// src/api/fetchData.js

const API_KEY = '243745ae424d410c9a2437ca8810790b';

export async function fetchData() {
    try {
      const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Data fetched from API:', data);
      return data.results;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }
  