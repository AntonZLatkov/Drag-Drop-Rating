import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { DragulaModule } from 'ng2-dragula/ng2-dragula'

import { AppComponent } from './app.component'
import { CardContainerComponent } from './card-container/card-container.component'
import { BucketContainerComponent } from './bucket-container/bucket-container.component'

@NgModule({
  declarations: [
    AppComponent,
    CardContainerComponent,
    BucketContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DragulaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
