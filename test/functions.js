// Query selector alias 
const $ = document.querySelectorAll.bind(document);

// cars initializing 
const car1 = $('.cars__vertical')[0]; 
const car2 = $('.cars__horizontal')[0];

// travelTime initializing, lower value to higher speed
const travelTime = 20;

// Traffic lights initializing
const verticalTrafficLights = $('.traffic-light')[0];
const horizonalTrafficLights = $('.traffic-light')[1];


/*
    Vertical traffic control 
*/
const closeVerticalTraffic = function() {
    // traffic red light. It will add closed class and fill his background with red 
    verticalTrafficLights.classList.add("closed");
    // traffic green light background will be filled with white 
    verticalTrafficLights.style.setProperty('--background', 'white');
}

const openVerticalTraffic = function() {
    // traffic red light. It will remove closed class and fill his background with white
    verticalTrafficLights.classList.remove("closed");
    // traffic green light background will be filled with green
    verticalTrafficLights.style.setProperty('--background', 'green');
}

const toggleVerticalTraffic = function (horizontalTrafficLightIsOpened) {
    horizontalTrafficLightIsOpened ? closeVerticalTraffic() : openVerticalTraffic(); 
}



/*
    Horizontal traffic control 
*/
const closeHorizontalTraffic = function() {
    // traffic red light. It will remove closed class and fill his background with white
    horizonalTrafficLights.classList.remove("opened");
    // traffic green light background will be filled with red
    horizonalTrafficLights.style.setProperty('--background', 'red');
}

const openHorizontalTraffic = function() {
    // traffic green light. It will add opened class and fill his backgroud with green
    horizonalTrafficLights.classList.add("opened");
    // traffic red light backgroud will be filled with white
    horizonalTrafficLights.style.setProperty('--background', 'white');
}

const toggleHorizontalTraffic = function (horizontalTrafficLightIsOpened) {
    horizontalTrafficLightIsOpened ? openHorizontalTraffic() : closeHorizontalTraffic();
}



/* 
    Traffic light toggle
*/ 
let horizontalTrafficIsOpened = true;
setInterval(function(){
    horizontalTrafficIsOpened = !horizontalTrafficIsOpened;
    toggleHorizontalTraffic(horizontalTrafficIsOpened);
    toggleVerticalTraffic(horizontalTrafficIsOpened)
},15000);


/* 
    Cars moviment based on travel time
*/ 

let horizontalCarPosition = 0;
let verticalCarPosition = -450;

// This function will help to stop the car before the crosswalk and prevent car crashes 
const isOnCrosswalk = function(carPosition, crossWalkBegin, crossWalkEnd) {
    return carPosition >= crossWalkBegin && carPosition <= crossWalkEnd ? true : false;
}

setInterval(function() {

    if(!(isOnCrosswalk(verticalCarPosition, -340, -300) && horizontalTrafficIsOpened)){ 
        // moviment vertical car
        if(verticalCarPosition  === -10) verticalCarPosition  = -460 
        car1.style.top = verticalCarPosition  + 'px';
        verticalCarPosition ++; 
    }

    if(!(isOnCrosswalk(horizontalCarPosition, 130, 170) && !horizontalTrafficIsOpened) ){
        // Moviment horizontal car
        if(horizontalCarPosition === 500) horizontalCarPosition = -10
        car2.style.left = horizontalCarPosition+'px'
        horizontalCarPosition++
    }

},travelTime);
