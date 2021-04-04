import { Component, OnInit } from '@angular/core';
import { Empresa } from '../models/empresa';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-altera-empresas',
  templateUrl: './altera-empresas.component.html',
  styleUrls: ['./altera-empresas.component.css']
})
export class AlteraEmpresasComponent implements OnInit {

  empresas = {} as Empresa;

  constructor(private apiServices: ApiService, private route: ActivatedRoute) { }

  id = parseInt(this.route.snapshot.paramMap.get('id'));

  ngOnInit() {
    this.getEmpresasById(this.id);
  }

  getEmpresasById(Id: number) {
    this.apiServices.getEmpresaById(Id).subscribe((empresas: Empresa) => {
      this.empresas = empresas;
    });
  }

  onSubmit(data) {
    this.apiServices.updateEmpresa(data).subscribe(() => {
    });
  }
}
