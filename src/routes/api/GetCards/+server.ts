import { json } from "@sveltejs/kit";
import type { CardType } from "../../../types/card.type";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }: { request: any }) {
  const req = await request.json(); //request contains page num, search terms and search field
  const pageNum = req.count; //page number for pagination
  const nameSearchParam = req.nameSearchParam.trim().replaceAll(" ", "%20"); //remove leading/trailing spaces and replace internal spaces with %20
  const searchType = req.searchType; //the field to search (name or artist) for use in url (if being used to search for filtered results)

  const url =
    "https://api.magicthegathering.io/v1/cards?" +
    searchType +
    "=" +
    nameSearchParam +
    "&page=" +
    pageNum;

  const apiResponse = await fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const allCardsObj = await apiResponse.json();
  const allCards = allCardsObj.cards as CardType[]; //get cards array out of resposne

  return json(allCards);
}
