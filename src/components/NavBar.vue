<script></script>

<template>
    <nav class="ContainerNavigation">
        <div class="ContainerLogo">
            <span class="Logo">Axojonautas</span>
        </div>
        <ul class="navigation">
            <li class="parent">
                <a class="link" href="#myMap">MAPA</a>
            </li>
            <li class="parent">
                <a class="link" href="#myAbout">About Us</a>
            </li>
            <li class="parent">
                <a class="link" href="#leaveSign">Firmas</a>
            </li>
            <li class="parent">
                <a class="Donaciones" href="https://donatmexico.formstack.com/forms/mexico_azul" target="_blank">Donaciones</a>
            </li>
        </ul>
    </nav>
</template>

<style>
.ContainerNavigation {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  color: white;
  text-transform: uppercase;
  overflow: hidden;
}
.ContainerLogo {
    display: flex;
}
.Logo {
      padding-left: 4px;
    }

.navigation {
    display: flex;
    list-style-type: none;
}

    li {
      list-style-type: none;
      color: black;
      text-decoration: none;
      transition: all 0.3s ease-in-out;
    }

    .parent {
      padding: 0 10px;
      cursor: pointer;
    }
      .link {
        position: relative;
        display: flex;
        align-items: center;
        text-decoration: none;
        transition: all 0.3s ease-in-out;
        color: white;
        padding-top: 10px;
      }
      .Donaciones{
        position: relative;
        display: flex;
        align-items: center;
        text-decoration: none;
        transition: all 0.3s ease-in-out;
        color: white;

        padding: 10px;
        background-color: rgb(210, 145, 33);
        border-radius: 10%;
      }
</style>