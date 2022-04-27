function calculateArea(a, b) {
   //the coordinates of two of its opposite angles
    let xa1 = a[0].x;
    let ya1 = a[0].y;
    let xa2 = a[1].x;
    let ya2 = a[1].y;


    //the coordinates of two of its opposite angles
    let xb1 = b[0].x;
    let yb1 = b[0].y;
    let xb2 = b[1].x;
    let yb2 = b[1].y;

    let m;
    let l;
    let s;
    let j;

    if (xa2 >= xb2)
        m = xa2;
    else m = xb2;

    if (xa1 <= xb1)
        s = xa1;
    else s = xb1;

    if (ya1 <= yb1)
        l = ya1;
    else l = yb1;

    if (ya2 >= yb2)
        j = ya2;
    else j = yb2;

    let width = Math.abs(m - s) - Math.abs(xa1 - xa2) - Math.abs(xb1 - xb2);
    let lenght = Math.abs(j - l) - Math.abs(ya1 - ya2) - Math.abs(yb1 - yb2);
    console.log(lenght * width);
}
calculateArea([{ x: -8, y: -7 }, { x: -4, y: 0 }],
    [{ x: -5, y: -9 }, { x: -1, y: -2 }]);