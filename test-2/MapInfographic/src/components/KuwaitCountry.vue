<template>
   <!-- kuwait Country -->
    <q-dialog  v-model="vModel" full-width full-height persistent>
      <q-card class="kuwait-card" style="box-shadow: 0px 0px 15px 0px white;background-color: #F5F5F0">
        
        <!-- Close button -->
        <q-card-actions align="right" class="close-button">
          <q-btn round flat icon="close" color="primary"  
          @click="$emit('closeKuwaitCountry')" />
        </q-card-actions>
        <!--  -->
        
        <!-- Title & subtitle -->
        <q-card-section class="kuwait-title" >
            {{kuwaitJsonContent.title}}
          <div class="kuwait-subtitle">
            {{kuwaitJsonContent.subtitle}}
          </div>
        </q-card-section> 
        <!--  -->

        <!-- kuwait content -->
        <div class="row" style="z-index:1;padding: 0 10px;">
         
          <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4" style="z-index: 1;">
            
            <!-- Info box -->
            <div class="kuwait-info-box">
              <div style="background-color: rgb(234, 235, 226); padding: 15px 0px;">
                <p class="kuwait-benefits-box-title" style="margin: 0px 10px -15px !important">Lorem ipsum</p>
                <ul  style="padding-left: 30px;"> 
                  <li class="kuwait-benefits-box-info">
                    {{kuwaitJsonContent.infobox.items[0].text}}
                  </li>
                </ul>
              </div>
            </div>
            <!--  -->
            
            <!-- Benefits box -->
            <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8 kuwait-benefits-box-container">
              
              <!-- Title -->
              <div class="kuwait-benefits-box-title q-mb-sm">
                {{kuwaitJsonContent.benefitsbox.title}}
              </div>
              <!--  -->
              
              <!-- Benefits content -->
              <div class="column q-gutter-lg q-mt-xs">
                <div :key="index" class="kuwait-benefits-box-info" 
                v-for="(benefit, index) in kuwaitJsonContent.benefitsbox.items">
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
        
          <!-- kuwait background -->
          <div class="col-xs-12 col-sm-5 col-md-5 col-lg-5 ">
            <q-img class="kuwait-background" />
          </div>
          <!--  -->

          <!-- kuwait factbox -->
          <div class=" col-xs-12 col-sm-3 col-md-3 col-lg-3 kuwait-fact-box-container">
            <strong class="kuwait-fact-box-title">
              {{kuwaitJsonContent.factbox.title}}
            </strong>
            <p class="kuwait-fact-box-info">
              {{kuwaitJsonContent.factbox.topics[0].text}}
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
      kuwaitJsonContent: {}
    }
  },
  beforeMount(){

    // Cada componente deve ter sua própria referência do conteúdo do json
    // assim cada um vai poder alterar conforme os icones que usarem em BenefitsBox
    Object.assign(this.kuwaitJsonContent, this.jsonContent);

    // Alterar o conteudo de benefitsbox.items.img e colocar a classe dos icones 
    // assim eu posso reutilizar a estrutura em um laço de repetição
    this.kuwaitJsonContent.benefitsbox.items.forEach( (item, index) => { 
      if(index === 0){
        item.img = 'shield'
      }else if(index === 1){
        item.img = 'watch'
      }else{
        item.img = 'computer'
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

  .kuwait-info-box
    padding: 0 15px 10px 15px
    @include setFontSizeAndColor(16px, $font-color-secondary)
  
  .kuwait-subtitle 
    @include setFontSizeAndColor(30px, $font-color-primary)
  
  .kuwait-fact-box-title 
    @include setFontSizeAndColor(18px, $font-color-secondary)
  
  .kuwait-fact-box-info 
    @include setFontSizeAndColor(16px, $font-color-tertiary)
  



  // Target-Devices = Laptops, Desktops
  @media (min-width: 600px) 
    .shield 
      width: 40px 
      content: url('../assets/icons/icon1.gif') 

    .watch 
      width: 40px
      content: url('../assets/icons/icon4.gif') 

    .computer 
      width: 40px
      content: url('../assets/icons/icon5.gif') 

    .kuwait-background 
      width: 100% 
      height: 100% 
      bottom: 0 
      left: 0% 
      position: absolute 
      z-index: 0 
      content: url('../assets/desktop/desktop-Kuwait.gif') 
       
    .kuwait-title 
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

    .kuwait-benefits-box-title
      @include setFontSizeAndColor(18px, $font-color-secondary)

    .kuwait-benefits-box-container
      padding: 0 15px 

    .kuwait-benefits-box-info 
      @include setFontSizeAndColor(14px, $font-color-secondary)

    .kuwait-fact-box-container 
      top: -2.5em
      position: absolute
      margin-top: 29.5vh
      margin-left: 38vw
      z-index: 1
      padding: 10px




  // Target-Devices = Low Resolution Tablets, Mobiles 
  @media (max-width: 601px)
  
    .kuwait-subtitle 
      @include setFontSizeAndColor(20px, $font-color-primary)
  
    .kuwait-title 
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
    
    .kuwait-background 
      content: url('../assets/mobile/mobile-Kuwait.png')
      width: 95%
      height: 40% 
      margin-top: 15rem
      padding: 0 30px 
      position: absolute 
      z-index: 0 

    .kuwait-benefits-box-title
      @include setFontSizeAndColor(14px, $font-color-secondary)
    
    .kuwait-benefits-box-container
      padding: 10px 15px 
      top: 55rem
      position: absolute

    .kuwait-benefits-box-info 
      @include setFontSizeAndColor(10px, $font-color-secondary)

    .shield 
      width: 40px 
      content: url('../assets/icons/icon1.png') 

    .watch 
      width: 40px
      content: url('../assets/icons/icon4.png') 

    .computer 
      width: 40px
      content: url('../assets/icons/icon5.png') 

    .kuwait-fact-box-container 
      z-index: 1
      padding: 0px 15px
      margin-top: 2rem


</style>