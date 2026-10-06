const API_URL =
  import.meta.env.VITE_API_URL ??
  "https://script.google.com/macros/s/AKfycbyUFxLecmse-4NnC5ZCh0ZbYfkU3axlyhoFP02MxQECQb0xXtwZKXPOVGGfkD8oAWvbJQ/exec";

// signal permite cancelar el request si el componente se desmonta
export const fetchItems = async (signal) => {
  const response = await fetch(API_URL, { signal });
  if (!response.ok) throw new Error(`Failed to fetch items (${response.status})`);
  return response.json();
};