const proxyUrl = 'https://api.allorigins.win/get?url=';
const apiUrl = 'https://cdn.drcode.ai/interview-materials/products.json';

// Function to fetch products
export const fetchProducts = async () => {
  try {
    const response = await fetch(`${proxyUrl}${encodeURIComponent(apiUrl)}`);
    
    // Check if response is okay
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    
    // Log the raw fetched data
    console.log('Raw fetched data:', data);

    // AllOrigins wraps the actual data in a "contents" field, we need to parse it
    const parsedData = JSON.parse(data.contents);

    // Ensure the data is an array
    if (!Array.isArray(parsedData)) {
      console.log('Parsed data:', parsedData); // Log the parsed data
      throw new Error('Fetched data is not an array');
    }

    return parsedData;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};


