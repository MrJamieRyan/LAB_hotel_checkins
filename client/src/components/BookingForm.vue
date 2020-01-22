<template>
  <form id="booking-form" v-on:submit="handleSubmit">
    <h2>Add a Booking</h2>
    <div class="formWrap">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" />
    </div>
    <br>
    <div class="formWrap">
      <label for="email">Email:</label>
      <input type="text" id="email" v-model="email" />
    </div>
    <br>
    <div class="formWrap">
      <select v-model="status">
        <option value="booked" selected>Booked</option>
        <option value="checked-in">Checked In</option>
        <option value="checked-out">Checked Out</option>
        <option value="cancelled">Cancelled</option>
      </select>
    </div>
    <br>
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
            status: "booked"
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
#booking-form{
    background-color: #FFE8D1;
    text-align: center;
    padding: 10px;
    margin: 10px;
    border: solid thin #68C3D4;
    font-family: 'PT Sans Caption', sans-serif;
}
</style>