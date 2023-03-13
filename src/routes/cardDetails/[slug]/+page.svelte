
<script lang="ts">
  	import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import SiteHeader from '../../components/SiteHeader.svelte'
    import LoadingAnimation from '../../components/LoadingAnimation.svelte'
    import CardDetailsPage from '../../components/CardDetailPage.svelte'
    import { loadingText,loadingAnimationContainer  } from '../../../styles/loadingAnimation';

  export  let data ={
      manaCost: 0,
      name: '',
      cmc: 0,
      artist: '',
      subtype: [''],
      colorIdentity:  [''],
      colors:  [''],
      setName: '',
      setCode:'',
      type: '',
      types:  [''],
      rarity: '',
      text: '',
      flavor: '',
      number: '',
      layout: '',
      imageUrl: '',
      id:'',
      loading:false
    }

   onMount(async()=>{
    //@ts-ignore
    data.loading = true
    const res =  await fetch("/api/GetCardDetails", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
            cardId: $page.params.slug
        }),
      });
      const details = await res.json()
      data = { 
                manaCost: details.card.manaCost,
                name: details.card.name,
                cmc: details.card.cmc,
                artist: details.card.artist,
                subtype: details.card.subtypes,
                colorIdentity:  details.card.colorIdentity,
                colors:  details.card.colors,
                setName: details.card.setName,
                setCode: details.card.set,
                type: details.card.type,
                types:  details.card.types,
                rarity: details.card.rarity,
                text: details.card.text,
                flavor: details.card.flavor,
                number: details.card.number,
                layout: details.card.layout,
                imageUrl: details.card.imageUrl,
                id: details.card.id,
                loading:false
              }       
    })
  </script>
 
<SiteHeader/>

{#if data.loading === true}
  <div class='padding'>
    <div class={loadingAnimationContainer}>
      <LoadingAnimation />
      <div class={loadingText}>Loading...</div>
    </div>
  </div>

{:else if  data.loading === false}
  <CardDetailsPage data = {data}/>
{/if} 

<style>
  .padding{
    padding-top:9%
  }
</style>
  