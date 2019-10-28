import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user'

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  compteForm : FormGroup;
  submit : boolean = false;
  validPassword : boolean = true;
  validCompte : boolean = false;
  user : User = new User();

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.compteForm = this.formBuilder.group({
      name: ['', Validators.required],
      firstName: ['', Validators.required],
      adress: ['', [Validators.required]],
      cp: ['', [Validators.required]],
      ville: ['', [Validators.required]],
      tel: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10)])],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      civilite: ['', [Validators.required]],
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
      passwordVerif: ['', [Validators.required]],
    },
    {
      //validator: this.verifPassword('mdp', 'mdp2')
    });
  }

  get getCompte(){
    return this.compteForm.controls;
  }
  

  saveUser() {
    if(this.verifPassword()){
      this.submit = true;
      this.validPassword = true;
    
      if(this.compteForm.valid){
        this.validCompte = true;
        this.user.name = this.compteForm.controls['name'].value;
        this.user.firstName = this.compteForm.controls['firstName'].value;
        this.user.adress = this.compteForm.controls['adress'].value;
        this.user.cp = this.compteForm.controls['cp'].value;
        this.user.ville = this.compteForm.controls['ville'].value;
        this.user.tel = this.compteForm.controls['tel'].value;
        this.user.email = this.compteForm.controls['email'].value;
        this.user.civilite = this.compteForm.controls['civilite'].value;
        this.user.login = this.compteForm.controls['login'].value;
        this.user.password = this.compteForm.controls['password'].value;
        this.user.passwordVerif = this.compteForm.controls['passwordVerif'].value;

      }
    }else{
      this.validPassword = false;
    }
  }
  verifPassword():boolean{
    console.log(this.compteForm.controls['password'].value === this.compteForm.controls['passwordVerif'].value);
    return this.compteForm.controls['password'].value === this.compteForm.controls['passwordVerif'].value;
  }
  
}
