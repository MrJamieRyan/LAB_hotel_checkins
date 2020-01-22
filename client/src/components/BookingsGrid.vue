<template>
  
</template>

<script>
export default {
"name": "bookings-grid",
data () {
return {
    bookings: []
}
},
methods: {
    fetchData(){
        BookingsService.getBookings()
        .then(bookings=> this.bookings = bookings)
    }
}

}
</script>

<style>

</style>