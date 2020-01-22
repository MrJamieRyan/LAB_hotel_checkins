<template>
  <div>
      <booking-item v-for="(booking, id) in bookings" :key="booking._id" :bookingItem="booking"/>
  </div>
</template>

<script>
import BookingService from '../../services/BookingService'
import BookingItem from './BookingItem'
export default {
"name": "bookings-grid",
data () {
return {
    bookings: []
}
},
mounted(){
    this.fetchData();
},
methods: {
    fetchData(){
        BookingService.getBookings()
        .then(bookings=> this.bookings = bookings)
    }
},
components: {
    "booking-item": BookingItem
}



}
</script>

<style>

</style>