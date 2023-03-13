import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }: { request: any }) {
  const req = await request.json();
  const pageNum = req.count;
  const nameSearchParam = req.nameSearchParam.trim().replaceAll(" ", "%20");
  const searchType = req.searchType.trim();
  console.log({
    searchType,
  });

  const url =
    "https://api.magicthegathering.io/v1/cards?" +
    searchType +
    "=" +
    nameSearchParam +
    "&page=" +
    pageNum;

  console.log("url ", url);
  const apiResponse = await fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const allCardsObj = await apiResponse.json();
  const allCards = allCardsObj.cards;
  console.log("cards returned from api ", allCards[0].name);
  console.log("cards returned from api ", allCards[allCards.length - 1].name);

  console.log("num cards returned from api ", allCards.length);

  return json(allCards);
}
