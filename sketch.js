// Global Varables
var canvas;
var screenSize;

// Set the number of rows and columns
var num = 3;
var row = num;
var col = num;

// Spot Object
var s = {
    x: 0,
    y: 0,
    d: 0
};

//Colour Object
var c = {
    r: 0,
    g: 0,
    b: 0,
    a: 0
};

function setup() {
    screenSize = Math.min(600, windowWidth, windowHeight);
    s.d = screenSize / 10;
    canvas = createCanvas(screenSize, screenSize);
    // Assign canvas to a div
    canvas.parent('#canvas');
    background(255);
};

function draw() {
    smooth();
    noStroke();
    ellipseMode(RADIUS);
    // Loops to create the rows and columns of spots
    for (var i = 0; i < row; i++)
        for (var j = 0; j < col; j++) {
            // Random spots colour
            c.r = random(0, 255);
            c.g = random(0, 255);
            c.b = random(0, 255);
            c.a = random(0, 200);
            fill(c.r, c.b, c.g, c.a);
            s.y = height / col * (j + 0.5);
            s.x = width / row * (i + 0.5);
            ellipse(s.x, s.y, s.d, s.d);

        }
    noLoop();
};

// Initalise Slider
$("#slider").slider({
    max: 12,
    min: 3,
    animate: "fast",
    slide: function(event, ui) {
        // Assigns the number of spots drawn by the slider's value
        num = ui.value;
        // Updates rows and columns
        row = num;
        col = num;
        // Maps the spots to the slider
        // Dynamnically resizes the spots diameter to screen size
        s.d = map(num, 3, 12, screenSize / 10, screenSize / 120);
        background(255);
        loop()
    }
});
