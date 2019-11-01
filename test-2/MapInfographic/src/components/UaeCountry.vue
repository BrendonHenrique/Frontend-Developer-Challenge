<template>
   <!-- UAE Country -->
    <q-dialog  v-model="vModel" full-width full-height persistent>
      <q-card class="uae-card" style="box-shadow: 0px 0px 15px 0px white; background-color: #F5F5F0">
        
        <!-- Close button -->
        <q-card-actions align="right" class="close-button">
          <q-btn round flat icon="close" color="primary"  
          @click="$emit('closeUaeCountry')" />
        </q-card-actions>
        <!--  -->
        
        <!-- Title & subtitle -->
        <q-card-section class="uae-title">
            {{uaeJsonContent.title}}
          <div class="uae-subtitle">
            {{uaeJsonContent.subtitle}}
          </div>
        </q-card-section> 
        <!--  -->

        <!-- uae content -->
        <div class="row" style="z-index:1;padding: 0 10px;">
         
          <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4" style="z-index: 1;">
            
            <!-- Info box -->
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 uae-info-box">
              <div style="background-color: rgb(234, 235, 226); padding: 15px 0px;">
                <p class="uae-benefits-box-title" style="margin: 0px 10px -15px !important">Lorem ipsum</p>
                <ul  style="padding-left: 30px;"> 
                  <li class="uae-benefits-box-info">
                    {{uaeJsonContent.infobox.items[0].text}}
                  </li>
                </ul>
              </div>
            </div>
            <!--  -->
            
            <!-- Benefits box -->
            <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8 uae-benefits-box-container">
              
              <!-- Title -->
              <div class="uae-benefits-box-title q-mb-sm">
                {{uaeJsonContent.benefitsbox.title}}
              </div>
              <!--  -->
              
              <!-- Benefits content -->
              <div class="column q-gutter-sm">
                <div :key="index" class="col-xs-12 col-md-5 col-sm-5 col-lg-4   uae-benefits-box-info" 
                v-for="(benefit, index) in uaeJsonContent.benefitsbox.items">
                  <div class="row">
                    <!-- gifs -->
                    <div class="col-2">
                      <q-img :class="benefit.img" />
                    </div>
                    <!--  -->
                    <div class="col-10" style="padding: 5px 10px;">
                      {{benefit.text}}
                    </div>

                  </div>
                </div>
              </div>
              <!--  -->

            </div>
            <!--  -->

          </div>
         
          <div class="col-xs-12 col-sm-4 col-md-5 col-lg-5 ">

            <!-- uae background gif -->
            <q-img class="uae-background" />
            <!--  -->
      
          </div>

          <!-- uae factbox -->
          <div class=" col-xs-12 col-sm-4 col-md-3 col-lg-3 uae-fact-box-container">
            <strong class="uae-fact-box-title">
              {{uaeJsonContent.factbox.title}}
            </strong>
            <p class="uae-fact-box-info">
              {{uaeJsonContent.factbox.topics[0].text}}
            </p>
          </div>
          <!--  -->
        
        </div>
        <!--  -->

      </q-card>
    </q-dialog>
    <!--  -->
</template>

<script>
export default {
  props:['vModel','jsonContent'],
  data(){
    return{
      uaeJsonContent: {}
    }
  },
  beforeMount(){

    // Cada componente deve ter sua própria referência do conteúdo do json
    // assim cada um vai poder alterar conforme os icones que usarem em BenefitsBox

    Object.assign(this.uaeJsonContent, this.jsonContent);

    // Alterar o conteudo de benefitsbox.items.img e colocar a classe dos icones 
    // assim eu posso reutilizar a estrutura em um laço de repetição
    this.uaeJsonContent.benefitsbox.items.forEach( (item, index) => { 
      if(index === 0){
        item.img = 'computer'
      }else if(index === 1){
        item.img = 'watch'
      }else{
        item.img = 'cel'
      }
    });

  }
}
</script>


<style lang="sass" >

  $font-color-primary: #697882
  $font-color-secondary: #005f87
  $font-color-tertiary: #555f69

  @mixin setFontSizeAndColor($fontSize, $color)
    font-size: $fontSize 
    color: $color 

  .uae-info-box
    padding: 0 15px 10px 15px
    @include setFontSizeAndColor(16px, $font-color-secondary)
  
  .uae-subtitle 
    @include setFontSizeAndColor(30px, $font-color-primary)
  
  .uae-fact-box-title 
    @include setFontSizeAndColor(18px, $font-color-secondary)
  
  .uae-fact-box-info 
    @include setFontSizeAndColor(16px, $font-color-tertiary)
  

  // Target-Devices = Laptops, Desktops
  @media (min-width: 600px) 
    .cel 
      width: 40px 
      content: url('../assets/icons/icon3.gif') 

    .watch 
      width: 40px
      content: url('../assets/icons/icon4.gif') 

    .computer 
      width: 40px
      content: url('../assets/icons/icon5.gif') 

    .uae-background 
      width: 90% 
      height: 90% 
      bottom: 0 
      left: 0% 
      position: absolute 
      z-index: 0 
      content: url('../assets/desktop/desktop-UAE.gif') 
       
    .uae-title 
      @include setFontSizeAndColor(52px, $font-color-primary)
      z-index: 1 
      height: 10rem
      width: 30rem
      padding-left: 25px !important
      position: relative !important
      top: 0 !important
      background-color: transparent

    .close-button 
      position: relative !important 
      top: -1px !important
      z-index: 1 !important

    .uae-benefits-box-title
      @include setFontSizeAndColor(18px, $font-color-secondary)

    .uae-benefits-box-container
      padding: 0 15px 

    .uae-benefits-box-info 
      @include setFontSizeAndColor(14px, $font-color-secondary)

    .uae-fact-box-container 
      top: -2.5em
      position: absolute
      margin-top: 34vh
      margin-left: 63vw
      z-index: 1
      padding: 10px




  // Target-Devices = Low Resolution Tablets, Mobiles 
  @media (max-width: 601px)
  
    .uae-subtitle 
      @include setFontSizeAndColor(20px, $font-color-primary)
  
    .uae-title 
      @include setFontSizeAndColor(30px, $font-color-primary)
      z-index: 2 
      padding: 0px 30px 10px 30px !important
      position: sticky !important
      top: 57px !important
      background-color: #F5F5F0

    .close-button 
      position: sticky
      top: 0
      z-index: 3
      background-color: #F5F5F0
    
    .uae-background 
      content: url('../assets/mobile/mobile-UAE.png')
      width: 95%
      height: 40% 
      margin-top: 15rem
      padding: 0 30px 
      position: absolute 
      z-index: 0 

    .uae-benefits-box-title
      @include setFontSizeAndColor(14px, $font-color-secondary)
    
    .uae-benefits-box-container
      padding: 10px 15px 
      top: 55rem
      position: absolute

    .uae-benefits-box-info 
      @include setFontSizeAndColor(10px, $font-color-secondary)

    .cel 
      width: 40px 
      content: url('../assets/icons/icon3.png') 

    .watch 
      width: 40px
      content: url('../assets/icons/icon4.png') 

    .computer 
      width: 40px
      content: url('../assets/icons/icon5.png') 

    .uae-fact-box-container 
      z-index: 1
      padding: 0px 15px
      margin-top: 2rem


</style>