export interface IProduct {
    Name:string;
    Code:string;
    Date:string;
    Price:number;
    Star:number;
    Image:string;
}

class Product implements IProduct{
    public Name:string;
    Code:string='oh baby';
    Date:string='July 30, 1988';
    Price:number=30.001;
    Star:number=4.5;
    Image:string;

    public constructor(name:string, image:string){
        this.Name = name;
        this.Image = image;
    }
}

export class ProductFacotry {
    GetProduct(name:string= "mark 42", image:string ='https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/ironman-spiderman-homecoming-poster-frontpage-700x354.jpg') : IProduct{
        return new Product(name,image);
    }
} 

