import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cria-empresas',
  templateUrl: './cria-empresas.component.html',
  styleUrls: ['./cria-empresas.component.css']
})
export class CriaEmpresasComponent implements OnInit {

  constructor(private apiServices: ApiService) { }

  ngOnInit() {
  }

  onSubmit(data) {
    this.apiServices.saveEmpresa(data).subscribe(() => {
    });
  }

}
