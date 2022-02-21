<script lang="ts">
  import TrashIcon from "../components/TrashIcon.svelte";
  import { Button, Icon, Checkbox, RadioButtonGroup, Switch } from "smelte";
  export const req = () => {
    console.debug("200");
  };
  const taskNames = ["container1", "container2", "container3"];
</script>

<main>
  <link
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet"
  />
  <div>
    絞り込み:
    <button on:click={req}>All</button>
    <!-- <button
          on:click={() => {
            condition = false;
          }}>Undone</button
        >
        <button
          on:click={() => {
            condition = true;
          }}>Done</button
        > -->
  </div>
  <div>
    <!-- <input type="text" bind:value={currentText} bind:this={initFocus} />
        <button on:click={addTask}>Submit</button> -->
  </div>
  <div>
    <ul>
      <!-- {#each filterTodoList() as todo (todo.id)}
                {#key todo.done}
                <li>
                    <input type="checkbox" bind:checked={todo.done}>{todo.title}
                </li>
                {/key}
                {/each} -->
    </ul>
  </div>
  <div class="task">
    {#each taskNames as item, i}
      <div>
        <input id="checkbox{i}" type="checkbox" class="check-box" />
        <label for="checkbox{i}" class="input-label">
          {i + 1}: {item}
          <Button dark id="checkbox{i}" class="buttons">DEL</Button>
        </label>
      </div>
    {/each}
  </div>
</main>

<style>
  .task {
    /* width: 100%; */
    font-size: 1.5em;
  }
  .input-label {
    display: inline;
    padding: 0 0 1em 1em;
  }
</style>
