import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { Product } from '../models/product';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  products : Product[];
  filteredProducts : Product[];

  private _searchTerm:string;

  get searchTerm():string{
    return this._searchTerm;
  }

  set searchTerm(value: string){
    this._searchTerm = value;
    this.filteredProducts = this.filterProducts(value);
  }

  filterProducts(searchParam: string): Product[]{
    return this.products.filter(product =>
      product.name.toLowerCase().indexOf(searchParam.toLowerCase()) !== -1);
  }

  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.apiService.getProducts().subscribe(
      produits =>{
        this.products = produits as Product[]
        this.filteredProducts = this.products;
      }
    );
    
  }

}
