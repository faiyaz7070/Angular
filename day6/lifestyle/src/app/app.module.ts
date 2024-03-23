import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule if not already imported
import { AppComponent } from './app.component';
import { LifecycleDemoComponent } from './lifecycle-demo/lifecycle-demo.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleDemoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Add HttpClientModule to imports if not already added
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
