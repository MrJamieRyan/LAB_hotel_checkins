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
.bookingItem{
    background-color: #FFE8D1;
    text-align: center;
    padding: 10px;
    margin: 10px;
    border: solid thin #68C3D4;
    font-family: 'PT Sans Caption', sans-serif;

}

h2{
    color: #568EA3
}

p{
    color: #826251
}
</style>