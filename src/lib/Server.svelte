<script lang="ts">
    async function dataServer(){
        const url = 'https://todofulbo.onrender.com';
        const response = await fetch(url);
        const data = await response.json()
        console.log(JSON.stringify(data));

        const url1 = 'editarPersona/1/pepe';
        const response1 = await fetch(url);
        const data1 = await response.json()
        console.log(JSON.stringify(data));

    }
</script>

<button on:click={dataServer}>Start</button>
