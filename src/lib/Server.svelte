<script>
    async function dataServer(){
        const url = 'http://localhost:3000/';
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