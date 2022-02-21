<script lang="ts">
  import List from "../template/List.svelte";
  export let task = [];
  export let username = "jabelic";
</script>

<main>
  <h1>TODO List</h1>
  <h2>Hello {username}!</h2>
  <List />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    /* max-width: 1240px; */
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    /* text-transform: uppercase; */
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
