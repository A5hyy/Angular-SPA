import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bear',
  templateUrl: './bear.component.html',
  styleUrls: ['./bear.component.css']
})
export class BearComponent {

  //Class constructors are very similar to functions. You can add parameters with type annotations, default values,
  constructor(private router: Router){}

  clickToHome(){
    console.info('>>>>> bear iamge clicked')
    // this array [] is the same as in app.html ="['/cat']"
    this.router.navigate([ '/' ])
  }

} 
