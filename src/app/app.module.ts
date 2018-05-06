import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from '../app/services/data.service';
import { AppComponent } from './app.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { ControlsComponent } from './components/controls/controls.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
