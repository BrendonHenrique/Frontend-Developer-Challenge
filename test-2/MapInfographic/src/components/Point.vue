<template>
    <div :class="`point ${className}`" @click="$emit('handleClick', className)"></div>
</template>

<script>
export default {
    props:{
      className:{
        type:String,
        required: true
      }
    },
}
</script>

<style lang="sass">

  .point 
    position: absolute
    background-color: transparent
    border: 5px solid $primary
    height: 20px;
    width:  20px;
    border-radius: 50%;
    -moz-border-radius: 50%
    -webkit-border-radius: 50%
    transition: 0.3s all 
    animation-name: pulse
    animation-duration: 4s
    animation-iteration-count: infinite

  .point:hover
    background-color: $primary 
    cursor: pointer

  .point::after
    content: '' 
    background-color: transparent
    display: inline-block 
    width: 30px 
    position: relative 
    top: -10px 
    height: 30px 
    right: 10px 
    border-radius: 100% 
    border: 1.5px solid $primary
    
  @keyframes pulse
    0%
      transform: scale(1)
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7)

    20%
      transform: scale(1.2)
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0)

    30%
      transform: scale(0.95)
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0)
    
    100%
      transform: scale(1)


  // Mixin to set point position on map
  @mixin setPointPosition($latitude, $longitude ) 
    top: $latitude
    left: $longitude 

  // Target-Devices = Laptops, Desktops
  @media (min-width: 1025px)  
    .kuwait
      @include setPointPosition(19%, 53%)

    .bahrain
      @include setPointPosition(35%, 60%)

    .uae
      @include setPointPosition(44%, 66%)
      

  // Target-Devices = Tablets, Ipads (portrait)
  @media (min-width: 768px) and (max-width: 1024px) 
    .kuwait
      @include setPointPosition(29%, 51%)

    .bahrain
      @include setPointPosition(43%, 60%)

    .uae
      @include setPointPosition(50%, 66%)


  // Target-Devices = Low Resolution Tablets, Mobiles (Landscape)
  @media (min-width: 481px) and (max-width: 767px) 
    .kuwait
      @include setPointPosition(29%, 51%)

    .bahrain
      @include setPointPosition(43%, 59%)

    .uae
      @include setPointPosition(50%, 66%)


  // Target-Devices = Most of the Smartphones Mobiles (Portrait)
  @media (max-width: 480px) 
    .kuwait
      @include setPointPosition(36%, 55%)

    .bahrain
      @include setPointPosition(43%, 65%)

    .uae
      @include setPointPosition(45%, 77%)
    

</style>