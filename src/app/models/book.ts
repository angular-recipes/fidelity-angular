export class Book {
    title: string;
    author: string;
    price: number;
    rating: number;

    constructor(title: string, author: string, price: number, rating: number) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.rating = rating;
    }
}
