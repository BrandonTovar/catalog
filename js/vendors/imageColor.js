function chngTxtRGB(elImg=Object,elements) {
    var names=['body','div','html'];
    if(!Array.isArray(elements)) {
        var temp=elements;
        var elements=[];
        elements[0]=temp;
    }
    
    document.addEventListener('readystatechange',function() { 
        if(document.readyState=="complete") {
            var rgb=getAverageRGB(elImg);
            for(element of elements) {
                if(names.includes(element.localName)) {
                    element.style.backgroundColor='rgb('+rgb.r+','+rgb.g+','+rgb.b+')';
                } else {
                    element.style.color='rgb('+rgb.r+','+rgb.g+','+rgb.b+')';
                }
            }
        }
    })
}

img=document.getElementById("i");
elementos=[document.getElementById("text"),document.body];
chngTxtRGB(img,elementos); 

function getAverageRGB(imgEl){ 
    var blockSize=5, 
        defaultRGB={r:0,g:0,b:0}, 
        canvas=document.createElement('canvas'),
        context=canvas.getContext&&canvas.getContext('2d'),
        data, width, height,
        i=-4, length, rgb={r:0,g:0,b:0},
        count=0;

    if(!context){return defaultRGB}
    height=canvas.height=imgEl.naturalHeight||imgEl.offsetHeight||imgEl.height;width=canvas.width=imgEl.naturalWidth||imgEl.offsetWidth||imgEl.width;
    context.drawImage(imgEl,0,0);
    try {
        data=context.getImageData(0,0,width,height)
    } catch(e) {
        alert('x');
        return defaultRGB
    }

    length=data.data.length;
    while((i+=blockSize*4)<length) { 
        ++count;
        rgb.r+=data.data[i];
        rgb.g+=data.data[i+1]
        ;rgb.b+=data.data[i+2]
    } 

    rgb.r=(rgb.r/count);
    rgb.g=(rgb.g/count);
    rgb.b=(rgb.b/count);

    return rgb
}

// function chngTxtRGB(elImg  = Object, elements = Array){
    
    
//     var names = ['body', 'div', 'html']
//     if (!Array.isArray(elements))
//     {
//         var temp = elements;
//         var elements = [];
//         elements[0] = temp;

//     }
    
//     document.addEventListener('readystatechange', function() {
//         if (document.readyState == "complete")
//         {
//             var rgb = getAverageRGB(elImg);
//             for (element of elements)
//             {
//                 if (names.includes(element.localName) )
//                 {
//                     element.style.backgroundColor = 'rgb('+rgb.r+','+rgb.g+','+rgb.b+')';
//                 }
//                 else
//                 {
//                     element.style.color = 'rgb('+rgb.r+','+rgb.g+','+rgb.b+')';
//                 }
                
//             }
            
//         }
//     });
// }


// img = document.getElementById("i");
// elementos = [document.getElementById("text"), document.body];

// chngTxtRGB(img, elementos)



// function getAverageRGB(imgEl) {
    
//     var blockSize = 5, // only visit every 5 pixels
//         defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
//         canvas = document.createElement('canvas'),
//         context = canvas.getContext && canvas.getContext('2d'),
//         data, width, height,
//         i = -4,
//         length,
//         rgb = {r:0,g:0,b:0},
//         count = 0;
        
//     if (!context) {
//         return defaultRGB;
//     }
//     height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
//     width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;
    
//     context.drawImage(imgEl, 0, 0);
    
//     try {
//         data = context.getImageData(0, 0, width, height);
//     } catch(e) {
//         /* security error, img on diff domain */alert('x');
//         return defaultRGB;
//     }
    
//     length = data.data.length;
    
//     while ( (i += blockSize * 4) < length ) {
//         ++count;
//         rgb.r += data.data[i];
//         rgb.g += data.data[i+1];
//         rgb.b += data.data[i+2];
//     }
    
//     // ~~ used to floor values
//     rgb.r = ~~(rgb.r/count);
//     rgb.g = ~~(rgb.g/count);
//     rgb.b = ~~(rgb.b/count);
    
//     return rgb;
    
// }