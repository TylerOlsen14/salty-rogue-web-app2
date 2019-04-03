<template>
    <div>
        <div class="navbar nav-expand-lg navbar-dark br-primary" id="Navbar">
            <div>
                <router-link to="/" class="logo">
                    <img src="../assets/logo.jpg" alt="Salty Rogue Real Estate">
                </router-link>
            </div>
            <div id="nav">
                <router-link to="/">Home</router-link> |
                <router-link to="/About">About</router-link> | 
                <router-link to='/CallList'>Call List</router-link>
            </div>
            <div class="banner">
                <router-link to="/dashboard" class='brand-logo'></router-link>
            </div>
        </div>
    </div>
</template>


<style>
img{
    width: 10%;
}
#Navbar{
    display: flex;
    flex-direction: row
}
.banner{
    align-self:flex-end;
}
</style>

<script>
export default {
  name: 'Navbar',
    components: {
        Navbar
    }    
}
</script>
