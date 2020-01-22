<template>
  <div id="app">
    <bookings-grid/>
  </div>

</template>

<script>
import BookingsGrid from "./components/BookingsGrid";
export default {
  name: "app",
  components: {
    "bookings-grid": BookingsGrid
  }
};
</script>

<style>
</style>
