import { Component, VERSION, OnInit } from '@angular/core';
import { FinderService } from './finder.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit{
  name="weather app"
  lat;
lon;
weather;
city;
  constructor(private weatherService:FinderService) {}

  ngOnInit() {
    this.getLocation();
  }
  getLocation()
  {
    if("geolocation" in navigator){
      navigator.geolocation.watchPosition((success)=>{
        this.lat=success.coords.latitude;
        this.lon=success.coords.longitude;
        
        this.weatherService.getWeatherDataByCoords(this.lat,this.lon).subscribe(data=>{
          this.weather=data;
        });
      })
    }
  }
getCity(city)
{
  this.weatherService.getWeatherDataByCityName(this.city).subscribe(data=>{
    this.weather=data;
    
  })
}
  


}