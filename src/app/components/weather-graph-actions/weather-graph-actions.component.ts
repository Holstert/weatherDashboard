import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-weather-graph-actions',
  templateUrl: './weather-graph-actions.component.html',
  styleUrls: ['./weather-graph-actions.component.css']
})
export class WeatherGraphActionsComponent implements OnInit, AfterViewInit {

  private _cities: object[];
  private _citiesCopy: object[] = [];
  private _citiesSelected = [];
  private _scales: object[] = [];
  private _defaultCity: string = 'Obregon';

  @Input() 
  set cities (cities: object[]) {
    this._cities = cities;
    this.setCitiesCopy(this._cities);
  }
  @Input() 
  set scales (scales: object[]) {
    this._scales = scales;
  }
  @Output() sendCities = new EventEmitter();
  @Output() sendCity = new EventEmitter();
  @Output() removeCitySelected = new EventEmitter();
  @Output() sendScale = new EventEmitter();

  constructor() { }

  ngOnInit() { 
    this.sendCitySelected(this._defaultCity);
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.addCity(this._defaultCity); 
      this.sendCitiesArray()
    })
  }
  private setCitiesCopy(value) {
    this._citiesCopy = value;
  }
  private addCity($item) {
    let cities = this._citiesCopy.filter((item:any) => {
      return item.city != $item
    })

    this.setCitiesCopy(cities);
    this._citiesSelected.push({"city": $item})
  }
  private revertCity( {city} ) {
    this.removeItemCitiesSelected(city)  
    
    this._citiesCopy.push(this.findCity(city))
    this.sendRemoveCitySelected(city);
  }
  findCity($city) {
    return this._cities.find( (item:any) => {
      return item.city == $city && item;
    })
  }
  removeItemCitiesSelected($city) {
    this._citiesSelected = this._citiesSelected.filter( (item) => {
      return item.city != $city
    });
  }
  sendCitiesArray() {
    this.sendCities.emit(this._citiesSelected)
  }
  sendCitySelected($city) {
    this.sendCity.emit($city)
  }
  sendRemoveCitySelected($city) {
    this.removeCitySelected.emit($city)
  }
  changeScale($event) {
    this.sendCities.emit(this._citiesSelected);
    this.sendScale.emit(this._scales[$event])
  }
}