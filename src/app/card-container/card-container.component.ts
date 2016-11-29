import { Component } from '@angular/core'

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent {

  cards:String[] = ['Apple', 'Google', 'Microsoft', 'Facebook']

}