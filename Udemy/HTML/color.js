/* function hex(r,g,b) {
    return (
        '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    );
}

function makeColor(r,g,b) {
    const color = {}
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function(){
        return `rgb(${r}, ${g}, ${b})`
    }
    return color;
}
 */

/*
function Color(r,g,b) {
    this.r = r;
    this.g = g;
    this.b = b;

}

//new create a new plane object
//and then set the construture
new Color(255,0,0)

Color.prototype.rgb = function() {
    const {r,g,b} = this;
    return `rgb(${r}, ${g}, ${b})`
};

Color.prototype.hex = function() {
    const {r,g,b} = this;
    return (
        '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    );
};

Color.prototype.rgba = function(a = 1.0){
    const {r,g,b} = this;
    return `rgba(${r},${g},${b},${a})`
}
const Red = new Color(255,0,0)
*/

//Using Class

class Color{

    //execute imediately when class created
    constructor(r,g,b, name){
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }

    greet(){
        console.log(`Hello from ${this.name}`)
    }

    rgb() {
        //return `rgb(${this.r}, ${this.g}, ${this.b})`
        return `rgb(${this.innerRGB()})`
    };

    rgba( a = 1.0) {
        return `rgb(${this.innerRGB()}, ${a})`
    };

    hex(){
        const {r,g,b} = this;
        return (
            '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    };

    innerRGB(){
        return `${this.r}, ${this.g}, ${this.b}`
    }
}

const Red = new Color(255,0,0,'Red')

