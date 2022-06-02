import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from 'src/app/Services/apiservices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showdata: any;
  printed_Values: any;
  page1: any;
  page2: any;
  per_page1: any;
  per_page2: any;
  supporturl1: any;
  supporttxt1: any;
  supporturl2: any;
  supporttxt2: any;
  totalpages1: any;
  totalpages2: any;
  total_ArrayOfObj1: any;
  total_ArrayOfObj2: any;
  constructor(private api: ApiservicesService) { }

  ngOnInit(): void {
    this.Page1Userdata();
    this.userDetails();

  }
  Page1Userdata(){
    this.api.getUserdatapage1().subscribe((responsedata:any)=>{
      console.log(responsedata.data);
      this.printed_Values = responsedata.data;
      console.log(responsedata);
      this.page1 = responsedata.page;
      this.per_page1 = responsedata.per_page;
      this.supporturl1 = responsedata.support.url;
      this.supporttxt1 = responsedata.support.text;
      this.totalpages1 = responsedata.total_pages;
      this.total_ArrayOfObj1 = responsedata.total
    })
  }
  userDetails() {
    this.api.getUserdata().subscribe((response: any) => {
      console.log(response.data);
      this.showdata=response.data;
      console.log(response);
      this.page2 = response.page;
      this.per_page2 = response.per_page;
      this.supporturl2 = response.support.url;
      this.supporttxt2 = response.support.text;
      this.totalpages2 = response.total_pages;
      this.total_ArrayOfObj2 = response.total
    });
  }

}
