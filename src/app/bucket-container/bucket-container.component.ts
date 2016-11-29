import { Component } from '@angular/core'

@Component({
  selector: 'app-bucket-container',
  templateUrl: './bucket-container.component.html',
  styleUrls: ['./bucket-container.component.scss']
})
export class BucketContainerComponent {
  
  buckets:String[] = ['Very Dissatisfied', 'Dissatisfied', 'No Opinion', 'Satisfied', 'Very Satisfied']
  
}
