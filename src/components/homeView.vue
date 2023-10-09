<template>
    <div class="app">
      <div class="header">
        <b-button v-b-toggle.sidebar-backdrop>
            <img src="../assets/menu.svg" alt="">
        </b-button>
        <div class="header-right"> 
            <img src="../assets/bell.svg" alt="">
            <!-- <div :class="mode"> -->
              <toggle  :mode="mode" @toggle="$emit('toggle')"/>
            <!-- </div> -->
            <p>Bui Viet Dung</p>
            <img src="../assets/user.svg" alt="">
        </div>
      </div>
      <b-sidebar
        id="sidebar-backdrop"
        title="SmartOSC"
      > 
        
        <ul>
            <li>
                <a href="">
                    <img src="../assets/user.svg"/>
                    <p>Profile</p>
                </a>
            </li><li>
                <a href="">
                    <img src="../assets/request.svg"/>
                    <p>Request</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="../assets/cloudDown.svg"/>
                    <p>User guide</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="../assets/mess.svg"/>
                    <p>Support</p>
                </a>
            </li>
        </ul>
      </b-sidebar>
      
    </div>
  </template>
  
  <script>
import toggle from './toggle.vue'
export default {
  data() {
    return {
      mode: 'dark'
    }
  },
  components: {
    toggle
  },
  methods: {
    toggle() {
      if (this.mode === ' dark'){
        this.mode = 'light'
      } else {
        this.mode = 'dark'
      }
    }
  }
}
</script>

<style scoped>
.app {
  width: 100vw;
  min-height: 100vh;
  background: #f3f3f3;
  color: #15202b;
}
.dark {
    background: #192734;
    color: #f3f3f3;
  }

ul {
    padding: 0;
}
li{
    list-style: none;
    height: 30px;
    border: solid #333 1px;
    border-radius: 3px;
    
}

li a{
    height: 100%;
    display: flex;
    text-decoration-line: none;
    color: black;
    text-align: center;
    align-items: center;
    justify-content: flex-start;
}
p {
    margin: auto;
}

.header{
    margin: 20px ;
    padding: 0 10px;
    display: flex;
    height: 50px;
    border-radius: 3px;
    box-sizing: border-box;
    box-shadow: 0.1px 1px #888888;
    background-color: azure;
    align-items: center;
}

.header-right{
    display: flex;
    margin-left: auto;
    gap: 20px;
}
</style>