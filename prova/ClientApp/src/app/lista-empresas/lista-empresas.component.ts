import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Empresa } from '../models/empresa';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-lista-empresas',
  templateUrl: './lista-empresas.component.html',
  styleUrls: ['./lista-empresas.component.css']
})
export class ListaEmpresasComponent implements OnInit {
  title = 'lista empresas';

  empresa = {} as Empresa;
  empresas: Empresa[];
  displayedColumns: string[] = ['Id', 'Nome', 'CNPJ', 'Endereco', 'Email'];
  dataSource;

  constructor(private apiServices: ApiService) { }

  ngOnInit() {
    this.getEmpresas();
  }

  //teste




  // defini se um carro será criado ou atualizado
  saveEmpresa(form: NgForm) {
    if (this.empresa.id !== undefined) {
      this.apiServices.updateEmpresa(this.empresa).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.apiServices.saveEmpresa(this.empresa).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  // Chama o serviço para obtém todas as empresas
  getEmpresas() {
    this.apiServices.getEmpresa().subscribe((empresas: Empresa[]) => {
      console.log(empresas)
      this.dataSource = empresas;
    });
  }

  // deleta uma empresa
  deleteEmpresa(empresa: Empresa) {
    this.apiServices.deleteEmpresa(empresa).subscribe(() => {
      this.getEmpresas();
    });
  }

  // copia uma empresa
  editEmpresa(empresa: Empresa) {
    // this.empresa = {  };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getEmpresas();
    form.resetForm();
    this.empresa = {} as Empresa;
  }


}
