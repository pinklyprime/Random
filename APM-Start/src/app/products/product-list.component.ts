import {Component, OnInit} from '@angular/core';
import {IProduct, ProductFacotry} from './product';

@Component({selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']})
export class ProductListComponent implements OnInit{
    title:string='Product List bb';
    imageWidth='100'
    product2:IProduct = new ProductFacotry().GetProduct("light sabers","https://media.karousell.com/media/photos/products/2016/02/13/reedit_limited_edition_sentinel_iron_man_bleeding_edge_amour_1455379149_30ad42af.jpg");
    product3:IProduct = {Name:"stronk", Code:"AS-DF", Date:"aasdsdf",Price:1,Star:2,Image:'https://flipthetruck.files.wordpress.com/2013/02/iron-man-in-space.jpg'};
    products:IProduct[] = [ new ProductFacotry().GetProduct(), this.product2, this.product3 ];
    showImages:boolean = true;
    listFilter:string = "";

    ToggleImage(): void{
        this.showImages = !this.showImages;
    }

    ngOnInit(): void{
        console.log('ngOnInit called');
    }
}

