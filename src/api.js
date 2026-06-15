export const fetchItems = async () => {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbyUFxLecmse-4NnC5ZCh0ZbYfkU3axlyhoFP02MxQECQb0xXtwZKXPOVGGfkD8oAWvbJQ/exec"
  );

  if (!response.ok) throw new Error("Failed to fetch items");
  return response.json();
};
