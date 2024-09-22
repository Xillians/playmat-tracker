<script>
  // You can add any script logic here if needed
</script>

<div >
  <div class="banner">
    Playmat Tracker
  </div>
  <body>
    <slot />
  </body>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  :root {
    --banner-bg-color: #f8f9fa;
    --banner-padding: 20px;
    --banner-text-align: left;
    --banner-font-size: 24px;
    --banner-font-weight: bold;
    --banner-text-color: #333;
    --banner-border-color: #ccc;
    --global-font-family: 'Halant', serif;
    --global-font-weight: 300;
    --global-font-style: normal;
  }

  body {
    font-family: var(--global-font-family);
    font-weight: var(--global-font-weight);
    font-style: var(--global-font-style);
  }

  .banner {
    background-color: var(--banner-bg-color);
    padding: var(--banner-padding);
    text-align: var(--banner-text-align);
    font-size: var(--banner-font-size);
    font-weight: var(--banner-font-weight);
    color: var(--banner-text-color);
    border-bottom: 2px solid var(--banner-border-color);
  }
</style>