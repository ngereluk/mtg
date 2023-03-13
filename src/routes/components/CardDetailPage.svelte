

<script  lang="ts">
import PseudoRecomendations from './PseudoRecomendations.svelte'
export let data:any
</script>


<div class="cardDetails">
    <div class="cardInfoSection">
      <div class="cardImageContainerContainer">
        <!-- card image -->
            <div class='cardImageContainer'>
              <!-- svelte-ignore a11y-img-redundant-alt -->
              <img class ="cardImage" src={data.imageUrl} alt="card image">
              <div class="cardImageUnderlay"></div>
            </div>
      </div>      
        <!-- card data -->
        <div class='cardDataContainer'>
            <div class="cardData">
              <div class="cardDetailsTitle">Card Details</div>
              {#if data.name !== undefined}
                <div  class="cardDataItem">
                  <div class="cardDataItemLabel">Name:</div>
                  <div class='cardDataItemValue'>{data.name}</div>
                </div>
              {/if}
              {#if data.artist !== undefined}
                <div  class="cardDataItem">
                  <div class="cardDataItemLabel">Artist:</div>
                  <div class='cardDataItemValue'>{data.artist}</div>
                </div>
              {/if}
              {#if data.cmc !== undefined}
                <div  class="cardDataItem">
                  <div class="cardDataItemLabel">CMC:</div>
                  <div class='cardDataItemValue'>{data.cmc}</div>
                </div>
              {/if}
              {#if data.colorIdentity !== undefined}
                <div  class="cardDataItem">
                  <div class="cardDataItemLabel">Colour ID:</div>
                  <div class='cardDataItemValue'>{data.colorIdentity}</div>
                </div>
              {/if}
              {#if data.colors !== undefined}
                <div  class="cardDataItem">
                  <div class="cardDataItemLabel">Colours:</div>
                  <div class='cardDataItemValue'>{data.colors}</div>
                </div>
              {/if}
              {#if data.flavor !== undefined}
                <div  class="cardDataItem">
                    <div class="cardDataItemLabel">Flavor:</div>
                    <div class='cardDataItemValue'>{data.flavor}</div>
                </div>
              {/if}
              {#if data.layout !== undefined}
                <div  class="cardDataItem">
                    <div class="cardDataItemLabel">Layout:</div>
                    <div class='cardDataItemValue'>{data.layout}</div>
                </div>
              {/if}
              {#if data.number !== undefined}
                <div  class="cardDataItem">
                    <div class="cardDataItemLabel">Number:</div>
                    <div class='cardDataItemValue'>{data.number}</div>
                </div>
              {/if}
              {#if data.rarity !== undefined}
                <div  class="cardDataItem">
                    <div class="cardDataItemLabel">Rarity:</div>
                    <div class='cardDataItemValue'>{data.rarity}</div>
                </div>
              {/if}
              {#if data.setName !== undefined}
                <div  class="cardDataItem">
                    <div class="cardDataItemLabel">Set Name:</div>
                    <div class='cardDataItemValue'>{data.setName}</div>
                </div>
              {/if}
              {#if data.subtype !== undefined}
                <div  class="cardDataItem">
                    <div class="cardDataItemLabel">Sub Type:</div>
                    <div class='cardDataItemValue'>{data.subtype}</div>
                </div>
              {/if}
              {#if data.text !== undefined}
                <div  class="cardDataItem">
                    <div class="cardDataItemLabel">Text:</div>
                    <div class='cardDataItemValue'>{data.text}</div>
                </div>
              {/if}
              {#if data.type !== undefined}
                <div  class="cardDataItem">
                      <div class="cardDataItemLabel">Type:</div>
                      <div class='cardDataItemValue'>{data.type}</div>
                </div>
              {/if}
              {#if data.types !== undefined}
                <div  class="cardDataItem">
                      <div class="cardDataItemLabel">Types:</div>
                      <div class='cardDataItemValue'>{data.types}</div>
                </div>
              {/if}
              {#if data.manaCost !== undefined}
                <div  class="cardDataItem">
                      <div class="cardDataItemLabel">Mana Cost:</div>
                      <div class='cardDataItemValue'>{data.manaCost}</div>
                </div>
              {/if}
          </div>
        </div>
      </div>
    </div>
  <!-- pseudo recomendations component -->
  <PseudoRecomendations recomendationSetname={data.setCode}/>


<style>
    :global(body){
          background-color: #DBF2D5;
          background-color: #4E684B;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='46' height='46' fill-opacity='0.6' fill='%233D563D'/%3E%3C/svg%3E"); 
          margin: 0px !important; 
    }
    /* card details contains image and details box. used exclusvely to provide padding */
    .cardDetails{
      padding-top: 3%;
      display: flex;
      justify-content: center;
      width: 100%;
    }    
    /* card info section contains image and card details box. used to align items */
    .cardInfoSection{
      display: flex;
      flex-direction:row;
      justify-content: center;
      align-items: center;
      width: 90%;

    }
    /* used to align card image and background relaive to card info section */
    .cardImageContainerContainer{
      display: flex;
      justify-content: flex-end;
      width:50%;
    }
    /* contains image and background - used to align and size */
    .cardImageContainer{
      display: flex;
      flex-direction:row;
      justify-content: center;
      align-items: center;
      /* width:50%; */
    }
    /* class used to style image - takes white corners off that are in img returned by api */
    .cardImage{
    border-radius: 22px;
    position: absolute;
    z-index: 1;
    }
    /* circle underlay behind card image */
    .cardImageUnderlay{
    width:23vh;
    height:23vh;
    border-radius:50%;
    background-clip:content-box;
    padding:40px;
    border:2.5vh solid rgba(167, 242, 167, .4);
    position: relative;
    z-index:0
    }
    /* card data container is card details box. does not include image. used exclusively to provide padding */
    .cardDataContainer{
      padding-left: 8%;
      width: 50%
    }
    /* contains all card data. used to set container styles and align items */
    .cardData{
      display: flex;
      flex-direction:column;
      background-color: #A7F2A7;
      border-radius: 25px;
      padding-bottom: 3%;
      padding-left:  3%;
      padding-top: 3%;
      width: 60%;
      box-shadow: 10px 10px 5px #363636;
    }
    /* title for the card details section */
    .cardDetailsTitle{
      font-weight: bold;
      padding-left: 2%;
      padding-bottom: 1%;
      color: #2e475d;
      font-family: 'Lucida Grande', monospace;
      font-size: 1.4rem;
    }
    /* contains both label and corresponding data. used to align the label and data */
    .cardDataItem{
    display:flex;
    flex-direction:'row';
    padding-top: 0.75%;
    padding-bottom: 0.75%;
    max-width: 90%;
    padding-left: 2%;
    color: #2e475d;
    font-family: 'Lucida Grande', monospace;
    }  
    /* contains label. used to style and align */
    .cardDataItemLabel{
    font-weight: bold;
    padding-right: 1%;
    }
    /* contains data. used to style and align */
    .cardDataItemValue{
      overflow-wrap: break-word;
    }    
</style>
  
