<script>
  let { data } = $props();
</script>

<svelte:head><title>example-sveltekit — UQBITZ</title></svelte:head>

<main>
  <h1>example-sveltekit on UQBITZ</h1>
  <p>Rendered on the server for every request.</p>
  <ul>
    <li>marker: <code id="marker">uqbitz-example-sveltekit-v2</code></li>
    <li>rendered-at: <code id="rendered-at">{data.renderedAt}</code></li>
    <li>request-id: <code id="request-id">{data.requestId}</code></li>
    <li>echo x-uqbitz-probe: <code id="probe">{data.probe}</code></li>
    <li>release: <code id="release">{data.release}</code></li>
    <li>runtime: <code id="runtime">{data.runtime}</code></li>
  </ul>
</main>
