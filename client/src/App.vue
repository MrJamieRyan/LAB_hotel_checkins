<template>
  <div id="app">
     <booking-form/>
    <bookings-grid/>
  </div>

</template>

<script>
import BookingsGrid from "./components/BookingsGrid";
import BookingForm from "./components/BookingForm"
export default {
  name: "app",
  components: {
    "bookings-grid": BookingsGrid,
    "booking-form": BookingForm
  }
};
</script>

<style>
</style>
