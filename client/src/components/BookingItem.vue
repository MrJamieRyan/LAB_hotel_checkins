<template>
<div class = "bookingItem">
    <h2> {{bookingItem.name}} </h2>
    <p> {{bookingItem.email}} </p>
    <p> {{bookingItem.status}} </p>
    <button v-on:click="handleDelete(bookingItem._id)">Delete</button>
</div>


</template>

<script>
import BookingService from '../../services/BookingService';
import {eventBus} from '../main'    
export default {
name: "booking-item", 
props: ['bookingItem'],
methods: {handleDelete(id){    
    BookingService.deleteBooking(id)
    .then(response => eventBus.$emit('booking-deleted', id));
}
}
}

</script>

<style>

</style>