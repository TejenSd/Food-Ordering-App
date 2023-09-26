import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';
import { sample_foods, sample_tags } from 'src/data';
import { Tag } from '../shared/models/tags';

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
  getAllTags():Tag[]{
    return sample_tags;
  }

  getAllFoodByTag(tag:string):Food[]
  {
    return (tag == "All"? this.getAll(): this.getAll().filter(food => food.tags?.includes(tag)));
  }

  getFoodById(foodId:string):Food{
    return this.getAll().find(food => food.id == foodId) ?? new Food();
  }

}
 