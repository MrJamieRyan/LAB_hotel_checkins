<template>
<div class = "bookingItem">
    <h2> {{bookingItem.name}} </h2>
    <p> {{bookingItem.email}} </p>
    <p> {{bookingItem.status}} </p>
</div>
</template>

<script>
export default {
name: "booking-item", 
props: ['bookingItem']
}
</script>

<style>

</style>