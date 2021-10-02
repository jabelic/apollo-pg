<script lang="ts">
  import List from "../template/List.svelte";
  export let task = [];
  export let username = "jabelic";
</script>

<main>
  <h1>Hello {username}!</h1>
  <h2>TODO List</h2>
  <List />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
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
