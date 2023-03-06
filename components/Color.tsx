import React from "react";

class MyComponent extends React.Component {
  componentDidMount() {
    const canvas = document.createElement("canvas");
    const ctx: any = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.querySelector(".canvas-container")?.appendChild(canvas);

    const colors = [
      [105, 98, 109], // #69626D
      [188, 175, 156], // #BCAF9C
      [203, 190, 179], // #CBBEB3
      [217, 189, 197], // #D9BDC5
      [232, 199, 222], // #E8C7DE
      [191, 215, 255], // #BFD7FF
      [226, 253, 255], // #E2FDFF
      [155, 177, 255], // #9BB1FF
      [120, 139, 255], // #788BFF
      [84, 101, 255], // #5465FF
    ];

    function animate() {
      // Shuffle the colors array randomly
      for (let i = colors.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [colors[i], colors[j]] = [colors[j], colors[i]];
      }

      // Create a gradient from the shuffled colors array
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      for (let i = 0; i < colors.length; i++) {
        const [r, g, b] = colors[i];
        const stop = i / (colors.length - 1);
        gradient.addColorStop(stop, `rgba(${r}, ${g}, ${b}, 1)`);
      }

      // Fill the canvas with the gradient
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Move the gradient bands
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.putImageData(imageData, -2, 0);

      // Call animate function recursively
      setTimeout(animate, 700); // Increase or decrease this value to change animation speed
    }

    animate();
  }

  render() {
    return <canvas id="myCanvas"></canvas>;
  }
}

export default MyComponent;
