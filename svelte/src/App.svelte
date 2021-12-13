<script>

	import Idea from '../lib/components/Idea/Idea.svelte';

	async function connectWallet() {
		if (window.ethereum) {
			window.web3 = new Web3(ethereum);
			await window.ethereum.enable();
			metamaskConnected = window.ethereum.isConnected();
		}
	}

	$: promise = connectWallet();
	$: metamaskConnected = window.ethereum 
		? window.ethereum.isConnected()
		: false;
</script>

<main>

	{#if window.ethereum}
	<p>Browser wallet already connected to metamask {metamaskConnected}</p>
	{/if}

	{#if window.ethereum && !metamaskConnected}
		<button on:click={connectWallet}>Connect Wallet</button>
	{:else}
	<p>Wallet Connected!</p>
	<Idea/>
	{/if}

	
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}


	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>