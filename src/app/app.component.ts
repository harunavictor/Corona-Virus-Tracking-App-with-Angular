import { Component, OnInit } from "@angular/core";
import { CoronaService } from "./services/corona.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  countries: any[];
  country: any;
  confirmed: number
  recovered: number
  deaths: number
  
  constructor(private coronaServ: CoronaService) {}
  ngOnInit() {
    this.coronaServ.getCountries().subscribe((response) => {
      // console.log(response);
      this.countries = response;
    });
  }
  getCoronaData() {
    this.coronaServ.getCoronaRealTimeData(this.country).subscribe((data) => {
      console.log(data) 
      const index = data.length - 1
      console.log(index)
      this.confirmed = data[index].Confirmed
      this.recovered = data[index].Recovered
      this.deaths = data[index].Deaths
      
    })
  }
  getCountry(country: any) {
    this.country = country;
  }
}
