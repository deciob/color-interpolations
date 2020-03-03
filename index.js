const d3 = require("d3");


const from = "#4682B4";
const to = "#FF0000";
const position = 0.2;
const hclInterpolation = d3.interpolateHcl(from, to)(position);

// interp (Color.rgb255 70 130 180) (Color.rgb255 255 0 0) 0.2
//
// toHcl from:
// { alpha = 1, chroma = 33.88100417355618, hue = 255.71009124439382, luminance = 51.98624890550498 }
//
// toHcl to:
// { alpha = 1, chroma = 106.83899941284552, hue = 40.85261277607024, luminance = 54.29173376861782 }
//
hclFrom = d3.hcl(from);
hclTo = d3.hcl(to);
console.log(`from: ${from}, hcl result`, hclFrom);
console.log(`to: ${to}, hcl result`, hclTo);
//
// fromHcl in:
// { alpha = 1, chroma = 48.47260322141405, hue = 0.7909405431964698, luminance = 52.44734587812755 }
//
// fromHcl out:
// fromLab { a = 48.4679847116882, alpha = 1, b = 0.6691196067953542, l = 52.44734587812755 }
fromLab = d3.lab(48.4679847116882, 52.44734587812755, 0.6691196067953542);
console.log(`fromLab: `, 255*0.7771519016613083, 255*0.337564227502974, 255*0.4952345113830839);
console.log(`fromLabExpected: `, d3.rgb(fromLab));
//
// fromLab out:
// RgbaSpace 0.7771519016613083 0.337564227502974 0.4952345113830839 1
// fromLabExpected:
// r: 191.74043939629706, g: 70.11092515188069, b: 116.47350473020799,
//
//
console.log(`from: ${from}, to: ${to}, position: ${position} `, (hclInterpolation));

// result:         rgb(198, 86,  216)
// expected result rgb(106, 121, 206)
