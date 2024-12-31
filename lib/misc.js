export const hexToRGB = (hexCode) => {
    var trimmed = hexCode.replace('#', '');

    var intVal = parseInt(trimmed, 16);
    var r = (intVal >> 16) & 255;
    var g = (intVal >> 8) & 255;
    var b = intVal & 255;

    return r + ',' + g + ',' + b;
}