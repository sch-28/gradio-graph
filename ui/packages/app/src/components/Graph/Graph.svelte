<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { Graph } from "../../../../graph/";

	export let label: string;
	export let elem_id: string = "";
	export let visible: boolean = true;
	export let value: string = "";

	const dispatch = createEventDispatcher<{ change: undefined }>();

	$: label, dispatch("change");
</script>

<Graph on:change {elem_id} {value} {visible} />
