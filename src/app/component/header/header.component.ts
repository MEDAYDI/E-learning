import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addactive(num:any):void{
    var comp = document.querySelectorAll('.main_nav li');
    comp.forEach((com,i)=>{
         if (num==i) {
             com.classList.add('active');
         }else if(com.classList.contains('active')){
          com.classList.remove('active');
         }
    })
  }

}
