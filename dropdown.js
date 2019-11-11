
// dropdown
let dropdownButton = document.querySelectorAll("#product-menu");
let dropdown = document.querySelectorAll("#myDropdown");
let nav = document.querySelector("nav");
let navList = document.querySelectorAll("nav li a");
let option4 = document.querySelector("nav li:nth-child(4)");
let dropdownNestLink = document.querySelectorAll("#myDropdown a");

//Nested link

let dropdownNested = document.querySelectorAll("#myDropdownNested");


function parentDropdown(){
       
        
        for (let i = 0; i < dropdownButton.length; i++){
                
                let eachNavList = dropdownButton[i];
                //console.log(eachNavList.textContent);
        
                eachNavList.addEventListener("mouseover", function(){
                        dropdown[i].style.display = "block";
                        childDropdown();
                        
                });
                
                eachNavList.addEventListener("mouseout", function(){
                        dropdown[i].style.display = "none";
                      
                       
                });
        };
};

parentDropdown();

let nestedChildList = ["Cakes", "Cookies"]

function childDropdown(){

       

        for (let m = 0; m < dropdownNestLink.length; m++){
                let optionLink = dropdownNestLink[m];
                //console.log(optionLink.textContent);

                for (let j = 0; j < nestedChildList.length; j++){
                        let item = nestedChildList[j];
              
                        if ( optionLink.textContent === item){
                                console.log("found");

                                optionLink.addEventListener("mouseover", function(){
                                        dropdownNested[j].style.display = "block";
                                        console.log("yay");
                
                                        dropdownNested[j].addEventListener("mouseover", function(){
                                          console.log("nay");
                                          dropdownNested[j].style.display = "block";               
                                });
                
                                dropdownNested[j].addEventListener("mouseout", function(){
                                         console.log("nay");
                                         dropdownNested[j].style.display = "none";        
                                         });
                                });
                        
                                optionLink.addEventListener("mouseout", function(){
                                         console.log("nay");
                                         dropdownNested[j].style.display = "none";
                                });    
                        };
        
                };
        };
        
};
