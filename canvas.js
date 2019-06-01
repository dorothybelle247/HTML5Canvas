window.addEventListener("load", () => {
  const blue = new mojs.Burst({
    left: 0,
    top: 0,
    radius: { 0: 1000, easing: "cubic.out" },
    angle: { 1000: 0, easing: "quad.out" },
    count: 100,
    children: {
      shape: "line",
      points: 15,
      stroke: "pink",
      fill: "blue",
      duration: 4000,
      degreeShift: "rand(-90,90)",
      radius: "rand(0,150)",
      delay: "rand(0,150)"
    }
  });

  document.addEventListener("click", function(e) {
    blue.tune({ x: e.pageX, y: e.pageY }).replay();
  });

  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  ctx.strokeStyle = "yellow";
  ctx.fillRect(150, 150, 200, 700);
});

// to update height and width
// window.addEventListener('resize, ')
