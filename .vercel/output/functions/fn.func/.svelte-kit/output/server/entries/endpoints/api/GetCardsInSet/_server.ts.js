import { j as json } from "../../../../chunks/index.js";
async function POST({ request }) {
  const req = await request.json();
  const url = "https://api.magicthegathering.io/v1/cards?set=" + req.recomendationSetname + "&pageSize=10";
  const apiResponse = await fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
  const pseudoRec = await apiResponse.json();
  const pseudoRecCards = pseudoRec.cards;
  return json(pseudoRecCards);
}
export {
  POST
};
