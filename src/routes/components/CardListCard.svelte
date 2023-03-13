<script lang="ts">
    export let cardName:string
    export let cardId:string
    export let cardImageUrl:string
    export let cardArtist:string
    export let cardSubtype:string[]
    export let cardColor:string[]
</script>
        
 <div class='listCardContainerPadding'> 
    <!-- card wrapped in clickable link that goes to card details -->
    <a class="overrideElStyles" data-sveltekit-reload href="/cardDetails/{cardId}">   
    <div class='listCardContainer'> 
        <!-- card image -->
        <div class='listCardImageContainer'>
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img class ="cardImage" src={cardImageUrl} alt="card image">
        </div>
        <!-- card information -->
        <div class='cardDataContainer'>
            {#if cardName !== undefined}
                <div  class="cardDataItem">
                    <div class="cardDataItemLabel">Name:</div>
                    <div class='cardDataItemValue'>{cardName}</div>
                </div>
            {/if}
            {#if cardArtist !== undefined}
                <div  class="cardDataItem">
                    <div class="cardDataItemLabel">Artist:</div>
                    <div class='cardDataItemValue'>{cardArtist}</div>
                </div>
            {/if}

            {#if cardSubtype !== undefined}
                <div  class="cardDataItem">
                    <div class="cardDataItemLabel">Subtype:</div>
                    <div class='cardDataItemValue'>{cardSubtype}</div>
                </div>
            {/if}

            {#if cardColor !== undefined}
                <div  class="cardDataItem">
                    <div class="cardDataItemLabel">Color:</div>
                    <div class='cardDataItemValue'>{cardColor}</div>
                </div>
            {/if}
        </div>  
        <div class='spacer'></div>

    </div>
</a> 
</div>          
<style>
        /* adds padding to each card in list */
        .listCardContainerPadding{
            display: flex;
            padding-top: 2%;
            padding-bottom: 2%;
            padding-right: 2%;
            padding-left: 2%;
        }
        /* removing underline added by <a> */
        .overrideElStyles{
            text-decoration: none !important;
        }
        /* styles card and aligns items within it */
        .listCardContainer{
            display: flex;
            flex-direction:column;
            justify-content:center;
            align-items: center;
            background-color: #A7F2A7;
            width:100%;
            height: 48vh;
            border-radius: 25px;
            box-shadow: 10px 10px 5px #363636 !important;
            padding-left: 5%;
            padding-right: 5%;
            padding-top:5%;
        }
        /* class used to style image - takes white corners off that are in img returned by api */
        .cardImage{
        border-radius: 22px;
        max-height: 35vh;
        }
        /* used to push up card text if some of the values are undefined */
        .spacer{
            display:flex;
            flex-grow:1;
        }
        /* pads card data at bottom */
        .cardDataContainer{
            padding-bottom:5%;
            padding-top:2%;
            padding-left:3%;
            width:100%;
        }
        /* contains both label and corresponding data. used to align the label and data */
        .cardDataItem{
        display:flex;
        flex-direction:'row';
        padding-top: 0.75%;
        padding-bottom: 0.75%;
        width:100%;
        color: #2e475d;
        font-family: 'Lucida Grande', monospace;
        }

        /* contains label. used to style and align */
        .cardDataItemLabel{
        font-weight: bold;
        padding-right: 2%;
        }

        /* contains data. used to style and align */
        .cardDataItemValue{
        overflow-wrap: break-word;
        }
</style>