import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'elastic';
 workFromHome:boolean=false;
 questions:boolean=true;
 questionName:any;
 

wfh(val:any){
this.workFromHome = true;
this.questions =false
console.log(val,"ppppppppppp")
}



}
