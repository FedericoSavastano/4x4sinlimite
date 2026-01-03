export const fetchItems = async () => {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbwjpcn06d0ZO1nFLCrJqT9vyOiOkH4Pq_6SVs6MjlLf3KQMv1G9XUVjJ9ETQCFQ8mb1vA/exec"
  );

  if (!response.ok) throw new Error("Failed to fetch items");
  return response.json();
};
