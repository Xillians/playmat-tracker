<script>
  export let data;

</script>
<div class="playmat-list">
  {#each data.props.playmats as playmat}
    <div class="playmat">
      <img src={playmat.Art} alt={playmat.Name} />
      <p class="name">{playmat.Name}</p>
      <p class="qty">Quantity: {playmat.Stored}</p>
    </div>
  {/each}
</div>

<style>
  .playmat-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 1em;
  }
  .playmat {
    display: grid;
    grid-template-rows: 2fr 0.5fr 0fr;
  }

  .playmat img {
    justify-self: center;
    align-self: center;
    width: 300px;
    border-radius: 5px;
    object-fit: fill;
  }

  .playmat .name {
    font-size: 1.5em;
    font-weight: bold;
  }
</style>