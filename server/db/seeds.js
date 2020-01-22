use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Jamie",
        email: "jamie@codeclan.com",
        status: "Booked"
    },
    {
        name: "Catherine",
        email: "catherine@codeclan.com",
        status: "Checked-In"
    },
    {
        name: "Silvia",
        email: "silvia@codeclan.com",
        status: "Checked-Out"
    },
    {
        name: "Bob",
        email: "bob@codeclan.com",
        status: "Cancelled"
    }
])