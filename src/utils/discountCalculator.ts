import Product from "../models/Product";

export default class DiscountCalculator extends Product {
  
    calculateDiscount(): number | string {
    
        if(this.price >= 200) {
        const discTotal = this.price * this.discountAmount
            return `If the total is $200 or more you'll receive a 25% discount which equals $${discTotal}`
        }
        else {
            return this.price
        }   
    }

}
    console.log();
    


