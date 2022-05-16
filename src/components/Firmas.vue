<script>
import DataService from "../services/DataServices"
    export default{
        name: 'Firmas',
        data(){
            return{
      usuario:{
        id: null,
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        estado: ""
      }
    }
  },
  methods:{
    mandar(){
      var data ={
        nombre: this.usuario.nombre,
        apellido: this.usuario.apellido,
        email: this.usuario.email,
        telefono: this.usuario.telefono,
        estado: this.usuario.estado
      };
      DataService.create(data)
      .then(response => {
        this.usuario.id = response.data.id;
        console.log(response.data);
      })
      .catch(e =>{
        console.log(e);
      });
      
    }
  }
    }
</script>

<template>

    <h1 class="Title" id="leaveSign">Firma esta petición para apoyar</h1>
    <h3 class="Subtitle">Problemática: Contaminación de los cuerpos de agua de México provoca por las empresas refresqueras</h3>
    
        <div class="w3-row-padding center">
        
        <div class="w3-half">
        
            <input type="text" placeholder="Nombre" class="w3-input" v-model="usuario.nombre">
        
        
            <input type="text" placeholder="Apellido" class="w3-input" v-model="usuario.apellido">
        
        
            <input type="email" placeholder="Mail" class="w3-input" v-model="usuario.email">
        
        
            <input type="tel" placeholder="Celular" class="w3-input" v-model="usuario.telefono">
            <select name="estado" id="estado" class="w3-select" v-model="usuario.estado">
                <option disabled selected>selecciona tu estado</option>
                <option value="Jalisco">Jalisco</option>
                <option value="Baja California">Baja California</option>
                <option value="Baja California Sur">Baja California Sur</option>
                <option value="Sonora">Sonora</option>
                <option value="Chihuahua">Chihuahua</option>
                <option value="Tlaxcala">Tlaxcala</option>
                <option value="Sinaloa">Sinaloa</option>
                <option value="Nayarit">Nayarit</option>
                <option value="Mexico">México</option>
                <option value="Ciudad de Mexico">Ciudad de Mexico</option>
                <option value="Quintana Roo">Quintana Roo</option>
                <option value="Yucatan">Yucatán</option>
                <option value="Campeche">Campeche</option>
                <option value="Morelos">Morelos</option>
                <option value="Hidalgo">Hidalgo</option>
                <option value="Nuevo Leon">Nuevo León</option>
                <option value="San Luis Potosi">San Luis Potosí</option>
                <option value="Tamaulipas">Tamaulipas</option>
                <option value="Veracruz">Veracruz</option>
                <option value="Guerrero">Guerrero</option>
                <option value="Durango">Durango</option>
                <option value="Tabasco">Tabasco</option>
                <option value="Colima">Colima</option>
                <option value="Chiapas">Chiapas</option>
                <option value="Guanajuato">Guanajuato</option>
                <option value="Queretaro">Querétaro</option>
                <option value="Oaxaca">Oaxaca</option>
                <option value="Puebla">Puebla</option>
                <option value="Coahuila">Coahuila</option>
                <option value="Zacatecas">Zacatecas </option>
                <option value="Michoacan">Michoacán</option>
                <option value="Aguascalientes">Aguascalientes</option>
            </select>




            <div class="donar-btn"> <!--Boton-->
                <button @click="mandar">Firmar</button>
            </div>
        </div>

        </div>
     

</template>

<style>
.Title{
    color: rgb(210, 145, 33);
    text-align: center;
}
.Subtitle{
    text-align: center;
}
.w3-container:after,.w3-container:before,.w3-row-padding:after,.w3-row-padding:before{content:"";display:table;clear:both}
.w3-container{padding:0.01em 16px}
.w3-half{
    float:left;width:100%;
    padding: 8px;
    }

.w3-half{width:49%}
.w3-input{padding:8px;display:block;border:none;border-bottom:1px solid #ccc;width:100%}
.w3-select{padding:9px 0;width:100%;border:none;border-bottom:1px solid #ccc}

.donar-btn{
    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.donar-btn button{
    height: 40px;
    width: 120px;
    border: none;
    border-radius: 16px;
    font-weight: bold;
    font-size: 16px;
}
.center{
    display: flex;
    justify-content: center;
}

</style>