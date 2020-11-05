import fetch from "cross-fetch";

export async function get(page, session) {
  const r = await fetch("https://dog.ceo/api/breeds/list/all/");
  const data = await r.json();
  return {
    body: { data },
  };
}
