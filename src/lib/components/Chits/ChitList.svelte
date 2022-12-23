<script>
    import Chit from "./Chit.svelte";

    let chits = [
        {
            id: 1,
            author: 'MSav',
            handle: '@miisa',
            content: 'Testing chits with Svelte!'
        }
    ]
</script>
{#each chits as chit (chit.id)}
<Chit chit={chit} />
{/each}