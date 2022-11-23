import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {}
  registrar() {
    this.toastr.success('Verifica tu usuario', '¡Nuevo Usuario Creado!');
  }
}
