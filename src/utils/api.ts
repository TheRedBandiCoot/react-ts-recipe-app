export async function API_URL(id: string) {
  const URI = `https://api.edamam.com/api/recipes/v2/by-uri?type=public&uri=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${id}&app_id=${
    import.meta.env.VITE_APP_ID
  }&app_key=${import.meta.env.VITE_API_KEY}`;
  const res = await fetch(URI);
  if (!res.ok) throw new Error(`Unable to fetch`);
  return await res.json();
}
