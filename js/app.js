'use strict';

let left = document.getElementById('firstImg');
let middle = document.getElementById('secondImg');
let right = document.getElementById('thirdImg');
let count = 0;
let maxCount = 25;
let leftIndex ;
let middleIndex ;
let rightIndex ;
let allImg=[];

function Products (prodName , photoPath){
  this.name = prodName;
  this.path = photoPath;
  this.itemShowNum=0;
  this.vote=0;
  allImg.push(this);
}


function objects() {
  new Products ('bag','..//img/bag.jpg');
  new Products ('banana','..//img/banana.jpg');
  new Products ('bathroom','..//img/bathroom.jpg');
  new Products ('boots','..//img/boots.jpg');
  new Products ('breakfast','..//img/breakfast.jpg');
  new Products ('bubblegum','..//img/bubblegum.jpg');
  new Products ('chair','..//img/chair.jpg');
  new Products ('cthulhu','..//img/cthulhu.jpg');
  new Products ('dog-duck','..//img/dog-duck.jpg');
  new Products ('dragon','..//img/dragon.jpg');
  new Products ('pen','..//img/pen.jpg');
  new Products ('pet-sweep','..//img/pet-sweep.jpg');
  new Products ('scissors','..//img/scissors.jpg');
  new Products ('shark','..//img/shark.jpg');
  new Products ('sweep','..//img/sweep.png');
  new Products ('unicorn','..//img/unicorn.jpg');
  new Products ('usb','..//img/usb.gif');
  new Products ('water-can','..//img/water-can.jpg');
  new Products ('tauntaun','..//img/tauntaun.jpg');
  new Products ('wine-glass','..//img/wine-glass.jpg');
}
objects();




function generateIndex() {
  return Math.floor(Math.random()*allImg.length);
}

function renderImg() {
  leftIndex=generateIndex();
  middleIndex=generateIndex();
  rightIndex=generateIndex();

  while (leftIndex === rightIndex || leftIndex === middleIndex || rightIndex === middleIndex) {
    rightIndex= generateIndex();
    middleIndex= generateIndex();
  }
  allImg[leftIndex].itemShowNum+=1;
  allImg[middleIndex].itemShowNum+=1;
  allImg[rightIndex].itemShowNum+=1;

  left.setAttribute('src',allImg[leftIndex].path);
  middle.setAttribute('src',allImg[middleIndex].path);
  right.setAttribute('src',allImg[rightIndex].path);

}
renderImg();




left.addEventListener('click',clickHandle);
middle.addEventListener('click',clickHandle);
right.addEventListener('click',clickHandle);

function clickHandle(event) {
  count++;

  if (maxCount> count) {
    if(event.target.id === 'firstImg'){
      allImg[leftIndex].vote++;
    }else if(event.target.id === 'secondImg'){
      allImg[middleIndex].vote++;
    }else{
      allImg[rightIndex].vote++;
    }
    renderImg();

  }else{let ul=document.getElementById('list');
    for (let i = 0; i < allImg.length; i++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent=`${allImg[i].name} has been shown ${allImg[i].itemShowNum} , and it has ${allImg[i].vote} votes`;
    }
    left.removeEventListener('click',clickHandle);
    middle.removeEventListener('click',clickHandle);
    right.removeEventListener('click',clickHandle);

  }
}
