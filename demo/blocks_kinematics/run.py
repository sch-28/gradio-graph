import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import numpy as np

import gradio as gr


def plot(v, a):
    g = 9.81
    theta = a / 180 * 3.14
    tmax = ((2 * v) * np.sin(theta)) / g
    timemat = tmax * np.linspace(0, 1, 40)[:, None]

    x = (v * timemat) * np.cos(theta)
    y = ((v * timemat) * np.sin(theta)) - ((0.5 * g) * (timemat**2))

    fig = plt.figure()
    plt.scatter(x=x, y=y, marker=".")
    plt.xlim(0, 100)
    plt.ylim(0, 60)
    return fig


demo = gr.Blocks()

with demo:
    gr.Markdown(
        r"Let's do some kinematics! Choose the speed and angle to see the trajectory. Remember that the range $R = v_0^2 \cdot \frac{\sin(2\theta)}{g}$"
    )

    with gr.Row():
        speed = gr.Slider(1, 30, 25, label="Speed")
        angle = gr.Slider(0, 90, 45, label="Angle")
    output = gr.Plot()
    btn = gr.Button(value="Run")
    btn.click(plot, [speed, angle], output)

if __name__ == "__main__":
    demo.launch()
