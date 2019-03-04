import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphComponent } from './components/graph/graph.component';
import { ChartsModule } from 'ng2-charts';
import { WeatherGraphActionsComponent } from './components/weather-graph-actions/weather-graph-actions.component';
import { WeatherComponent } from './pages/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    WeatherGraphActionsComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
