<template>
  <div>
    
    <Map> 
      <Point 
        :className="country.name" 
        v-for="country in countries" :key="country.name" 
        @handleClick="openInfographic"
      />
    </Map> 

    <kuwait-country
    :vModel="kuwait" 
    @closeKuwaitCountry="kuwait = false" 
    :jsonContent="require('../../JSON/content.json')[0]" 
    />

    <bahrain-country 
    :vModel="bahrain" 
    @closeUaeCountry="bahrain = false" 
    :jsonContent="require('../../JSON/content.json')[0]" 
    />
    
    <uae-country 
    :vModel="uae" 
    @closeUaeCountry="uae = false" 
    :jsonContent="require('../../JSON/content.json')[0]" 
    />

  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  data(){
    return{
      countries:[
        {
          name:'kuwait'
        },
        {
          name:'bahrain'
        },
        {
          name:'uae'
        }
      ],
      kuwait: false,
      bahrain: false,
      uae: false,
    }
  },
  methods:{
    // Método utilizado para abrir o infografico, recebe o nome do 
    // páis e acessa o v-model pela referência do this ( data ) 
    openInfographic(countryClicked){
      this[countryClicked] = true;
    },
  },
  components:{
    'Map': require('../components/Map').default,
    'Point': require('../components/Point').default,
    'uae-country': require('../components/UaeCountry').default,
    'bahrain-country': require('../components/BahrainCountry').default,
    'kuwait-country': require('../components/KuwaitCountry').default,
  }
}
</script>
