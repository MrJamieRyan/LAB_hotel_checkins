<template>
  <form id="booking-form" v-on:submit="handleSubmit">
    <h2>Add a Booking</h2>
    <div class="formWrap">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" />
    </div>
    <div class="formWrap">
      <label for="email">Email:</label>
      <input type="text" id="email" v-model="email" />
    </div>
    <div class="formWrap">
      <select v-model="status">
        <option value="booked">Booked</option>
        <option value="checked-in">Checked In</option>
        <option value="checked-out">Checked Out</option>
        <option value="cancelled">Cancelled</option>
      </select>
    </div>
    <button>Submit</button>
  </form>
</template>

<script>
import BookingService from '../../services/BookingService';
import {eventBus} from '../main'
export default {
    name:"booking-form",
    data(){
        return {
            name: "",
            email: "",
            status: ""
        }
    },
    methods: {
        handleSubmit(event){
            event.preventDefault();

        const payload = {
            name: this.name,
            email: this.email,
            status: this.status
        };

        BookingService.postBooking(payload)
        .then(bookingItem => {
            eventBus.$emit('booking-added', bookingItem);
        });
        }
    }
};
</script>

<style>
</style>