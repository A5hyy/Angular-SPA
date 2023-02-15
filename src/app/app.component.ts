import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  form!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router){}

  // create a form, with field = name: (Call it a control)
  createForm(): FormGroup{
    return this.fb.group({
      name: this.fb.control('')
    })
  }

  // once load the page, the form will be created
  ngOnInit(): void {
    this.form = this.createForm();
  }

  // once click the add button, print to console, navigate to name, reset form
  add(){
    const name = this.form.value['name'];
    console.info('<<<<<<<< name', name)
    this.router.navigate(['/customer', name])
    // to reset the form
    this.form = this.createForm();
  }
  


}
