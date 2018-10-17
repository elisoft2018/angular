import { Component, OnInit } from '@angular/core';
import {user} from '../shared/user';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  /*nombre:String
  apellido:String
  ciudad:String
  direccion:String*/

  user:user={
  nombre:"Juan",
  apellido:"Lopez",
  ciudad:"Tunja",
  direccion:"Av universitaria",
  }


constructor() { 


  }

  ngOnInit() {

    setTimeout(() => {
      this.user.nombre ="carlos";
      this.user.apellido ="Lopez";
      this.user.ciudad="Duitama";
      this.user.direccion="Av.universitaria";
    }, 6000);
  }

}
