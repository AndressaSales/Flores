<script setup lang="ts">
const items = [
  'http://2.bp.blogspot.com/-UM60GF1Imuc/TyiTXXU1W2I/AAAAAAAAMgs/g4fU_CxxNJM/s1600/wallpaper-flores-papel-de-parede+(4).jpg',
  'https://flornacional.top/wp-content/uploads/2021/03/Bayahibe-flor-nacional-de-republica-dominicana-1536x864.jpg',
  'https://2.bp.blogspot.com/-gOQL9hqPrto/U99nm6QX-wI/AAAAAAAAAYI/QJS1--i4G50/s1600/orquidea-azul-3.jpg',
  'https://t2.uc.ltmcdn.com/pt/posts/1/0/2/como_cultivar_rosas_azuis_25201_orig.jpg',
  'https://mejorconsalud.as.com/wp-content/uploads/2022/07/gardenia-jasminoides.jpg?auto=webp&quality=45&width=1920&crop=16:9'
]

const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 3000)
})
</script>

<template>
  <UCarousel
    ref="carouselRef"
    v-slot="{ item }"
    :items="items"
    :ui="{ item: 'basis-full' }"
    class="rounded-lg overflow-hidden rounded-none"
    indicators
  >
    <img :src="item" class="w-full" draggable="false">
  </UCarousel>
</template>

