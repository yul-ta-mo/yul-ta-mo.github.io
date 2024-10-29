/*var imgArray = new Array('img/cat1.jpg', 
'img/cat_2.jpg', 
'img/anim_3.jpg', 
'img/tiger_4.jpg', 
'img/anim_5.jpg',);

var i = 0;*/

// function changeImage(image) {
//     for (let i = 0; i < imgArray.length; i++) {
//         image.src = imgArray[i];
//         console.log(i, imgArray[i]); 
//     }
// }
/*window.onload = function () {
    let image = document.getElementById('image');
    
    image.onclick = function() {
        this.src = imgArray[++i % imgArray.length];
    }
}*/


const imageListCat = [
    'img/cat1.jpg', 
    'img/cat_2.jpg', 
    'img/anim_3.jpg', 
    'img/tiger_4.jpg', 
    'img/anim_5.jpg'
];

const imageListDog = [
    'img/dog.jpg', 
    'img/dog_2.jpg', 
    'img/dog_3.jpg',
];

//const srcChange = document.getElementsByClassName('slider-image-style');
const imageTagCat = document.getElementById('imageCat');
const imageTagDog = document.getElementById('imageDog');

function incrementer(start, step) {
    start = start || 0;
    step = step || 1;
    let increment = start;

    return function(isRefresh) {
        if (isRefresh) {
            increment = start;
        } else {
            increment += step;
        }

        return increment;
    }
}

function changeImageSrc(imageList, imageTag, incrementer) {
    return function () {
        let i = incrementer();

        if (i >= imageList.length) {
            i = incrementer(true);
        }
        
        imageTag.src = imageList[i];
    }
}


document.getElementById('imageCat').addEventListener('click', changeImageSrc(imageListCat, imageTagCat, incrementer()));
document.getElementById('imageDog').addEventListener('click', changeImageSrc(imageListDog, imageTagDog, incrementer()));

document.getElementById('nextButtonCat').addEventListener('click', changeImageSrc(imageListCat, imageTagCat, incrementer()));
document.getElementById('nextButtonDog').addEventListener('click', changeImageSrc(imageListDog, imageTagDog, incrementer()));


