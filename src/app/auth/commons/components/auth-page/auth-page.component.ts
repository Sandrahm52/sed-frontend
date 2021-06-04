import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoginService } from '../../services/login.service';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../../../../commons/componets/modal/modal.component';
import { ModalForgotComponent } from '../../modal-forgot/modal-forgot.component'

@Component({
  selector: 'app-auth',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {
  form: FormGroup;
  formError: boolean = false;
  llaveWeb: string;
  constructor(
    public router: Router,
    private loginservice: LoginService,
    public dialog: MatDialog
  ) {
    this.llaveWeb = environment.llaveWeb;
  }
  handleSuccess(e) {
    console.log("ReCaptcha", e);
  }
  ngOnInit() {
    this.createForm();
    localStorage.clear();
  }

  createForm() {
    this.form = new FormGroup({
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      recaptchaReactive: new FormControl('', Validators.required),
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px',
      panelClass: 'dialog-content-example',
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      if (res) {
        console.log('ACCIÓN SIGUIENTE');
      }
    });
  }


  openDialogPass(): void {
    const dialogPass = this.dialog.open(ModalForgotComponent, {
      width: '600px',
      panelClass: 'dialog-content-example',
    });
    dialogPass.afterClosed().subscribe(res => {
      console.log(res);
      if (res) {
        console.log('ACCIÓN SIGUIENTE');
      }
    });
  }

  isLogin() {
    let user = this.form.value;
    // console.log(user);
    // const payload = 'username=efigueroa&password=123456&grant_type=password'
    const payload = `username=${user.user}&password=${user.password}&grant_type=password`;

    this.loginservice.login(payload).subscribe({
      next: response => {
        this.formError = false;
        const accessToken = response.body.access_token;
        localStorage.setItem(environment.sessionKey, accessToken);
        this.router.navigate(['/business-flow/home']);
        // console.log(response.body)
      },
      error: err => {
        // console.log(err);
        this.formError = true;
        this.openDialog();
      },
    })
  }

  forgotPass() {
    this.openDialogPass();
  }

}
