import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proj';
  uname:string;
   pwd:any;
   constructor(public r:Router){}
   fun(){
     if (this.uname=="subbu" && this.pwd=="subbu123")
     this.r.navigateByUrl("contact");
     else
     {
       alert("In valid username and password")
     }
   }

}
