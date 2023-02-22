<template>
  <div class="HouseCard card">
    <router-link :to="{ name: 'House', params: { houseId: house.id } }">
      <img class="rounded-top img-fluid w-100" :src="house.imgUrl" :alt="house.img">
    </router-link>

    <div class="card-body">
      <p><b>{{ house.bedrooms }} {{ house.bathrooms }} - ${{ house.price }}</b></p>
    </div>
    <div class="card-footer text-end" v-if="showSeller">
      <span class="on-hover me-2">{{ house.seller.name }}</span>
      <img :src="house.seller.picture" :alt="house.seller.name" :title="house.seller.name" height="40" width="40"
        class="rounded-circle">
    </div>
  </div>
</template>


<script>
export default {
  props: {
    house: { type: Object, required: true },
    showSeller: { type: Boolean, default: true }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped></style>