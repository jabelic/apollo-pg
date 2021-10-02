<script lang="ts">
  export const req = () => {
    console.debug("200");
  };
</script>

<main>
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
</main>

<style></style>
