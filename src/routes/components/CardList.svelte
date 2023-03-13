<script lang="ts">
    import SiteHeader from './SiteHeader.svelte'
    import LoadingAnimation from './LoadingAnimation.svelte'
    import { onMount } from 'svelte';
    import CardListCard from './CardListCard.svelte'
    import { inview } from 'svelte-inview';
    import Search from './Search.svelte'
    import type { CardType } from "../../types/card.type";
    import { loadingText,loadingAnimationContainer  } from '../../styles/loadingAnimation';

    let loading:boolean; // used to hide/show loading ainimation
    let cards = [] as CardType[]; //contains all cards to be displayed
    let lastQueryText = '' //saves the last search term entered - used to detect a change and trigger api call for new filtered data
    let searchTypeVal = 'name' //type is name or artist
    let hasMore = true; //checks if there is more data to show when infinite scroling
    let fetchError = false
    let loadingMore = false

    const getCards = async (searchString:string, searchType:string) => {
      fetchError = false    
      try{
      const res = await fetch("/api/GetCards", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            count: Math.floor(cards.length / 100) + 1 ,
            nameSearchParam: searchString ,
            searchType: searchType
          }),
        })

      const newCards:CardType[] = await res.json()
      if(searchString === lastQueryText){
        cards = [
          ...cards,
          ...newCards
        ];
      }
      else{
        cards= [...newCards]
      }

      // if we have less than the page size there is no more cards
      if (newCards.length < 100){
          hasMore = false
        }
        else{
          hasMore = true
        }
      loading = false
      loadingMore= false
      }
      catch{
        loading = false
        loadingMore=false
        fetchError = true    
      }
    }

  onMount(async()=>{
    loading=true
      getCards('', searchTypeVal)
  }) 
    const searchData = (val:string, searchType:string) => {	
      searchTypeVal=searchType
      cards=[] 
      loading=true
      getCards(val, searchType)
      lastQueryText = val
    }

    // @ts-ignore
    const handleChange = (e) => {
      if (e.detail.inView && hasMore && cards.length > 0){
        getCards(lastQueryText, searchTypeVal)
        loadingMore=true
      }
    };

</script>

<main >
  <SiteHeader/>
  <Search searchData={searchData} />
  {#if loading === true}
      <div class={loadingAnimationContainer}>
        <LoadingAnimation />
        <div class={loadingText}>Loading...</div>
      </div>

    {:else if cards !== undefined}
      <div class="cardList">
        {#each cards as card}
          {#if card.imageUrl !== undefined}
            <CardListCard cardName ={card.name} cardId={card.id} cardImageUrl={card.imageUrl} cardArtist={card.artist} cardSubtype={card.subtypes} cardColor={card.colorIdentity}/>
          {/if}
        {/each}
      </div>
  {/if}

  <div use:inview={{}} on:change={handleChange} />

  {#if loadingMore === true}
      <div class={loadingAnimationContainer}>
        <LoadingAnimation />
        <div class={loadingText}>Loading...</div>
      </div>
 {/if}

  {#if !hasMore}
  <div class='viewingAllContainer'>
    <div class="viewingAll">Viewing All Results</div>
  </div>
  {/if}

  {#if fetchError}
  <div class='errorContainer'>
    <div class="error">Sorry, we couldn't retieve any data. Please try another search term or try refreshing the page.</div>
  </div>
  {/if}


</main>

    <style>
      .cardList{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
      }
      .viewingAllContainer{
        display: flex;
        align-items: center;
        justify-content: center;
        width:100%;
        padding-top:1%
      }
      .viewingAll{
        color: #A7F2A7;
        font-weight: 700;
        font-size:1.5rem;
        font-family: 'Lucida Grande', monospace !important;
      }
      .errorContainer{
        display: flex;
        align-items: center;
        justify-content: center;
        width:100%;
        padding-top:1%
      }
      .error{
        color: #A7F2A7;
        font-weight: 700;
        font-size:1.5rem;
        font-family: 'Lucida Grande', monospace !important;
      }
    </style>