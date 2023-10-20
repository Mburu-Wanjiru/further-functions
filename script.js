'use strict';
//default parameters

const book=[];
const bookingfunction=function(flightNum,numPassangers=1,price='Ksh 2,356'){

    // numPassangers=numPassangers || 1;
    // price=price || 'Ksh 2,845';
    const booking={
        flightNum,
        numPassangers,
        price,
    }

book.push(booking)
    console.log(booking);
}
bookingfunction('JIM-5299',3,65739);
console.log(book);














 