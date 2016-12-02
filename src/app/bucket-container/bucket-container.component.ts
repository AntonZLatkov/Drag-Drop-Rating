import { Component } from '@angular/core'
import { Bucket } from './bucket'

@Component({
  selector: 'app-bucket-container',
  templateUrl: './bucket-container.component.html',
  styleUrls: ['./bucket-container.component.scss']
})

export class BucketContainerComponent {
  buckets:Bucket[] = [
    {
      id: 1,
      label: 'Very Dissatisfied'
    }, 
    {
      id: 2,
      label: 'Dissatisfied'
    },
    {
      id: 3,
      label: 'No Opinion'
    },
    {
      id: 4,
      label: 'Satisfied'
    },
    {
      id: 5,
      label: 'Very Satisfied'
    }
  ]
}
