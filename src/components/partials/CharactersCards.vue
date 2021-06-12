<template>
    <div class="column is-2">
      <a :href="'/characters/' + value.name">
        <img :src="value.card" :alt="value.name">
      </a>
    </div>
  
</template>

<script>
export default {
  name: 'CharactersCards',
  props: {
    value: Object
  }
}
</script>

<style>
</style>