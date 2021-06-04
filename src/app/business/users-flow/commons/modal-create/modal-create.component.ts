import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { UsersService} from '../services/users.service';

interface Documents {
  value: string;
  viewValue: string;
}

interface Roles {
  nombre: string;
}

@Component({
  selector: 'app-modal-create',
  templateUrl: './modal-create.component.html',
  styleUrls: ['./modal-create.component.scss']
})
export class ModalCreateComponent implements OnInit {
  createform: FormGroup;
  formError: boolean = false;

  documents: Documents[] = [
    {value: 'dni', viewValue: 'DNI'},
    {value: 'carnet-extranjeria', viewValue: 'CARNET EXTR.'}
  ];

  constructor(
    public dialogRef: MatDialogRef <ModalCreateComponent>,
    private userService: UsersService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public message:string){ }


  loadedRoles: Roles[];

  ngOnInit() {
    this.userService.getRoles().subscribe((data:any)=>{
      this.loadedRoles = data;
      console.log(data);
    });

    this.createForm();
  }

  createForm() {
    this.createform = this.formBuilder.group({
      tipoDocumento:['',Validators.required],
      numeroDocumento:['',Validators.required],
      estado:['',Validators.required],
      nombres:['',Validators.required],
      apellidoPaterno:['',Validators.required],
      apellidoMaterno:['',Validators.required],
      cargo:['',Validators.required],
      role:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required],
      telefono:['',Validators.required],
    });
    /*this.createform = new FormGroup({
      //tipoDocumento: new FormControl('', Validators.required),
      numeroDocumento: new FormControl('', Validators.required),
      //estado: new FormControl('', Validators.required),
      nombres: new FormControl('', Validators.required),
      apellidoPaterno: new FormControl('', Validators.required),
      apellidoMaterno: new FormControl('', Validators.required),
      cargo: new FormControl('', Validators.required),
      //role: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required)
    })*/

  }


  //selectDocument:string;

  isCreate(){
    let createUser = this.createform.value;
    const user_data = {
      nombres : createUser.nombres ,
      apellidoPaterno : createUser.apellidoPaterno,
      apellidoMaterno : createUser.apellidoMaterno,
      cargo: createUser.cargo,
      tipoDocumento: createUser.tipoDocumento,
      numeroDocumento: createUser.numeroDocumento,
      telefono: createUser.telefono,
      username: createUser.username,
      password: createUser.password,
      role: createUser.role,
      estado: createUser.estado
    };

    this.userService.createUser(user_data).subscribe({
      next: response => {
        this.formError = false;
        console.log(response);
        this.onClickNO();
      },
      error: err => {
        // console.log(err);
        this.formError = true;
        console.log(err)
      },
    })
  }

  onClickNO():void{
    this.dialogRef.close(false);
  }
}
