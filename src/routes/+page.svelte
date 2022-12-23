<script>
    import AddChit from "$lib/components/Chits/AddChit.svelte";
    import ChitList from "$lib/components/Chits/ChitList.svelte";
</script>
<div id="app-container" class="app-container">
    <section>
        <div class="container">
            <main>
                <AddChit />
                <ChitList />
            </main>
            <aside>
                Chitter is a tweet client built on Svelte. Nothing much going on over here. See more on:

                <p>recluze.net/course-svelte</p>
            </aside>
        </div>
    </section>
</div> 
<style>
    section .container main {
            flex-grow: 3;
            flex-basis: 600px;
            margin-left: 20px;
    }
    
    section .container aside {
        flex-grow: 1;
        flex-basis: 100px;
        padding: 20px;
        font-size: smaller;
        margin-top: 20px;
        font-weight: 100;
        opacity: 0.5;
    }
</style>