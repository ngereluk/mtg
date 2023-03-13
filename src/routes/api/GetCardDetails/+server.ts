import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }: { request: any }) {
  const req = await request.json();
  const url = "https://api.magicthegathering.io/v1/cards/" + req.cardId;
  const apiResponse = await fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const cardDetails = await apiResponse.json();
  return json(cardDetails);
}
