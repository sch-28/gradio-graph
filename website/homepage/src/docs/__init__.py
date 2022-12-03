import os
from gradio.documentation import generate_documentation, document_cls
import gradio.templates
from gradio.events import Changeable, Clearable, Submittable, Editable, Playable, Clickable, Blurrable, Uploadable
from ..guides import guides

DIR = os.path.dirname(__file__)
GRADIO_DIR = "../../"
TEMPLATE_FILE = os.path.join(DIR, "template.html")
DEMOS_DIR = os.path.join(GRADIO_DIR, "demo")

docs = generate_documentation()
def add_component_shortcuts():
    for component in docs["component"]:
        if not getattr(component["class"], "allow_string_shortcut", True):
            continue
        component["string_shortcuts"] = [
            (component["class"].__name__, component["name"].lower(), "Uses default values")
        ]
        for subcls in component["class"].__subclasses__():
            if getattr(subcls, "is_template", False):
                _, tags, _ = document_cls(subcls)
                component["string_shortcuts"].append(
                    (subcls.__name__, subcls.__name__.lower(), "Uses " + tags.get("sets", "default values"))
                )                
add_component_shortcuts()
def add_demos():
    for mode in docs:
        for cls in docs[mode]:
            if "demos" not in cls["tags"]:
                continue
            cls["demos"] = []
            demos = [demo.strip() for demo in cls["tags"]["demos"].split(",")]
            for demo in demos:
                demo_file = os.path.join(DEMOS_DIR, demo, "run.py")
                with open(demo_file) as run_py:
                    demo_code = run_py.read()
                cls["demos"].append((demo, demo_code))

add_demos()

def add_supported_events():
    for component in docs["component"]:
        component["events"] = []
        if issubclass(component["class"], Changeable):
            component["events"].append("change()")
        if issubclass(component["class"], Clickable):
            component["events"].append("click()")
        if issubclass(component["class"], Clearable):
            component["events"].append("clear()")
        if issubclass(component["class"], Playable):
            component["events"].append("play()")
            component["events"].append("pause()")
            component["events"].append("stop()")
        if issubclass(component["class"], Editable):
            component["events"].append("edit()")
        if issubclass(component["class"], Submittable):
            component["events"].append("submit()")
        if issubclass(component["class"], Blurrable):
                component["events"].append("blur()")
        if issubclass(component["class"], Uploadable):
            component["events"].append("upload()")
        if component["events"]:
            component["events"] = ", ".join(component["events"])

add_supported_events()

def add_guides():
    for mode in docs:
        for cls in docs[mode]:
            if "guides" not in cls["tags"]:
                continue
            cls["guides"] = []
            docstring_guides = [guide.strip() for guide in cls["tags"]["guides"].split(",")]
            for docstring_guide in docstring_guides:
                for guide in guides:
                    if docstring_guide == guide["name"]:
                        cls["guides"].append(guide)

add_guides()

def style_types():
    for mode in docs: 
        for cls in docs[mode]:
            for tag in ["preprocessing", "postprocessing", "examples-format", "examples-format", "events"]:
                if tag not in cls["tags"]:
                    continue
                cls["tags"][tag] = cls["tags"][tag].replace("{", "<span class='text-orange-500' style='font-family: monospace; font-size: large;' >").replace("}", "</span>")

style_types()

def override_signature(name, signature):
    for mode in docs:
        for cls in docs[mode]:
            if cls["name"] == name:
                cls["override_signature"] = signature

override_signature("Blocks", "with gradio.Blocks():")
override_signature("Row", "with gradio.Row():")
override_signature("Column", "with gradio.Column():")
override_signature("Tab", "with gradio.Tab():")
override_signature("Group", "with gradio.Group():")
override_signature("Box", "with gradio.Box():")
override_signature("Dataset", "gr.Dataset(components, samples)")


def find_cls(target_cls):
    for mode in docs:
        for cls in docs[mode]:
            if cls["name"] == target_cls:
                return cls
    raise ValueError("Class not found")

def build(output_dir, jinja_env, gradio_wheel_url, gradio_version):
    os.makedirs(output_dir, exist_ok=True)
    template = jinja_env.get_template("docs/template.html")
    output = template.render(docs=docs, find_cls=find_cls, version="main", gradio_version=gradio_version, gradio_wheel_url=gradio_wheel_url)
    output_folder = os.path.join(output_dir, "docs")
    os.makedirs(output_folder)
    output_main = os.path.join(output_folder, "main")
    os.makedirs(output_main)
    output_file = os.path.join(output_main, "index.html")
    with open(output_file, "w") as index_html:
        index_html.write(output)
    template = jinja_env.get_template(f"docs/v{gradio_version}_template.html")
    output = template.render()
    version_docs_file = os.path.join(output_folder, "index.html")
    with open(version_docs_file, "w") as index_html:
        index_html.write(output)

def build_pip_template(version, jinja_env):
    docs_files = os.listdir("src/docs")
    template = jinja_env.get_template("docs/template.html")
    output = template.render(docs=docs, find_cls=find_cls, version="pip", gradio_version=version)
    with open(f"src/docs/v{version}_template.html", "w+") as template_file:
        template_file.write(output)