import gradio as gr


with gr.Blocks() as kgVisualizationTab:
    examples = gr.Radio(["http://www.wikidata.org/entity/Q42442324",
                        "http://www.wikidata.org/entity/Q84263196"])
    graph = gr.Graph()
    examples.change(fn=None, inputs=examples, outputs=graph)
