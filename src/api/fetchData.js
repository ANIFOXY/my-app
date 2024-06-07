// src/api/fetchData.js
export async function fetchData() {
    try {
      const response = await fetch('https://api.publicapis.org/entries');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Data fetched from API:', data);
      return data.entries;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }
  