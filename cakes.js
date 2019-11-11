
// hover image
let defaultImage = document.querySelectorAll(".box-product");

function renderImage(){
    
    let circle = document.querySelectorAll(".circle");
        console.log(circle);

       for (let j = 0; j < defaultImage.length; j++){
           if (j === 0){
               
            defaultImage[j].style.display = "flex";
           } else {
            defaultImage[j].style.display = "none";
           }
       
    
            for (let i = 0; i < circle.length; i++){
                
                let singleCircle = circle[i];
                let image = defaultImage[i+1];
                singleCircle.addEventListener("mouseover", function(){
                    defaultImage[j].style.display = "none";
                    singleCircle.style.filter = "brightness(80%)";
                    singleCircle.style.cursor = "pointer";
                    image.style.display = "flex";
                });
        
                singleCircle.addEventListener("mouseout", function(){
                    singleCircle.style.filter = "brightness(100%)";
                    image.style.display = "flex";
                    
                });
            };

       };



};

renderImage();



//price settings

let prices = [
    [125, 220, 375, 425, 590],
    [250, 350, 450, 550, 650, 750, 850],
    [2000, 3000, 4000, 5500],
    [250, 350, 450, 550],
    [49, 80, 120, 190, 240,290,330, 380, 420, 480],
    [150, 200, 250, 300, 350],
];

let priceTag = document.querySelectorAll(".priceTag");
let eachBox = document.querySelectorAll(".product-desc");
console.log(priceTag);

function price(){
 
        for (let i = 0; i < priceTag.length; i++){
            let indivPrice = prices[i];
            let eachBoxPrice = priceTag[i];
            
            eachBoxPrice.textContent = "Price starts from " + indivPrice[0] + " SEK";
        };

};

price();

// slider

let slider = document.querySelectorAll(".slider");
let valueNum = document.querySelectorAll(".value");

let sliceArray = [
    [4, 6, 8, 10, 12],
    [4, 6, 8, 10, 12, 16, 20],
    [20, 30, 40, 60],
    [4, 6, 8, 10],
    [1,2,3,4,5,6,7,8,9,10],
    [4, 6, 8, 10, 12],
];

for (let i = 0; i < slider.length; i++){
        let output = document.createElement("p");
        let outputSpan = document.createElement("span");
        outputSpan.className="slider-value-span";
        output.className ="slider-value";
        output.style.color = "#ec6e81";
        output.style.fontSize = "17px";

        let tempText = sliceArray[i][slider[i].value];
        output.textContent = tempText + " slices. ";
        outputSpan.textContent = "Est price: " + prices[i][slider[i].value] + " kr";
        
        valueNum[i].appendChild(output);
        output.appendChild(outputSpan);
        
        console.log('ths is my i: ' + i);

         slider[i].oninput = function(){
             output.textContent = sliceArray[i][slider[i].value] + " slices. ";
             outputSpan.textContent =  "Est price: " + prices[i][slider[i].value] + " kr";
             output.appendChild(outputSpan);
             console.log('current i: ' + i);
        };
};


