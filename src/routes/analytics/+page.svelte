<script lang="ts">
import type {
    PageData
} from "./$types";

export let data: PageData;
</script>

<svelte:head>
	<title>Himanshu's website analytics</title>
    <meta name="description" content="Page visits analytics for himanshubhardwaz.com">
</svelte:head>

<style>
/* Style the table */
.styled-table {
    @apply w-full border-collapse border-spacing-0 shadow-md;
}

/* Style the table header */
.styled-table th {
    @apply py-2 px-4 text-left font-bold;
}

/* Style the table rows */
.styled-table td {
    @apply py-2 px-4 border-b border-gray-600;
}
</style>

<table class="styled-table dark-bg gap-8">
  <thead>
    <tr>
      <th>Routes</th>
      <th>Visits</th>
    </tr>
  </thead>
  <tbody>
    {#each data.data as d, index}
    <tr>
      <td>{d.route}</td>
      <td>{d.count}</td>
    </tr>
    {/each}
  </tbody>
</table>
