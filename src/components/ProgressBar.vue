<script>
    import DataServices from '@/services/DataServices'
    export default{
      mounted(){
        DataServices.count()
        .then(response =>{
        document.getElementById("in").style.width = response.data/20*100 + "%";
    })
  }
    }
</script>

<template>
    <div class="center">
        <p>Ayudanos a llegar a nuestra meta de firmas para apoyar al medio ambiente!</p>
    </div>
    <div class="center">
      <div class="out" id="out">
      <div class="in" id="in"></div>
      </div>
    </div>
    
</template>

<style scoped>
.center{
  display: flex;
  justify-content: center;
}
p{
  padding: 0;
  width: 100%;
  text-align: center;
  color: rgb(100,100,100);
}
.out{
  width: 25%;
  height: 30px;
  border-radius: 12px;
  background-color: rgb(240,240,240);
}
.in{
  background-color: rgb(210, 145, 33);
  border-radius: 12px 0 0 12px;
  width: 0;
  height: 100%;
}

</style>