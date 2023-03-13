
<script lang="ts">
  	import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import SiteHeader from '../../components/SiteHeader.svelte'
    import LoadingAnimation from '../../components/LoadingAnimation.svelte'
    import CardDetailsPage from '../../components/CardDetailPage.svelte'
    import type { CardType } from "../../../types/card.type";

   export let data:CardType
   let loading = true //will hide/show loading animation

   onMount(async()=>{//get details for the card id (obtained from the page params slug)
    console.log('loading ',loading)
    loading = true
    const res =  await fetch("/api/GetCardDetails", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
            cardId: $page.params.slug
        }),
      });
      const response = await res.json()
      data = response as CardType
      loading = false    
    })

  </script>
 
<SiteHeader/>

<!-- show loading animation while loading -->
{#if loading === true} 
  <div class='padding'>
    <div class="loadingAnimationContainer">
      <LoadingAnimation />
      <div class="loadingText">Loading...</div>
    </div>
  </div>

  <!-- show card details component once data is loaded -->
{:else if  loading === false}
  <CardDetailsPage data = {data}/>
{/if} 

<style>
  .padding{
    padding-top:9%
  }
/* note - in all other instances, the loadingText and loadingAnimationContainer classes
are imported from styles.js (for organization). However, importing them here cause a lag - the styles took a sec
to load and the animation at first would appear without its styles. Defining them here explicitly solves the issue */
.loadingText{
  color: #ababab;
  padding-top: 2%;
  font-weight: 700;
  font-family: "Lucida Grande", monospace !important;
}

.loadingAnimationContainer{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 20px;
}

</style>
  