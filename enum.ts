//restrict someone's choice
type seatbooking = "aisle" | "window" | "middle"
// does not work
//mySeat: seatbooking = "aisle"


const enum SeatBooking {
    AISLE,
    WINDOW,
    MIDDLE
}

let mySeat = SeatBooking.AISLE