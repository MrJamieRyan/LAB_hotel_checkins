<template>
  
</template>

<script>
import BookingService from '../../services/BookingService'
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
}



}
</script>

<style>

</style>