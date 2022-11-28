<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { Graph } from "../../../../graph/";

	export let label: string;
	export let elem_id: string = "";
	export let visible: boolean = true;

	export let value: string = "";
	export let endpoint: string = "https://query.wikidata.org/sparql";
	export let rate_limit: number = 5;
	export let size_limit: number = 100;

	const dispatch = createEventDispatcher<{ change: undefined }>();

	$: label, dispatch("change");
</script>

<Graph
	on:change
	{elem_id}
	root={value}
	{visible}
	{endpoint}
	{rate_limit}
	{size_limit}
/>
