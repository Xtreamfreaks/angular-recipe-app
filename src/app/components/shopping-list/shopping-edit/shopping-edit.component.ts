import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false}) ingredientNameRef: ElementRef;
  @ViewChild('amountInput', { static: false}) ingredientAmountRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient() {
    const name = this.ingredientNameRef.nativeElement.value;
    const amount = this.ingredientAmountRef.nativeElement.value;
    const ingredient = new Ingredient(name,amount);
    this.ingredientAdded.emit(ingredient);
  }

}
