<template>
   <!-- Bahrain Country -->
    <q-dialog  v-model="vModel" full-width full-height persistent>
      <q-card class="uae-card" style="box-shadow: 0px 0px 15px 0px white;
      background-color: #F5F5F0">
        
        <!-- Close button -->
        <q-card-actions align="right" class="close-button">
          <q-btn round flat icon="close" color="primary"  
          @click="$emit('closeUaeCountry')" />
        </q-card-actions>
        <!--  -->
        
        <!-- Title & subtitle -->
        <q-card-section class="bahrain-title" >
            {{bahrainJsonContent.title}}
          <div class="bahrain-subtitle">
            {{bahrainJsonContent.subtitle}}
          </div>
        </q-card-section> 
        <!--  -->

        <!-- bahrain content -->
        <div class="row" style="z-index:1;padding: 0 10px;margin-top:15px;">
         
          <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4" style="z-index: 1;">
            
            <!-- Info box -->
            <div class="bahrain-info-box">
              <div style="background-color: rgb(234, 235, 226); padding: 15px 5px;">
                <p class="bahrain-benefits-box-title"
                  style="margin: 0px 10px -15px !important">Lorem ipsum</p>
                <ul  style="padding-left: 30px;"> 
                  <li class="bahrain-benefits-box-info">
                    {{bahrainJsonContent.infobox.items[0].text}}
                  </li>
                  <li class="bahrain-benefits-box-info q-mt-sm">
                    {{bahrainJsonContent.infobox.items[0].text}}
                  </li>
                </ul>
              </div>
            </div>
            <!--  -->
            
            <!-- Benefits box -->
              
            <div class="bahrain-benefits-box-container">
              <!-- Title -->
              <div class="bahrain-benefits-box-title q-mb-sm">
                {{bahrainJsonContent.benefitsbox.title}}
              </div>
              <!--  -->
              
              <!-- Benefits content -->
              <div class="column">
                <div :key="index" class="col-xs-12 col-md-5 col-sm-5 col-lg-4   card-benefits-box-info" 
                v-for="(benefit, index) in bahrainJsonContent.benefitsbox.items">
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
         
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 ">

            <!-- bahrain background gif -->
            <q-img class="bahrain-background" />
            <!--  -->
      
          </div>

          <!-- bahrain factbox -->
          <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2 bahrain-fact-box-container">
            <strong class="bahrain-fact-box-title">
              {{bahrainJsonContent.factbox.title}}
            </strong>
            <ul class="bahrain-fact-box-info q-gutter-sm" style="padding-left: 0px">

              <li v-for="text in 2 "  :key="text">
                {{bahrainJsonContent.factbox.topics[0].text | reduceLorem}} 
              </li>

            </ul>
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
      bahrainJsonContent: {}
    }
  },
  beforeMount(){

    // Cada componente deve ter sua própria referência do conteúdo do json
    // assim cada um vai poder alterar conforme os icones que usarem em BenefitsBox
    Object.assign(this.bahrainJsonContent, this.jsonContent);

    // Alterar o conteudo de benefitsbox.items.img e colocar a classe dos icones 
    // assim eu posso reutilizar a estrutura em um laço de repetição
    this.bahrainJsonContent.benefitsbox.items.forEach( (item, index) => { 
      if(index === 0){
        item.img = 'computer'
      }else if(index === 1){
        item.img = 'network'
      }else{
        item.img = 'shield'
      }
    });
  },
  filters:{
    reduceLorem(lorem){
      return lorem.slice(50)
    }
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

  .bahrain-info-box
    padding: 0 15px 10px 15px
    @include setFontSizeAndColor(16px, $font-color-secondary)
  
  .bahrain-subtitle 
    @include setFontSizeAndColor(30px, $font-color-primary)
  
  .bahrain-fact-box-title 
    @include setFontSizeAndColor(18px, $font-color-secondary)
  
  .bahrain-fact-box-info 
    @include setFontSizeAndColor(16px, $font-color-tertiary)
  
  .benefits-box-container
    padding: 10px 15px




  // Target-Devices = Laptops, Desktops
  @media (min-width: 600px) 
    .computer 
      width: 40px
      content: url('../assets/icons/icon5.gif') 
    
    .network 
      width: 40px 
      content: url('../assets/icons/icon2.gif') 

    .shield
      width: 40px
      content: url('../assets/icons/icon1.gif') 


    .bahrain-background
      width: 100%;
      height: 100%;
      bottom: 0 
      left: 0% 
      position: absolute 
      z-index: 0 
      content: url('../assets/desktop/desktop-bahrain.gif') 
       
    .bahrain-title 
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
      top: 0 !important
      z-index: 1 !important

    .bahrain-benefits-box-title
      @include setFontSizeAndColor(18px, $font-color-secondary)
    
    .bahrain-benefits-box-info 
      @include setFontSizeAndColor(14px, $font-color-secondary)

    .bahrain-fact-box-container 
      top: -2.5em
      position: absolute
      margin-top: 26vh 
      margin-left: 55vw 
      z-index: 1
      padding: 10px
      
    .bahrain-benefits-box-container
      padding: 0 15px



  // Target-Devices = Low Resolution Tablets, Mobiles 
  @media (max-width: 601px)
  
    .bahrain-subtitle 
      @include setFontSizeAndColor(20px, $font-color-primary)
  
    .bahrain-title 
      @include setFontSizeAndColor(30px, $font-color-primary)
      z-index: 2 
      padding-left: 15px !important
      position: sticky !important
      top: 57px !important
      background-color: #F5F5F0

    .close-button 
      position: sticky
      top: 0
      z-index: 3
      background-color: #F5F5F0
    
    .bahrain-background 
      content: url('../assets/mobile/mobile-bahrain.png')
      width: 94% 
      height: 50% 
      margin-top: 15rem
      padding: 0 30px 
      position: absolute 
      z-index: 0 
      
    .bahrain-info-box
      padding: 0 
      
    .bahrain-benefits-box-title
      @include setFontSizeAndColor(14px, $font-color-secondary)
    
    .bahrain-benefits-box-container
      padding: 10px 15px 
      top: 60rem
      position: absolute

    .bahrain-benefits-box-info 
      @include setFontSizeAndColor(10px, $font-color-secondary)

    .computer 
      width: 40px
      content: url('../assets/icons/icon5.png') 
    
    .network 
      width: 40px 
      content: url('../assets/icons/icon3.png') 

    .shield 
      width: 40px
      content: url('../assets/icons/icon4.png') 


    .bahrain-fact-box-container 
      z-index: 1
      padding: 0px 15px
      margin-top: 2rem


</style>