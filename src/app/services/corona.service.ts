import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(private http: HttpClient) { }
 private url = "https://api.covid19api.com/countries"
  getCountries():Observable<any> {
    return this.http.get<any>(this.url)
  }
  getCoronaRealTimeData(country): Observable<any>{
    const url=`https://api.covid19api.com/total/dayone/country/${country}`
    return this.http.get(url)
  }
}
