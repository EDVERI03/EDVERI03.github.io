<script>
    import '../app.css';
    import Navbar from '$lib/components/navbar.svelte';
</script>

<main class="h-screen bg-slate-100">
    <Navbar></Navbar>
    <slot></slot>
</main>
