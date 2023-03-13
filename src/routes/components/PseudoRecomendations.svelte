<script lang="ts">
    export let recomendationSetname:string
    import CardListCard from '../../routes/components/CardListCard.svelte'
    import type {CardType} from '../../types/card.type'
    import { onMount } from 'svelte';
    import LoadingAnimation from './LoadingAnimation.svelte'
	import { loadingText, loadingAnimationContainer } from '../../styles/loadingAnimation';

    let pseudoRecomendations =[] as CardType[]
    let pseudoloading = false
    async function getRecomendations() {
        pseudoloading= true
    const res = await fetch("/api/GetCardsInSet", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
            recomendationSetname: recomendationSetname
        }),
      })
      pseudoloading = false
      pseudoRecomendations= await res.json()

	}

    onMount(async()=>{
        getRecomendations()
    })
</script>
<div class="pseudoRecomendationsContainer">
    <div class="pseudoRecomendationsTitle">Other Cards in This Set</div>

    {#if pseudoloading === true}
        <div class={loadingAnimationContainer}>
        <LoadingAnimation />
        <div class={loadingText}>Loading...</div>
        </div>
    {:else if  pseudoloading === false}    
                {#if pseudoRecomendations !== undefined}
                    <div class="pseudoRecomendations">
                        {#each pseudoRecomendations as pseudoRecomendation}
                            {#if pseudoRecomendation.imageUrl !== undefined}
                                <CardListCard cardName ={pseudoRecomendation.name} cardId={pseudoRecomendation.id} cardImageUrl={pseudoRecomendation.imageUrl}  cardArtist={pseudoRecomendation.artist} cardSubtype={pseudoRecomendation.subtypes} cardColor={pseudoRecomendation.colorIdentity}/>
                            {/if}
                        {/each}
                    </div>
                {/if}
    {/if}
</div>



<style>
        .pseudoRecomendationsContainer{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-top:5%;
            padding-bottom:5%;
        }
        .pseudoRecomendationsTitle{
            font-weight: 700;
            font-family: 'Lucida Grande', monospace !important;
            font-size: 1.25rem;
            color: #A7F2A7;
        }
        .pseudoRecomendations{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
</style>