<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { Graph } from "../../../../graph/";
	import ApiDocs from "../../ApiDocs.svelte";
	import Accordion from "../Accordion/Accordion.svelte";
	import Audio from "../Audio/Audio.svelte";

	export let label: string;
	export let elem_id: string = "";
	export let visible: boolean = true;

	export let value: {
		value: string;
		endpoint: string;
		rate_limit: number;
		size_limit: number;
	} = {
		value: "",
		endpoint: "https://query.wikidata.org/sparql",
		rate_limit: 5,
		size_limit: 100
	};
	const dispatch = createEventDispatcher<{ change: undefined }>();

	$: label, dispatch("change");
</script>

<Graph on:change {elem_id} {visible} {...value} />
