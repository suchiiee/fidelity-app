
import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, FormControl, Validators} from '@angular/forms';
import { Roles } from './login';
import { Router, RouterModule } from '@angular/router';
  




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // loginForm: FormGroup;

 formData;

  loginForm = this.fb.group({
    name: ['' ],
    password: [''],
    role : ['', Validators.required]
  })

  // userRole = this.loginForm.get(['role']).value;

  constructor( private fb: FormBuilder, private router: Router) { }

 

  ngOnInit() {
    
  }

  get userRole(): any { return this.loginForm.get('role')};

  onSubmit(){
    
  this.formData = this.loginForm.value;

    
     if(this.formData.role == "Manager"){
        this.router.navigate(['/manager']);
     }
     if(this.formData.role == "Indian-Chef"){
      this.router.navigate(['/indian-chef']);
   }
     if(this.formData.role == "Italian-Chef"){
    this.router.navigate(['/italian-chef']);
 }
   if(this.formData.role == "Bakery-Chef"){
  this.router.navigate(['/bakery-chef']);
}


     this.loginForm.reset();

  }

}
