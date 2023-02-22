<template>
  <div class="housesPage">
    <h1>This is the houses page</h1>
  </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { housesService } from '../services/HousesService.js';
import Pop from '../utils/Pop.js';




export default {
  setup() {
    async function getHouses() {
      try {
        await housesService.getHouses()
      } catch (error) {
        Pop.error(error, '[Get dem Houses]')
      }
    }

    onMounted(() => {
      getHouses()
    })
    return {
      houses: computed(() => AppState.houses)
    }
  }
}
</script>


<style lang="scss" scoped></style>
