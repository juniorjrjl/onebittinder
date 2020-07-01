<template>
  <div id="app">
    <Navbar />
    <Alert />
    <router-view/>
  </div>
</template>

<script>

  import Navbar from './components/Navbar';
  import Alert from './components/Alert'

  export default{
    components: {
      Navbar,
      Alert
    }
  }

</script>
