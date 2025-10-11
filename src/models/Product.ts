
 
 export default class Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number | undefined;

    constructor(id: number, title: string, description: string, price: number, discountPercentage: number | undefined) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.discountPercentage; discountPercentage
    }

    displayDetails()  {
        return `${this.title} 'is about software, and cost' $${this.price} "before the" ${this.discountPercentage}.`
    }

    getPriceWithDiscount() {
        return
    }

 }

    
    console.log(Product.name);