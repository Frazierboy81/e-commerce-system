
 
 export default class Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    discountAmount: number;
    

    constructor(id: number, title: string, description: string, price: number, discountPercentage: number, discountAmount: number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.discountAmount = discountAmount;
        
    }

    displayDetails(): string  {
        return `The book id is ${this.id} and the title is: ${this.title} is about ${this.description}, and cost' $${this.price} before the ${this.discountPercentage}% discount total.`;
    }

    getPriceWithDiscount(): number | string {
        if (this.price >= 100) {
            const disc = this.price * (this.discountPercentage);
            return `The discount amount is: $${disc}`;
        } else {
            return this.price;
        }
    }


 }
    const discRate = new Product(7787, "TypeScript", "OOP", 150, .10, .08)
    const book = new Product(12344, "Software", "About Coding", 40, 5, .15);
    console.log(book.displayDetails());
    console.log(discRate.getPriceWithDiscount())
    