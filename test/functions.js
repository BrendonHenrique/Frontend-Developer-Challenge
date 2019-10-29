// Query selector alias 
const $ = document.querySelectorAll.bind(document);

// cars initializing 
const car1 = $('.cars__vertical')[0]; 
const car2 = $('.cars__horizontal')[0];
const velocity = 30;

// Road initializing 
const road = $('.quarter')[0];
const roadHeight = road.clientHeight;
const roadWidth = road.clientWidth;

// Traffic lights initializing
const verticalTrafficLights = $('.traffic-light')[0];
const horizonalTrafficLights = $('.traffic-light')[1];

const toggleHorizontalTraffic = function (opened){
    if(opened){
        // traffic green light
        horizonalTrafficLights.classList.add("opened");
        // traffic red light
        horizonalTrafficLights.style.setProperty('--background', 'white');
    }else{
        // traffic green light
        horizonalTrafficLights.classList.remove("opened");
        // traffic red light
        horizonalTrafficLights.style.setProperty('--background', 'red');
    }
}

const toggleVerticalTraffic = function (opened){
    if(opened){
        // traffic green light
        verticalTrafficLights.classList.add("closed");
        // traffic red light
        verticalTrafficLights.style.setProperty('--background', 'white');
    }else{
        // traffic green light
        verticalTrafficLights.classList.remove("closed");
        // traffic red light
        verticalTrafficLights.style.setProperty('--background', 'green');
    }
}


let toggle = true ;

setInterval(function(){
    toggle = !toggle;
    toggleHorizontalTraffic(toggle);
    toggleVerticalTraffic(toggle)
},5000);