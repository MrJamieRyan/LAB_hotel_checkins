<template>
  <div>
      <booking-item v-for="(booking, id) in bookings" :key="booking._id" :bookingItem="booking"/>
  </div>
</template>

<script>
import BookingService from '../../services/BookingService'
import BookingItem from './BookingItem'
import { eventBus } from '../main'
export default {
"name": "bookings-grid",
data () {
return {
    bookings: []
}
},
mounted(){
    this.fetchData();
    eventBus.$on('booking-added', bookingItem => this.bookings.push(bookingItem));

eventBus.$on('booking-deleted', id => {
    const index = this.bookings.findIndex(booking => booking._id === id);
    this.bookings.splice(index, 1)
})

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