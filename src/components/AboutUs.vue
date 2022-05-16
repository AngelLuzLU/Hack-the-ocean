<script></script>

<template>
  <!--Sobre nosotros-->
    <div class="about_us" id="myAbout"><!--Contenedor-->
        <div class="images"> <!--Imagen-->
                <img src="../assets/Logos/RecycleProduct.svg" alt="">
        </div>
        <div class="info"> <!--Información que contiene Texto, imagenes y botones-->
            <div class="textoo"> <!--Texto-->
                <h3>Acerca De Nosotros</h3>
                <p>Somos una asociación dedicada a la divulgación del impacto que tienen las empresas refresqueras al explotar los recursos naturales para la producción de bienes. <br><br>
                    Por el crecimiento de la población y su estilo de consumo se ha incrementado la contaminación, que destruye el océano nacional mexicano.</p>
            </div>
            <div class="donar-btn"> <!--Boton-->
              <a href="https://donatmexico.formstack.com/forms/mexico_azul" target="_blank" rel="noopener noreferrer"><button>Donar</button></a>  
            </div>
        </div>
    </div>
</template>

<style scoped>
.about_us{
    width: 100%;
    height: 400px;
    display:grid;
    grid-template-columns: 0.5fr 0.5fr;
    overflow: hidden;
    box-sizing: border-box;
    background-image:url("../assets/Logos/coran.png");
    background-position: 50% 20%;
    
}
.about_us .images{
    width: 100%;
    display: flex;
    align-items: flex-start;
    padding-left: 15%;
}
.about_us .images img{
    height: 400px;
}

.info{
    width: 100%;
    padding: 0px;
}
.textoo{
    width: 100%;
}
.textoo h3{
    color: white;
    font-size: 23px;
}
.textoo p{
    padding: 0px;
    text-align: left;
    width: 70%;
    color: white;
    font-size: 18px;
}
.donar-btn{
    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
}
.donar-btn button{
    height: 40px;
    width: 120px;
    border: none;
    border-radius: 16px;
    font-weight: bold;
    font-size: 16px;
}
.donar-btn button:hover{
    background-color: #f4bcb6;
    transition: 0.6s;
    color: white;
}
</style>