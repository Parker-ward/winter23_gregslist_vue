<template>
  <div class="housesPage">
    <h1>This is the houses page</h1>

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4" v-for="house in houses">
          <HouseCard :house="house" />
        </div>
      </div>
      <div class="row" v-if="account.id">
        <div class="col-md-12 text-end">
          <button class="fs-3 btn btn-primary" data-bs-toggle="modal" data-bs-target="#test-modal">
            🏠
          </button>
        </div>
      </div>
    </div>


    <Modal id="test-modal" modal-title="Add a House 🏠">
      <HouseForm />
    </Modal>


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
      account: computed(() => AppState.account),
      houses: computed(() => AppState.houses)
    }
  }
}
</script>


<style lang="scss" scoped></style>
