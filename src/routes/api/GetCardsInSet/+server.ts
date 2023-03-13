import { json } from "@sveltejs/kit";
import type { CardType } from "../../../types/card.type";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }: { request: any }) {
  const req = await request.json();
  const url =
    "https://api.magicthegathering.io/v1/cards?set=" +
    req.recomendationSetname +
    "&pageSize=10";

  const apiResponse = await fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const pseudoRec = await apiResponse.json();
  const pseudoRecCards = pseudoRec.cards as CardType[];
  return json(pseudoRecCards);
}
