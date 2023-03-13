<script lang="ts">
	export let searchData:(value:string, searchType:string)=>void;
	let nameSearchParam:string
	let searchType='name'
	import debounce from "just-debounce-it";
 
//google where to import the KeyboardEventHandler
//@ts-ignore
	const handleInput = debounce ((event:KeyboardEventHandler<HTMLInputElement>) => {
		nameSearchParam = event.target.value;
		searchData(nameSearchParam, searchType)
		searchType = searchType
	}, 750);
</script>

<div class='searchInputContainer'>
	<div class='searchToggle'>
		<div class='toggleLabel'>Search by </div>
		<div class='toggles'>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="{searchType === 'name' ? 'toggleActive' : 'toggleInactive'}"  on:click="{() => searchType = 'name'}">Card Name</div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="{searchType === 'artist' ? 'toggleActive' : 'toggleInactive'}" on:click="{() => searchType = 'artist'}">Artist Name</div>
		</div>
	</div>
	<div id="search-input-cont">
		<input type="text" 
					id="search-field" 
					placeholder="Enter Search Term" 
					autocomplete="off"
					on:input={handleInput} />
	</div> 
</div>

<style>
	.searchInputContainer{
		display:flex;
		align-items: center;
		justify-content: center;
		padding: 2%;
		height: 4.6vh;
	}
	.searchToggle{
		display:flex;
		align-items: center;
		justify-content: center;
		flex-direction:row;
		height:100%;
		width: 28vw;
		background-color:white;
		border-radius:8px;
		box-shadow:  10px 10px 5px #363636;

	}
	.toggleLabel{		
		display:flex;
		align-items: center;
		justify-content: center;
		background-color:white;
		height:100%;
		width:100%;
		font-family: 'Lucida Grande', monospace;
		font-weight:700;
		color: #2e475d;
		border-radius:8px;
	}
	.toggles{
		display:flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
		padding-right:2%;
		width:100%;
		height:76%;
	}
	.toggleActive{
		display:flex;
		align-items: center;
		justify-content: center;
		background-color:#A7F2A7;
		height:100%;
		width:100%;
		padding-left: 2%;
		font-family: 'Lucida Grande', monospace;
		font-weight:700;
		color: #2e475d;
		border-radius:8px;

	}
	.toggleInactive{
		display:flex;
		align-items: center;
		justify-content: center;
		background-color:white;
		height:100%;
		width:100%;
		padding-left: 2%;
        font-family: 'Lucida Grande', monospace;
		font-weight:700;
		color: #2e475d;
	}
	#search-input-cont {
		width: 40%;
		display: flex;
		align-items: center;
		margin: 0 0 0 10px;
		
	}

	#search-field {
		width: 100%;
		font-size: 1.3rem;
		border: 1px solid gray;
		border-radius: 5px;
		padding: 8px;
		margin: 0 10px 0;
		box-shadow:  10px 10px 5px #363636;

	}

</style>