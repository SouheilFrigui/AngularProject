import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TPAngular';
  imgURL="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg";
  onClick($event: any){
    console.log("Button is clicked",$event)
  }
  name: string="";
}
