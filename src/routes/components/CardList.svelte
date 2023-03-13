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
    let fetchError = false //if true, displays error to user. set to true when api getCards call fails
    let loadingMore = false //used to determine if more cards should load on scrolls

    const getCards = async (searchString:string, searchType:string) => {
      fetchError = false    
      try{
      const res = await fetch("/api/GetCards", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            count: Math.floor(cards.length / 100) + 1 , //page number calculation
            nameSearchParam: searchString, //the user's input in the search bar
            searchType: searchType //search type (artist or card name)
          }),
        })

      const newCards:CardType[] = await res.json()
      //there are two cases for this request - we are loading more results on scroll or we are loading a new set of results from scratch
      if(searchString === lastQueryText){ //if the search string hasnt changed, we know we are loading more cards to an existing request
        cards = [
          ...cards,
          ...newCards
        ];
      }
      else{ //otherwise, the search term was changed and we need to load a new set of results from the first page and get rid of old results
        cards= [...newCards]
      }

      // if we have less than the page size there is no more cards - will use hasMore to show user message indicating end of results
      if (newCards.length < 100){
          hasMore = false
        }
        else{
          hasMore = true //otherwise, we should keep making api call when they scroll to end of current list of results
        }
      loading = false
      loadingMore= false
      }
      catch{ //if there was an error, set  bool that hides/shows the user an error
        loading = false
        loadingMore=false
        fetchError = true    
      }
    }

  onMount(async()=>{ //get list of all cards on mount without any search params
    loading=true
      getCards('', searchTypeVal)
  }) 
    const searchData = (val:string, searchType:string) => {	 //when searching, pass in the search terms entered by user and the search type (name or artist) to the getCards call
      searchTypeVal=searchType
      cards=[] 
      loading=true
      getCards(val, searchType)
      lastQueryText = val
    }

    // @ts-ignore
    const handleChange = (e) => { //when the user has scrolled to the end of the available results, got and fetch more. Pass in search related info (will be blank if not applicable)
      if (e.detail.inView && hasMore && cards.length > 0){
        getCards(lastQueryText, searchTypeVal)
        loadingMore=true
      }
    };

</script>

<main >
  <SiteHeader/>
  <!--search component with search bar and search type toggle (artist or card name) -->
  <Search searchData={searchData} />
  <!-- show loading animation while results are loading (this animation appears on the screen alone on mount) -->
  {#if loading === true}
      <div class={loadingAnimationContainer}>
        <LoadingAnimation />
        <div class={loadingText}>Loading...</div>
      </div>
<!-- otherwise, map each el in the array of cards to their own CardListCard component -->
    {:else if cards !== undefined}
      <div class="cardList">
        {#each cards as card}
          {#if card.imageUrl !== undefined}
            <CardListCard cardName ={card.name} cardId={card.id} cardImageUrl={card.imageUrl} cardArtist={card.artist} cardSubtype={card.subtypes} cardColor={card.colorIdentity}/>
          {/if}
        {/each}
      </div>
  {/if}

  <!-- used for infinite scroll -->
  <div use:inview={{}} on:change={handleChange} />

  <!-- this ainimation appears at bottom of page to indiate additional results are being loaded on scroll -->
  {#if loadingMore === true}
      <div class={loadingAnimationContainer}>
        <LoadingAnimation />
        <div class={loadingText}>Loading...</div>
      </div>
 {/if}

 <!-- if the user has scrolled to the end and there are no more results to fetch, they see this message -->
  {#if !hasMore}
  <div class='viewingAllContainer'>
    <div class="viewingAll">Viewing All Results</div>
  </div>
  {/if}

  <!-- if there was an error when getting cards from api, user is shown this message -->
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