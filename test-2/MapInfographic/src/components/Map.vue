<template>
  <div>
    
    <q-img class="map" />
    
    <slot> </slot>

    <wave/>
      
  </div>
</template>

<script>
export default {
  components:{
    'wave': require('../components/Wave').default
  }
}
</script>

<style lang="sass">

  .map 
    width: 100% 
    height: 100vh 
    position: relative !important

  // Target-Devices = Laptops, Desktops
  // Screen-resolutions = 1025px or higher
  @media (min-width: 1025px)  
    .map
      content: url('../assets/desktop/desktop-map.png') 

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