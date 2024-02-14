import { Component, OnInit } from '@angular/core';
import {Ingredients } from '../shared/ingrediants.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {

  ingrediants: Ingredients[]=[
    new Ingredients('Apples',5),
    new Ingredients('Garlic',2),
  ];

  constructor(){

  }

  ngOnInit(){

  } 
}
