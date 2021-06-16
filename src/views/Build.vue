<template>
<div>
    {{title.title}}

</div>
</template>

<script>
export default {
  name: 'Build',
  data(){
    return {
      title: ""
    }
  },
  mounted(){
      const buildTitle = this.$route.params.title
      
      this.$api.builds.getOne(buildTitle).then(response => this.title = response)
      
    },
}
</script>

<style>

</style>