import Product from "../models/Product";

export default class taxCalculator extends Product {
    
    
    calculateTax(): number {
        const groceries = 0
        if(!groceries) {
            const newTaxAmount = 4.75 / 100
            
            const taxAmount = this.price * newTaxAmount
            return taxAmount
        }else {
            const groceriesTaxAmount = 3 / 100
            return this.price * groceriesTaxAmount
        }
    }
}
