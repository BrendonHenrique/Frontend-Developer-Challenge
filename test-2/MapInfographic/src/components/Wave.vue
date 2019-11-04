<template funtional>
  <div>
  
      <div class="wave arabian-sea-bottom" />
      <div class="ocean ocean-first-moviment arabian-sea-bottom ocean-moviment-first-delay"/>
      <div class="ocean ocean-second-moviment arabian-sea-bottom"/>
      
      <div class="wave arabian-sea-top" />
      <div class="ocean ocean-first-moviment arabian-sea-top ocean-moviment-second-delay"/>
      <div class="ocean ocean-second-moviment arabian-sea-top"/>
  
      <div class="wave arabian-sea-left" />
      <div class="ocean ocean-first-moviment arabian-sea-left ocean-moviment-third-delay"/>
      <div class="ocean ocean-second-moviment arabian-sea-left"/>
  
  </div>
</template>

<style lang="sass">

    // Target-Devices = Laptops, Desktops
    // Screen-resolutions = 1025px or higher
    @media (min-width: 1025px)  

        @mixin setWavePosition($latitude, $longitude)
            bottom: $latitude
            right: $longitude 

        .arabian-sea-top
            @include setWavePosition(30%,5%)  
        
        .arabian-sea-bottom
            @include setWavePosition(8%,10%)  
        
        
        .arabian-sea-left
            @include setWavePosition(15%,20%)  
        

        .wave
            content: url('../assets/icons/wave.png') 
            position: absolute
            height: 20px 
            width: 80px 

        .ocean 
            background-color: #c2edf9e3
            position: absolute
            height: 20px 
            width: 80px 


        .ocean-first-moviment
            animation: hiddenWave1 8s infinite
        
        .ocean-moviment-first-delay 
            animation-delay: 2s

        .ocean-moviment-second-delay 
            animation-delay: 2.5s
        
        .ocean-moviment-third-delay 
            animation-delay: 3s


        @keyframes hiddenWave1 
            0% 
                transform: translateX(120px)
            50% 
                transform: translateX(0px)
            100% 
                transform: translateX(120px)


        .ocean-second-moviment
            animation: hiddenWave2 8s infinite

        @keyframes hiddenWave2 
            0% 
                transform: translateX(-100px)
            50% 
                transform: translateX(0px)
            100% 
                transform: translateX(-100px)

</style>