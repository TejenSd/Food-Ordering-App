import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';
import { sample_foods } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return sample_foods;
  }
  getAllFoodBySearchTerm(searchTerm:string)
  {
    //Filter made on food  where name we have converted to lower case and campare with teh data that we are getting fromthe HTML Page
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase())); 
  }
}
 