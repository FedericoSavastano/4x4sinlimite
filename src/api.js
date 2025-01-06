export const fetchItems = async () => {
    const response = await fetch('https://script.google.com/macros/s/AKfycbxRHRo6mnlfFGA4wQzbqo8GvCLtZfIV5HmGQzXFz-JIkeh4JgTngb2dMgm1T7kWiqH0Og/exec');
    if (!response.ok) throw new Error('Failed to fetch items');
    return response.json();
  };
  

 