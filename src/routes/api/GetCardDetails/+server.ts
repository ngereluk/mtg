import { json } from "@sveltejs/kit";
import type { CardType } from "../../../types/card.type";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }: { request: any }) {
  const req = await request.json(); //req contains the card id
  const url = "https://api.magicthegathering.io/v1/cards/" + req.cardId; //get the details for the requested card id
  const apiResponse = await fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const cardDetailsObj = await apiResponse.json();
  const cardDetails = cardDetailsObj.card as CardType; //extract card details from response and type it
  return json(cardDetails);
}
