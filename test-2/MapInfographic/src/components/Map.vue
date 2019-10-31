<template>
  <div>
    <img class="map">

      <slot> </slot>

      <div class="wave" />
      <div class="ocean1"></div>
      <div class="ocean2"></div>

    <img/>
  </div>
</template>

<style lang="sass">

  .ocean1
    background-color: #c2edf9e3
    position: absolute
    right: 10%
    bottom: 10% 
    height: 20px 
    width: 80px 
    animation: hiddenWave1 8s infinite
    animation-delay: 2s

  @keyframes hiddenWave1 
    0% 
      transform: translateX(120px)
    50% 
      transform: translateX(0px)
    100% 
      transform: translateX(120px)

  .ocean2
    background-color: #c2edf9e3
    position: absolute
    right: 10%
    bottom: 10% 
    height: 20px 
    width: 80px 
    animation: hiddenWave2 8s infinite

  @keyframes hiddenWave2 
    0% 
      transform: translateX(-100px)
    50% 
      transform: translateX(0px)
    100% 
      transform: translateX(-100px)



  .map 
    width: 100% 
    height: 100vh 
    position: relative !important

  // Target-Devices = Laptops, Desktops
  // Screen-resolutions = 1025px or higher
  @media (min-width: 1025px)  
    .map 
      content: url('../assets/desktop/desktop-map.png') 

    .wave
      position: absolute
      right: 10%
      bottom: 10% 
      height: 20px 
      width: 80px 
      content: url('../assets/icons/wave.png') 
  

  // Target-Devices = Tablets, Ipads (portrait)
  // Screen-resolutions = 768px to 1024px
  @media (min-width: 768px) and (max-width: 1024px) 
    .map 
      content: url('../assets/tablet/tablet-map.png') 


  // Target-Devices = Tablets, Ipads (landscape)
  // Screen-resolutions = 768px to 1024px
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) 
    .map 
      content: url('../assets/tablet/tablet-map.png') 


  // Target-Devices = Low Resolution Tablets, Mobiles (Landscape)
  // Screen-resolutions = 481px to 767px
  @media (min-width: 481px) and (max-width: 767px) 
    .map 
      content: url('../assets/tablet/tablet-map.png') 


  // Target-Devices = Most of the Smartphones Mobiles (Portrait)
  // Screen-resolutions = 479px or lower
  @media (max-width: 480px) 
    .map 
      content: url('../assets/mobile/mobile-map.png') 
  
</style>