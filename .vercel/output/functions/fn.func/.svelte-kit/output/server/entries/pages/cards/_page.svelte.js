import { c as create_ssr_component, e as escape, g as null_to_empty, v as validate_component, d as each } from "../../../chunks/index2.js";
import { S as SiteHeader, l as loadingAnimationContainer, L as LoadingAnimation, a as loadingText, C as CardListCard } from "../../../chunks/loadingAnimation.js";
import debounce from "just-debounce-it";
Promise.resolve();
const Search_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".searchInputContainer.svelte-u8hidz{display:flex;align-items:center;justify-content:center;padding:2%;height:4.6vh}.searchToggle.svelte-u8hidz{display:flex;align-items:center;justify-content:center;flex-direction:row;height:100%;width:28vw;background-color:white;border-radius:8px;box-shadow:10px 10px 5px #363636}.toggleLabel.svelte-u8hidz{display:flex;align-items:center;justify-content:center;background-color:white;height:100%;width:100%;font-family:'Lucida Grande', monospace;font-weight:700;color:#2e475d;border-radius:8px}.toggles.svelte-u8hidz{display:flex;align-items:center;justify-content:center;flex-direction:row;padding-right:2%;width:100%;height:76%}.toggleActive.svelte-u8hidz{display:flex;align-items:center;justify-content:center;background-color:#A7F2A7;height:100%;width:100%;padding-left:2%;font-family:'Lucida Grande', monospace;font-weight:700;color:#2e475d;border-radius:8px}.toggleInactive.svelte-u8hidz{display:flex;align-items:center;justify-content:center;background-color:white;height:100%;width:100%;padding-left:2%;font-family:'Lucida Grande', monospace;font-weight:700;color:#2e475d}#search-input-cont.svelte-u8hidz{width:40%;display:flex;align-items:center;margin:0 0 0 10px}#search-field.svelte-u8hidz{width:100%;font-size:1.3rem;border:1px solid gray;border-radius:5px;padding:8px;margin:0 10px 0;box-shadow:10px 10px 5px #363636}",
  map: null
};
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { searchData } = $$props;
  let nameSearchParam;
  let searchType = "name";
  debounce(
    (event) => {
      nameSearchParam = event.target.value;
      searchData(nameSearchParam, searchType);
      searchType = searchType;
    },
    750
  );
  if ($$props.searchData === void 0 && $$bindings.searchData && searchData !== void 0)
    $$bindings.searchData(searchData);
  $$result.css.add(css$2);
  return `<div class="${"searchInputContainer svelte-u8hidz"}"><div class="${"searchToggle svelte-u8hidz"}"><div class="${"toggleLabel svelte-u8hidz"}">Search by </div>
		<div class="${"toggles svelte-u8hidz"}">
			<div class="${escape(
    null_to_empty(searchType === "name" ? "toggleActive" : "toggleInactive"),
    true
  ) + " svelte-u8hidz"}">Card Name</div>
			
			<div class="${escape(
    null_to_empty(searchType === "artist" ? "toggleActive" : "toggleInactive"),
    true
  ) + " svelte-u8hidz"}">Artist Name</div></div></div>
	<div id="${"search-input-cont"}" class="${"svelte-u8hidz"}"><input type="${"text"}" id="${"search-field"}" placeholder="${"Enter Search Term"}" autocomplete="${"off"}" class="${"svelte-u8hidz"}"></div> 
</div>`;
});
const CardList_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".cardList.svelte-1bjvvtg{display:flex;flex-direction:row;align-items:center;justify-content:center;flex-wrap:wrap}.viewingAllContainer.svelte-1bjvvtg{display:flex;align-items:center;justify-content:center;width:100%;padding-top:1%\n      }.viewingAll.svelte-1bjvvtg{color:#A7F2A7;font-weight:700;font-size:1.5rem;font-family:'Lucida Grande', monospace !important}.errorContainer.svelte-1bjvvtg{display:flex;align-items:center;justify-content:center;width:100%;padding-top:1%\n      }.error.svelte-1bjvvtg{color:#A7F2A7;font-weight:700;font-size:1.5rem;font-family:'Lucida Grande', monospace !important}",
  map: null
};
const CardList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let loading;
  let cards = [];
  let lastQueryText = "";
  let hasMore = true;
  let fetchError = false;
  let loadingMore = false;
  const getCards = async (searchString, searchType) => {
    fetchError = false;
    try {
      const res = await fetch("/api/GetCards", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          count: Math.floor(cards.length / 100) + 1,
          nameSearchParam: searchString,
          searchType
        })
      });
      const newCards = await res.json();
      if (searchString === lastQueryText) {
        cards = [...cards, ...newCards];
      } else {
        cards = [...newCards];
      }
      if (newCards.length < 100) {
        hasMore = false;
      } else {
        hasMore = true;
      }
      loading = false;
      loadingMore = false;
    } catch {
      loading = false;
      loadingMore = false;
      fetchError = true;
    }
  };
  const searchData = (val, searchType) => {
    cards = [];
    loading = true;
    getCards(val, searchType);
    lastQueryText = val;
  };
  $$result.css.add(css$1);
  return `<main>${validate_component(SiteHeader, "SiteHeader").$$render($$result, {}, {}, {})}
  ${validate_component(Search, "Search").$$render($$result, { searchData }, {}, {})}
  ${loading === true ? `<div class="${escape(null_to_empty(loadingAnimationContainer), true) + " svelte-1bjvvtg"}">${validate_component(LoadingAnimation, "LoadingAnimation").$$render($$result, {}, {}, {})}
        <div class="${escape(null_to_empty(loadingText), true) + " svelte-1bjvvtg"}">Loading...</div></div>` : `${cards !== void 0 ? `<div class="${"cardList svelte-1bjvvtg"}">${each(cards, (card) => {
    return `${card.imageUrl !== void 0 ? `${validate_component(CardListCard, "CardListCard").$$render(
      $$result,
      {
        cardName: card.name,
        cardId: card.id,
        cardImageUrl: card.imageUrl,
        cardArtist: card.artist,
        cardSubtype: card.subtypes,
        cardColor: card.colorIdentity
      },
      {},
      {}
    )}` : ``}`;
  })}</div>` : ``}`}

  <div></div>

  ${loadingMore === true ? `<div class="${escape(null_to_empty(loadingAnimationContainer), true) + " svelte-1bjvvtg"}">${validate_component(LoadingAnimation, "LoadingAnimation").$$render($$result, {}, {}, {})}
        <div class="${escape(null_to_empty(loadingText), true) + " svelte-1bjvvtg"}">Loading...</div></div>` : ``}

  ${!hasMore ? `<div class="${"viewingAllContainer svelte-1bjvvtg"}"><div class="${"viewingAll svelte-1bjvvtg"}">Viewing All Results</div></div>` : ``}

  ${fetchError ? `<div class="${"errorContainer svelte-1bjvvtg"}"><div class="${"error svelte-1bjvvtg"}">Sorry, we couldn&#39;t retieve any data. Please try another search term or try refreshing the page.</div></div>` : ``}


</main>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: `body{background-color:#DBF2D5;background-color:#4E684B;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='46' height='46' fill-opacity='0.6' fill='%233D563D'/%3E%3C/svg%3E");margin:0px !important}`,
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main>
    ${validate_component(CardList, "CardList").$$render($$result, {}, {}, {})}
  </main>`;
});
export {
  Page as default
};
