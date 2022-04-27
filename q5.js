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
    
//find the max x2point 
    if (xa2 >= xb2)
        m = xa2;
    else m = xb2;

//find the min x1 point
    if (xa1 <= xb1)
        s = xa1;
    else s = xb1;

//find the max y2 point
    if (ya2 >= yb2)
        j = ya2;
    else j = yb2;

//find the min y1 point
    if (ya1 <= yb1)
        l = ya1;
    else l = yb1;

//calculation of overlapped area
    let width = (Math.abs(xa1 - xa2) + Math.abs(xb1 - xb2)) - Math.abs(m - s);
    let lenght = (Math.abs(ya1 - ya2) + Math.abs(yb1 - yb2)) - Math.abs(j - l);
    let area = lenght * width;

    if(area === 0){
        console.log("There is no overlap");
    }
    else{
        console.log(area);
    }
    
}
calculateArea([{ x: -8, y: -7 }, { x: -4, y: 0 }],
[{ x: -5, y: -9 }, { x: -1, y: -2 }]);
 


 //second approach(with less code and calculation)

/* function calculateArea(a, b) {
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
 
     let x;
     let y;

     let width =  Math.min(xa2, xb2) - Math.max(xa1, xb1);
     let lenght =  Math.min(ya2, yb2) - Math.max(ya1, yb1);
     let area = lenght * width;
 
     if(area === 0){
         console.log("There is no overlap");
     }
     else{
         console.log(area);
     }
     
 }
 calculateArea([{ x: -8, y: -7 }, { x: -4, y: 0 }],
 [{ x: -5, y: -9 }, { x: -1, y: -2 }]);
 */