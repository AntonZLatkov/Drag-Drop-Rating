import { Component } from '@angular/core'
import { DragulaService } from 'ng2-dragula/ng2-dragula'
import { Card } from './card';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent {
  public constructor(private dragulaService:DragulaService) {
    dragulaService.setOptions('bag-one', {
      revertOnSpill: true,
      direction: 'horizontal',
      copy: false,
      copySortSource: true,
      mirrorContainer: document.body,
      isContainer: (el) => {
        return el.classList.contains('bucket-droppable');
      },
      moves: (el, source, handle, sibline) => {
        console.log('el: ', el);
        console.log('source: ', source);
        console.log('handle: ', handle);
        console.log('sibline: ', sibline);
        return true
      }
    });
    dragulaService.drag.subscribe((value) => {
      console.log(`drag: ${value[0]}`);
      this.onDrag(value.slice(1));
    });
    dragulaService.drop.subscribe((value) => {
      console.log(`drop: ${value[0]}`);
      this.onDrop(value.slice(1));
    });
    dragulaService.over.subscribe((value) => {
      console.log(`over: ${value[0]}`);
      this.onOver(value.slice(1));
    });
    dragulaService.out.subscribe((value) => {
      console.log(`out: ${value[0]}`);
      this.onOut(value.slice(1));
    });
  }

  private onDrag(args) {
    let [e, el] = args;
    // do something
  }

  private onDrop(args) {
    let [e, el] = args;
    // do something
  }

  private onOver(args) {
    let [e, el, container] = args;
    // do something
  }

  private onOut(args) {
    let [e, el, container] = args;
    // do something
  }

  cards:Card[] = [
    {
      id: 1,
      label: 'Apple'
    },
    {
      id: 2,
      label: 'Google'
    },
    {
      id: 3,
      label: 'Microsoft'
    },
    {
      id: 4,
      label: 'Facebook'
    }
  ]
}