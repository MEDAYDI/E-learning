import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  closeBarbtn:boolean=false;
  playicon:boolean=true;
  pauseicon:boolean=false;
  numbStar:number=0;
  textArea!:any;
  addAnnoceEta:boolean=false;
  removeAnnoceEta:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

     closeBar():void {
     var courseconten = document.querySelector('.course-content ') ;
     courseconten!.classList.add('close') ;
      var videocontent = document.querySelector('.video-content');
      videocontent!.classList.remove('col-lg-9');
      videocontent!.classList.add('col-lg-12');
      this.closeBarbtn=true;
     }

     openBar():void{
      var courseconten = document.querySelector('.course-content ') ;
      courseconten!.classList.remove('close') ;
      var videocontent = document.querySelector('.video-content');
      videocontent!.classList.remove('col-lg-12');
      videocontent!.classList.add('col-lg-9');
      this.closeBarbtn=false;

     }

     pauseAllvideo():void{
      var listVideo = document.querySelectorAll('.video-list .vid');
      listVideo.forEach(video => {
          if (!video.classList.contains('active')) {
             var vid=video.querySelector('video');
              vid?.pause();
          }
     })
    }

    pausePlay():void{
      if(this.pauseicon){
        this.pauseicon=false ;
        this.playicon=true;
      }
    }

    numStar(num:any):void{
      this.numbStar=num;
      var allStars=document.querySelectorAll('.star')
               allStars.forEach((star,i)=>{
                star.classList.remove('starActive');
                 if(i+1==num){
                  for (let index = 0; index <=i; index++) {
                    allStars[index].classList.add('starActive');   
                  }
                 }
               })
    }

    addcomnt():void{

    }

    addAnnoce():void{
       this.addAnnoceEta=true;
       this.removeAnnoceEta=false;
          }

    annulAnnoce():void{
      this.removeAnnoceEta=true;
      this.addAnnoceEta=false;
    }
}
