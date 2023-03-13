<script lang="ts">
    import { createEventDispatcher } from "svelte";
  
    const dispatch = createEventDispatcher();
  
    function closeDetails() {
      dispatch("closeDetails");
    }
  
    export let cardId: string;
  
    async function getCardDetails(cardId:string): Promise<any>  {
       // console.log('cardId ',cardId)
	    try {
      const res = await fetch("/api/GetCardDetails", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
            cardId: cardId
          //cardId:  'a69b404f-144a-5317-b10e-7d9dce135b24'       
        }),
      });
	  const cardDetails = await res.json();
     // console.log('cardDetails ',cardDetails.card)
	  return cardDetails
	  
    } catch (e: any) {
		throw new Error(e);
    }
	}
    let cardDetails = getCardDetails(cardId);
  </script>
  
  <div class="m-2 border border-gray-400 rounded-lg p-4">
    {#await cardDetails then cardDetail}
    <button on:click={closeDetails}>X</button>
      <p class="font-semibold">Mana cost {cardDetail.card.manaCost}</p>
     
    {/await}
  </div>