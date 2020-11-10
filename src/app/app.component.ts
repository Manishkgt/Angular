import { Component, OnInit } from '@angular/core';  
import { NgForm, Validators } from '@angular/forms';  
import { StyleService } from './style.service';


  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {  
    formData: any = {};  
    showMessage: boolean = false;  
    namex: any;
    lasttname: any;
    slidein='grettings leadd';
    fontSize: number = 30;
    max: string = "bold";

   constructor() {}
   ngOnInit() {
      
   }
    registerUser(formdata: NgForm) {  
        this.formData = formdata.value;  
        this.showMessage = true;  
    }  
    nameSelected:any;
    capitalAssigned:any;
    data = [
      {
        name: "Andhra Pradesh",
        capital: "Hyderabad",
      },
      {
        name: "Arunachal Pradesh",
        capital: "Itanagar",
      },
      {
        name: "Assam",
        capital: "Dispur",
      },
      {
        name: "Bihar",
        capital: "Patna",
      },
      {
        name: "Chhattisgarh",
        capital: "Raipur",
      },
      {
        name: "Goa",
        capital: "Panaji",
      },
      {
        name: "Gujrat",
        capital: "Gandhinagar",
      },
      {
        name: "Hariyana",
        capital: "Chandigarh",
      },
      {
        name: "Himachal Pradesh",
        capital: "Shimla",
      },
      {
        name: "Jammu and Kashmir",
        capital: "Srinagar",
      },
      {
        name: "Jharkhand",
        capital: "Ranchi",
      },
      {
        name: "Karnataka",
        capital: "Bengaluru",
      },
      {
        name: "Kerala",
        capital: "Thiruvananthapuram",
      },
      {
        name: "Madhya Pradesh",
        capital: "Bhopal",
      },
      {
        name: "Maharashtra",
        capital: "Mumbai",
      },
      {
        name: "Manipur",
        capital: "Imphal",
      },
      {
        name: "Meghalaya",
        capital: "Shillong",
      },
      {
        name: "Mizoram",
        capital: "Aizawl",
      },
      {
        name: "Nagaland",
        capital: "Kohima",
      },
      {
        name: "Odihsa",
        capital: "Bhubaneswar",
      },
      {
        name: "Punjub",
        capital: "Chandigarh",
      },
      {
        name: "Rajasthan",
        capital: "Jaipur",
      },
      {
        name: "Sikkim",
        capital: "Gangtok",
      },
      {
        name: "Tamil Nadu",
        capital: "Chennai",
      },
      {
        name: "Telangana",
        capital: "Hyderabad",
      },
      {
        name: "Tripura",
        capital: "Agartala",
      },
      {
        name: "Uttar Pradesh",
        capital: "Lucknow",
      },
      {
        name: "Uttarakhand",
        capital: "Dehradun",
      },
      {
        name: "West Bengal",
        capital: "Kolkata",
      }
    ];
}  