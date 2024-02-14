import { Component, OnInit } from '@angular/core';
import{ Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[]= [
  new Recipe('Test Recipe', 'This is a demo recipe', 'https://media.istockphoto.com/id/1142699001/vector/tomato-sauce-spaghetti.jpg?s=612x612&w=0&k=20&c=kaltVmR360J00TlvNlu2XUD_P20iXhCR8Vh0ZxsEn8U=') 
];

constructor(){

}
ngOnInit(){

}

}
