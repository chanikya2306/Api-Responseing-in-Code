import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

  constructor(private httpclient: HttpClient) { 

  }

  getUserdata(){
    let  url = environment.apiDomain + 'api/users?page=2';
    return this.httpclient.get(url);
  }
  getUserdatapage1(){
    let url = environment.apiDomain + 'api/users?page=1';
    return this.httpclient.get(url);
  }
}
