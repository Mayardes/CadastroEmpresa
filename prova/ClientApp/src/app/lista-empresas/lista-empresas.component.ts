import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Empresa } from '../models/empresa';
import { ApiService } from '../services/api.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogExcluirComponent } from '../dialog-excluir/dialog-excluir.component';


@Component({
  selector: 'app-lista-empresas',
  templateUrl: './lista-empresas.component.html',
  styleUrls: ['./lista-empresas.component.css']
})
export class ListaEmpresasComponent implements OnInit {
  title = 'lista empresas';

  empresa = {} as Empresa;
  empresas: Empresa[];

  displayedColumns: string[] = ['Id', 'Nome', 'CNPJ', 'Endereco', 'Email', 'Excluir', 'Alterar'];
  dataSource;

  constructor(private apiServices: ApiService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getEmpresas();
  }

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
      this.dataSource = empresas;
    });
  }

  // deleta uma empresa
  deleteEmpresa(id: number) {
    this.apiServices.deleteEmpresa(id).subscribe(() => {
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

  openDialog(item) {
    const dialogRef = this.dialog.open(DialogExcluirComponent, {
      width: '250px',
      data: { id: item}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getEmpresas();
    });
  }



}
