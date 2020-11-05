import axios from "axios";

export async function get(page, session) {
  const data = await axios
    .get("https://dog.ceo/api/breeds/list/all/")
    .then((res) => res.data);
  return {
    body: { data },
  };
}
