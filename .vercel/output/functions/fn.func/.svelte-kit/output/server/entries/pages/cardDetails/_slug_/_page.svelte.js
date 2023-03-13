import { c as create_ssr_component, d as each, v as validate_component, f as add_attribute, e as escape, b as subscribe, g as null_to_empty } from "../../../../chunks/index2.js";
import { p as page } from "../../../../chunks/stores.js";
import { C as CardListCard, S as SiteHeader, L as LoadingAnimation, l as loadingAnimationContainer, a as loadingText } from "../../../../chunks/loadingAnimation.js";
const PseudoRecomendations_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".pseudoRecomendationsContainer.svelte-12efjwg{display:flex;flex-direction:column;justify-content:center;align-items:center;padding-top:5%;padding-bottom:5%}.pseudoRecomendationsTitle.svelte-12efjwg{font-weight:700;font-family:'Lucida Grande', monospace !important;font-size:1.25rem;color:#A7F2A7}.pseudoRecomendations.svelte-12efjwg{display:flex;flex-direction:row;justify-content:center;align-items:center}",
  map: null
};
const PseudoRecomendations = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { recomendationSetname } = $$props;
  let pseudoRecomendations = [];
  if ($$props.recomendationSetname === void 0 && $$bindings.recomendationSetname && recomendationSetname !== void 0)
    $$bindings.recomendationSetname(recomendationSetname);
  $$result.css.add(css$2);
  return `<div class="${"pseudoRecomendationsContainer svelte-12efjwg"}"><div class="${"pseudoRecomendationsTitle svelte-12efjwg"}">Other Cards in This Set</div>

    ${`${`${pseudoRecomendations !== void 0 ? `<div class="${"pseudoRecomendations svelte-12efjwg"}">${each(pseudoRecomendations, (pseudoRecomendation) => {
    return `${pseudoRecomendation.imageUrl !== void 0 ? `${validate_component(CardListCard, "CardListCard").$$render(
      $$result,
      {
        cardName: pseudoRecomendation.name,
        cardId: pseudoRecomendation.id,
        cardImageUrl: pseudoRecomendation.imageUrl,
        cardArtist: pseudoRecomendation.artist,
        cardSubtype: pseudoRecomendation.subtypes,
        cardColor: pseudoRecomendation.colorIdentity
      },
      {},
      {}
    )}` : ``}`;
  })}</div>` : ``}`}`}
</div>`;
});
const CardDetailPage_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: `body{background-color:#DBF2D5;background-color:#4E684B;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='46' height='46' fill-opacity='0.6' fill='%233D563D'/%3E%3C/svg%3E");margin:0px !important}.cardDetails.svelte-szwk9b{padding-top:3%;display:flex;justify-content:center;width:100%}.cardInfoSection.svelte-szwk9b{display:flex;flex-direction:row;justify-content:center;align-items:center;width:90%}.cardImageContainerContainer.svelte-szwk9b{display:flex;justify-content:flex-end;width:50%}.cardImageContainer.svelte-szwk9b{display:flex;flex-direction:row;justify-content:center;align-items:center}.cardImage.svelte-szwk9b{border-radius:22px;position:absolute;z-index:1}.cardImageUnderlay.svelte-szwk9b{width:23vh;height:23vh;border-radius:50%;background-clip:content-box;padding:40px;border:2.5vh solid rgba(167, 242, 167, .4);position:relative;z-index:0
    }.cardDataContainer.svelte-szwk9b{padding-left:8%;width:50%
    }.cardData.svelte-szwk9b{display:flex;flex-direction:column;background-color:#A7F2A7;border-radius:25px;padding-bottom:3%;padding-left:3%;padding-top:3%;width:60%;box-shadow:10px 10px 5px #363636}.cardDetailsTitle.svelte-szwk9b{font-weight:bold;padding-left:2%;padding-bottom:1%;color:#2e475d;font-family:'Lucida Grande', monospace;font-size:1.4rem}.cardDataItem.svelte-szwk9b{display:flex;flex-direction:'row';padding-top:0.75%;padding-bottom:0.75%;max-width:90%;padding-left:2%;color:#2e475d;font-family:'Lucida Grande', monospace}.cardDataItemLabel.svelte-szwk9b{font-weight:bold;padding-right:1%}.cardDataItemValue.svelte-szwk9b{overflow-wrap:break-word}`,
  map: null
};
const CardDetailPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$1);
  return `<div class="${"cardDetails svelte-szwk9b"}"><div class="${"cardInfoSection svelte-szwk9b"}"><div class="${"cardImageContainerContainer svelte-szwk9b"}">
            <div class="${"cardImageContainer svelte-szwk9b"}">
              <img class="${"cardImage svelte-szwk9b"}"${add_attribute("src", data.imageUrl, 0)} alt="${"card image"}">
              <div class="${"cardImageUnderlay svelte-szwk9b"}"></div></div></div>      
        
        <div class="${"cardDataContainer svelte-szwk9b"}"><div class="${"cardData svelte-szwk9b"}"><div class="${"cardDetailsTitle svelte-szwk9b"}">Card Details</div>
              ${data.name !== void 0 ? `<div class="${"cardDataItem svelte-szwk9b"}"><div class="${"cardDataItemLabel svelte-szwk9b"}">Name:</div>
                  <div class="${"cardDataItemValue svelte-szwk9b"}">${escape(data.name)}</div></div>` : ``}
              ${data.artist !== void 0 ? `<div class="${"cardDataItem svelte-szwk9b"}"><div class="${"cardDataItemLabel svelte-szwk9b"}">Artist:</div>
                  <div class="${"cardDataItemValue svelte-szwk9b"}">${escape(data.artist)}</div></div>` : ``}
              ${data.cmc !== void 0 ? `<div class="${"cardDataItem svelte-szwk9b"}"><div class="${"cardDataItemLabel svelte-szwk9b"}">CMC:</div>
                  <div class="${"cardDataItemValue svelte-szwk9b"}">${escape(data.cmc)}</div></div>` : ``}
              ${data.colorIdentity !== void 0 ? `<div class="${"cardDataItem svelte-szwk9b"}"><div class="${"cardDataItemLabel svelte-szwk9b"}">Colour ID:</div>
                  <div class="${"cardDataItemValue svelte-szwk9b"}">${escape(data.colorIdentity)}</div></div>` : ``}
              ${data.colors !== void 0 ? `<div class="${"cardDataItem svelte-szwk9b"}"><div class="${"cardDataItemLabel svelte-szwk9b"}">Colours:</div>
                  <div class="${"cardDataItemValue svelte-szwk9b"}">${escape(data.colors)}</div></div>` : ``}
              ${data.flavor !== void 0 ? `<div class="${"cardDataItem svelte-szwk9b"}"><div class="${"cardDataItemLabel svelte-szwk9b"}">Flavor:</div>
                    <div class="${"cardDataItemValue svelte-szwk9b"}">${escape(data.flavor)}</div></div>` : ``}
              ${data.layout !== void 0 ? `<div class="${"cardDataItem svelte-szwk9b"}"><div class="${"cardDataItemLabel svelte-szwk9b"}">Layout:</div>
                    <div class="${"cardDataItemValue svelte-szwk9b"}">${escape(data.layout)}</div></div>` : ``}
              ${data.number !== void 0 ? `<div class="${"cardDataItem svelte-szwk9b"}"><div class="${"cardDataItemLabel svelte-szwk9b"}">Number:</div>
                    <div class="${"cardDataItemValue svelte-szwk9b"}">${escape(data.number)}</div></div>` : ``}
              ${data.rarity !== void 0 ? `<div class="${"cardDataItem svelte-szwk9b"}"><div class="${"cardDataItemLabel svelte-szwk9b"}">Rarity:</div>
                    <div class="${"cardDataItemValue svelte-szwk9b"}">${escape(data.rarity)}</div></div>` : ``}
              ${data.setName !== void 0 ? `<div class="${"cardDataItem svelte-szwk9b"}"><div class="${"cardDataItemLabel svelte-szwk9b"}">Set Name:</div>
                    <div class="${"cardDataItemValue svelte-szwk9b"}">${escape(data.setName)}</div></div>` : ``}
              ${data.subtype !== void 0 ? `<div class="${"cardDataItem svelte-szwk9b"}"><div class="${"cardDataItemLabel svelte-szwk9b"}">Sub Type:</div>
                    <div class="${"cardDataItemValue svelte-szwk9b"}">${escape(data.subtype)}</div></div>` : ``}
              ${data.text !== void 0 ? `<div class="${"cardDataItem svelte-szwk9b"}"><div class="${"cardDataItemLabel svelte-szwk9b"}">Text:</div>
                    <div class="${"cardDataItemValue svelte-szwk9b"}">${escape(data.text)}</div></div>` : ``}
              ${data.type !== void 0 ? `<div class="${"cardDataItem svelte-szwk9b"}"><div class="${"cardDataItemLabel svelte-szwk9b"}">Type:</div>
                      <div class="${"cardDataItemValue svelte-szwk9b"}">${escape(data.type)}</div></div>` : ``}
              ${data.types !== void 0 ? `<div class="${"cardDataItem svelte-szwk9b"}"><div class="${"cardDataItemLabel svelte-szwk9b"}">Types:</div>
                      <div class="${"cardDataItemValue svelte-szwk9b"}">${escape(data.types)}</div></div>` : ``}
              ${data.manaCost !== void 0 ? `<div class="${"cardDataItem svelte-szwk9b"}"><div class="${"cardDataItemLabel svelte-szwk9b"}">Mana Cost:</div>
                      <div class="${"cardDataItemValue svelte-szwk9b"}">${escape(data.manaCost)}</div></div>` : ``}</div></div></div></div>
  
  ${validate_component(PseudoRecomendations, "PseudoRecomendations").$$render($$result, { recomendationSetname: data.setCode }, {}, {})}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".padding.svelte-hsitlv{padding-top:9%\n  }",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { data = {
    manaCost: 0,
    name: "",
    cmc: 0,
    artist: "",
    subtype: [""],
    colorIdentity: [""],
    colors: [""],
    setName: "",
    setCode: "",
    type: "",
    types: [""],
    rarity: "",
    text: "",
    flavor: "",
    number: "",
    layout: "",
    imageUrl: "",
    id: "",
    loading: false
  } } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${validate_component(SiteHeader, "SiteHeader").$$render($$result, {}, {}, {})}

${data.loading === true ? `<div class="${"padding svelte-hsitlv"}"><div class="${escape(null_to_empty(loadingAnimationContainer), true) + " svelte-hsitlv"}">${validate_component(LoadingAnimation, "LoadingAnimation").$$render($$result, {}, {}, {})}
      <div class="${escape(null_to_empty(loadingText), true) + " svelte-hsitlv"}">Loading...</div></div></div>` : `${data.loading === false ? `${validate_component(CardDetailPage, "CardDetailsPage").$$render($$result, { data }, {}, {})}` : ``}`}`;
});
export {
  Page as default
};
