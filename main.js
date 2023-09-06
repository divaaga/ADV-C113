function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(200,200);
    video.hide();
}

function draw() {
    image(video, 50, 40, 200, 200);
    circle(20, 20, 20);
    circle(270, 20, 20);
    circle(20, 260, 20);
    circle(270, 260, 20);
    fill(153, 255, 255);
    stroke(153, 255, 255);
    rect(25, 20, 240, 5);
    rect(25, 260, 240, 5);
    rect(15, 20, 5, 240);
    rect(270, 20, 5, 240);
}

function take_snapshot() {
    save("filter_selfie.png");
}