<script>
	export let isOpen = false;
	export let close;

	function stopProp(event){
		event.stopProp();
	}
</script>

{#if isOpen}
	<div class="modal-overlay" on:click={close}>
		<div class="moodal-content" on:click={stopProp}>
			<slot></slot>
			<button on:click={close}>Close</button>
		</div>
	</div>
{/if}

<style>
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: white;
	}
	.modal-content{
		background-color: white;
		padding: 1rem;
		border-radius: 5px;
		max-width: 500px;
		width: 90%;

	}
</style>