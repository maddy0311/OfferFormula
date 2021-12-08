var x=5;//buy
var y=3;//get

function buyXgetX(input){
    console.log('Buy '+x+' products Get '+y+' products free');
    console.log('Purchase products : '+input);
    var remainder=input%x;
    // console.log('Remainder : '+remainder)
    var offer_quantity=(input-remainder)/x;
    // console.log('offer_quantity : '+offer_quantity);
    var y_offer=y*offer_quantity;
    // console.log('y_offer : '+y_offer);
    var result=input+y_offer;
    console.log('Total Products : '+result)
}
buyXgetX(21)
