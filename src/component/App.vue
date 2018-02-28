<template>
  <div>
    <router-view></router-view>
 
  </div>
</template>

<script>
export default {
  data() {
    return {
    
    }
  },
  created(){
     this.$axios.get(this.$api.logout).then(()=>{console.log(1);})
  }
};
</script>

<style scoped>

</style>