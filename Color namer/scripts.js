/*TODO:
    white text
*/
const list = ["#000000 Black",
    "#000080 Navy",
    "#00008B DarkBlue",
    "#0000CD MediumBlue",
    "#0000FF Blue",
    "#006400 DarkGreen",
    "#008000 Green",
    "#008080 Teal",
    "#008B8B DarkCyan",
    "#00BFFF DeepSkyBlue",
    "#00CED1 DarkTurquoise",
    "#00FA9A MediumSpringGreen",
    "#00FF00 Lime",
    "#00FF7F SpringGreen",
    "#00FFFF Aqua",
    "#00FFFF Cyan",
    "#191970 MidnightBlue",
    "#1E90FF DodgerBlue",
    "#20B2AA LightSeaGreen",
    "#228B22 ForestGreen",
    "#2E8B57 SeaGreen",
    "#2F4F4F DarkSlateGray",

    "#32CD32 LimeGreen",
    "#3CB371 MediumSeaGreen",
    "#40E0D0 Turquoise",
    "#4169E1 RoyalBlue",
    "#4682B4 SteelBlue",
    "#483D8B DarkSlateBlue",
    "#48D1CC MediumTurquoise",
    "#4B0082 Indigo",
    "#556B2F DarkOliveGreen",
    "#5F9EA0 CadetBlue",
    "#6495ED CornflowerBlue",
    "#663399 RebeccaPurple",
    "#66CDAA MediumAquaMarine",
    "#696969 DimGray",

    "#6A5ACD SlateBlue",
    "#6B8E23 OliveDrab",
    "#708090 SlateGray",

    "#778899 LightSlateGray",

    "#7B68EE MediumSlateBlue",
    "#7CFC00 LawnGreen",
    "#7FFF00 Chartreuse",
    "#7FFFD4 Aquamarine",
    "#800000 Maroon",
    "#800080 Purple",
    "#808000 Olive",
    "#808080 Gray",

    "#87CEEB SkyBlue",
    "#87CEFA LightSkyBlue",
    "#8A2BE2 BlueViolet",
    "#8B0000 DarkRed",
    "#8B008B DarkMagenta",
    "#8B4513 SaddleBrown",
    "#8FBC8F DarkSeaGreen",
    "#90EE90 LightGreen",
    "#9370DB MediumPurple",
    "#9400D3 DarkViolet",
    "#98FB98 PaleGreen",
    "#9932CC DarkOrchid",
    "#9ACD32 YellowGreen",
    "#A0522D Sienna",
    "#A52A2A Brown",
    "#A9A9A9 DarkGray",

    "#ADD8E6 LightBlue",
    "#ADFF2F GreenYellow",
    "#AFEEEE PaleTurquoise",
    "#B0C4DE LightSteelBlue",
    "#B0E0E6 PowderBlue",
    "#B22222 FireBrick",
    "#B8860B DarkGoldenRod",
    "#BA55D3 MediumOrchid",
    "#BC8F8F RosyBrown",
    "#BDB76B DarkKhaki",
    "#C0C0C0 Silver",
    "#C71585 MediumVioletRed",
    "#CD5C5C IndianRed",
    "#CD853F Peru",
    "#D2691E Chocolate",
    "#D2B48C Tan",
    "#D3D3D3 LightGray",

    "#D8BFD8 Thistle",
    "#DA70D6 Orchid",
    "#DAA520 GoldenRod",
    "#DB7093 PaleVioletRed",
    "#DC143C Crimson",
    "#DCDCDC Gainsboro",
    "#DDA0DD Plum",
    "#DEB887 BurlyWood",
    "#E0FFFF LightCyan",
    "#E6E6FA Lavender",
    "#E9967A DarkSalmon",
    "#EE82EE Violet",
    "#EEE8AA PaleGoldenRod",
    "#F08080 LightCoral",
    "#F0E68C Khaki",
    "#F0F8FF AliceBlue",
    "#F0FFF0 HoneyDew",
    "#F0FFFF Azure",
    "#F4A460 SandyBrown",
    "#F5DEB3 Wheat",
    "#F5F5DC Beige",
    "#F5F5F5 WhiteSmoke",
    "#F5FFFA MintCream",
    "#F8F8FF GhostWhite",
    "#FA8072 Salmon",
    "#FAEBD7 AntiqueWhite",
    "#FAF0E6 Linen",
    "#FAFAD2 LightGoldenRodYellow",
    "#FDF5E6 OldLace",
    "#FF0000 Red",
    "#FF00FF Fuchsia",
    "#FF00FF Magenta",
    "#FF1493 DeepPink",
    "#FF4500 OrangeRed",
    "#FF6347 Tomato",
    "#FF69B4 HotPink",
    "#FF7F50 Coral",
    "#FF8C00 DarkOrange",
    "#FFA07A LightSalmon",
    "#FFA500 Orange",
    "#FFB6C1 LightPink",
    "#FFC0CB Pink",
    "#FFD700 Gold",
    "#FFDAB9 PeachPuff",
    "#FFDEAD NavajoWhite",
    "#FFE4B5 Moccasin",
    "#FFE4C4 Bisque",
    "#FFE4E1 MistyRose",
    "#FFEBCD BlanchedAlmond",
    "#FFEFD5 PapayaWhip",
    "#FFF0F5 LavenderBlush",
    "#FFF5EE SeaShell",
    "#FFF8DC Cornsilk",
    "#FFFACD LemonChiffon",
    "#FFFAF0 FloralWhite",
    "#FFFAFA Snow",
    "#FFFF00 Yellow",
    "#FFFFE0 LightYellow",
    "#FFFFF0 Ivory",
    "#FFFFFF White"];

const rgbInput = document.getElementById("rgb-input");
const hslInput = document.getElementById("hsl-input");
const colorInput = document.getElementById("color-input");
const my_color_box = document.getElementById("my-color-box");

rgbInput.addEventListener("change", rgbUpdate);
hslInput.addEventListener("change", hslUpdate);
colorInput.addEventListener("change", colorUpdate);

let colors = [];
list.forEach((color)=>
{
    let hex = color.split(" ")[0];
    let name = color.split(" ")[1];
    let red = parseInt(hex.substr(1,2),16);
    let green = parseInt(hex.substr(3,2),16);
    let blue = parseInt(hex.substr(5,2),16);
    colors.push([RGBtoLab(red,green,blue),name,hex]);
});

function rgbUpdate()
{
    let code = this.value;
    if(code[0]==='#')
    {
        code=code.slice(1);
    }
    const pattern = /^[0-9AaBbCcDdEeFf]{6}$/;
    if (!code.match(pattern)) throw InputException(code);



    let r = parseInt(code.substr(0, 2), 16);
    let g = parseInt(code.substr(2, 2), 16);
    let b = parseInt(code.substr(4, 2), 16);

    my_color_boxUpdate(r,g,b,"#"+code);

    colorFinder(r,g,b);
}
function hslUpdate()
{
    let code = this.value;
    const pattern = /^(([0-9](.[0-9]+)?)+%,){2}([0-9](.[0-9]+)?)+%$/;

    if(!code.match(pattern)) throw InputException(code);

    code = code.split(",");
    let h = parseFloat(code[0])/100;
    let s = parseFloat(code[1])/100;
    let l = parseFloat(code[2])/100;

    if(h>1||s>1||l>1) throw InputException(code);

    //Thanks, stack overflow!
    let r, g, b;

    if(s === 0){
        r = g = b = l; // achromatic
    }
    else
    {
        let hue2rgb = function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        };

        let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        let p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }
    r = Math.round(r * 255);
    g = Math.round(g * 255);
    b = Math.round(b * 255);
    //Will write my version later...

    let hex = toHex(r,g,b);

    my_color_boxUpdate(r,b,g,hex);

    colorFinder(r,g,b);
}

function toHex(r,g,b)
{
    r=r.toString(16);
    g=g.toString(16);
    b=b.toString(16);
    if(r.length===1) r = "0"+r;
    if(b.length===1) b = "0"+b;
    if(g.length===1) g = "0"+g;
    return "#"+r+g+b;

}

function colorUpdate()
{
    let code = this.value;

    code=code.slice(1);
    let r = parseInt(code.substr(0, 2), 16);
    let g = parseInt(code.substr(2, 2), 16);
    let b = parseInt(code.substr(4, 2), 16);

    my_color_boxUpdate(r,g,b,"#"+code);

    colorFinder(r,g,b);
}

function my_color_boxUpdate(r,g,b,hex)
{
    my_color_box.style.background=hex;
    my_color_box.getElementsByClassName("color-hex")[0].innerText=hex.toUpperCase();
    colorInput.value=hex;

    if(whiteText(r,g,b)) my_color_box.style.color="white";
    else my_color_box.style.color="black";
}
/**
 * @return {string}
 */
function InputException(input)
{
    return input.toString() + " wrong input!";
}

/*
    Color conversions:
*/
function RGBtoLab(r,g,b) //Thanks, EasyRGB!
{
    r =  r / 255 ;
    g =  g / 255 ;
    b =  b / 255 ;

    if ( r > 0.04045 ) r = ( ( r + 0.055 ) / 1.055 ) ** 2.4;
    else                   r = r / 12.92;
    if ( g > 0.04045 ) g = ( ( g + 0.055 ) / 1.055 ) ** 2.4;
    else                   g = g / 12.92;
    if ( b > 0.04045 ) b = ( ( b + 0.055 ) / 1.055 ) ** 2.4;
    else                   b = b / 12.92;

    r = r * 100;
    g = g * 100;
    b = b * 100;

    let X = r * 0.4124 + g * 0.3576 + b * 0.1805;
    let Y = r * 0.2126 + g * 0.7152 + b * 0.0722;
    let Z = r * 0.0193 + g * 0.1192 + b * 0.9505;

    const refX = 99.001;
    const refY = 100.000;
    const refZ = 83.134;

    X = X /refX;
    Y = Y /refY;
    Z = Z /refZ;

    if ( X > 0.008856 ) X = X ** ( 1/3 );
    else                    X = ( 7.787 * X ) + ( 16 / 116 );
    if ( Y > 0.008856 ) Y = Y ** ( 1/3 );
    else                    Y = ( 7.787 * Y ) + ( 16 / 116 );
    if ( Z > 0.008856 ) Z = Z ** ( 1/3 );
    else                    Z = ( 7.787 * Z ) + ( 16 / 116 );

    let CL = ( 116 * Y ) - 16;
    let Ca = 500 * ( X - Y );
    let Cb = 200 * ( Y - Z );

    return [CL,Ca,Cb];
}

function findClosest(color)
{
    const N = 3;
    let min = [Infinity, Infinity, Infinity];
    let name = ["?","?","?"];
    let hex = ["#ERROR","#ERROR","#ERROR"];
    colors.forEach((v) => {
        let d = colorDistance(color,v[0]);
        for(let i=0;i<N;i++)
        {
            if(d<min[i])
            {
                min[i] = d;
                name[i] = v[1];
                hex[i] = v[2];
                break;
            }
        }

    });
    return [name,hex];
}

function colorDistance(c1,c2)
{
    return Math.sqrt((c1[0]-c2[0])**2+(c1[1]-c2[1])**2+(c1[2]-c2[2])**2);
}

function showColor(name,hex)
{
    const color_box1 = document.getElementById("color-box1");
    const color_box2 = document.getElementById("color-box2");
    const color_box3 = document.getElementById("color-box3");

    color_box1.getElementsByClassName("color-name")[0].innerText=name[0];
    color_box2.getElementsByClassName("color-name")[0].innerText=name[1];
    color_box3.getElementsByClassName("color-name")[0].innerText=name[2];

    let r1 = parseInt(hex[0].substr(1, 2),16);
    let g1=parseInt(hex[0].substr(3, 2),16);
    let b1=parseInt(hex[0].substr(5, 2),16);
    let r2=parseInt(hex[1].substr(1, 2),16);
    let g2=parseInt(hex[1].substr(3, 2),16);
    let b2=parseInt(hex[1].substr(5, 2),16);
    let r3 = parseInt(hex[2].substr(1, 2),16);
    let g3=parseInt(hex[2].substr(3, 2),16);
    let b3=parseInt(hex[2].substr(5, 2),16);

    if(whiteText(r1,g1,b1)) color_box1.style.color="white";
    else color_box1.style.color="black";
    if(whiteText(r2,g2,b2)) color_box2.style.color="white";
    else color_box2.style.color="black";
    if(whiteText(r3,g3,b3)) color_box3.style.color="white";
    else color_box3.style.color="black";

    color_box1.getElementsByClassName("color-hex")[0].innerText=hex[0];
    color_box2.getElementsByClassName("color-hex")[0].innerText=hex[1];
    color_box3.getElementsByClassName("color-hex")[0].innerText=hex[2];

    color_box1.style.background=hex[0];
    color_box2.style.background=hex[1];
    color_box3.style.background=hex[2];
}

function colorFinder(r,g,b)
{
    showColor(...findClosest(RGBtoLab(r,g,b)));
}

function whiteText(r,g,b)
{
    return ((299*r + 587*g + 114*b)/1000)<150;
}