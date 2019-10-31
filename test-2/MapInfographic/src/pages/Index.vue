<template>
  <div>
    <Map> 
      <Point 
        :className="country.name" 
        v-for="country in countries" :key="country.name" 
        @handleClick="openInfographic"
      />
    </Map> 
    
    <q-dialog v-model="kuwait">
      <q-card>
        <q-card-section>
          <div class="text-h6">kuwait</div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="bahrain">
      <q-card>
        <q-card-section>
          <div class="text-h6">bahrain</div>
        </q-card-section>
      </q-card>
    </q-dialog>
    
    <q-dialog v-model="uae">
      <q-card>
        <q-card-section>
          <div class="text-h6">uae</div>
        </q-card-section>
      </q-card>
    </q-dialog>

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
    openInfographic(countryClicked){
      this[countryClicked] = true;
    }
  },
  components:{
    'Map': require('../components/Map').default,
    'Point': require('../components/Point').default,
  }
}
</script>

