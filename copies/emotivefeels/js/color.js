const cycle = document.querySelector(".cycle");
cycle.style.background = "hsl(240, 100%, 50%)";

function getRGBValues(color)
{
    const str = color.slice(4, -1);
    let values = str.split(", "); // split values
    values = values.map(value => Number(value)); // convert values to integers

    const rgb = {
        r: values[0],
        g: values[1],
        b: values[2]
    };

    return rgb;
}

function getKey(object, value)
{
    // get array of keys and iterate through object with values from array
    return Object.keys(object).find(key => object[key] === value);
}

function getHue(rgb)
{
    // get min and max from rgb values
    const val = Object.values(rgb);
    const min = Math.min(...val); /// "..." is the spread operator
    const max = Math.max(...val);
    const channel = getKey(rgb, max);
    let hue = "hello";

    // If Red is max, then Hue = (G - B) / (max - min)
    // If Green is max, then Hue = 2.0 + (B - R) / (max - min)
    // If Blue is max, then Hue = 4.0 + (R - G) / (max - min)

    switch (channel)
    {
        case 'r':
            hue = ((rgb.g - rgb.b) / (max - min));
            break;
        case 'g':
            hue = ((rgb.b - rgb.r) / (max - min)) + 2;
            break;
        case 'b':
            hue = ((rgb.r - rgb.g) / (max - min)) + 4;
            break;
        default:
            console.log("wasn't expecting that");
    }

    return Math.ceil(hue * 60);
}

function shiftColor(color)
{
    const rgb = getRGBValues(color);
    const hue = getHue(rgb);
    const nextHue = hue + 1;

    return nextHue;
}

function cycleColor()
{
    const color = cycle.style.background;
    const newHue = shiftColor(color);
    cycle.style.background = `hsl(${newHue}, 100%, 50%)`;
}

window.setInterval(cycleColor, 50);