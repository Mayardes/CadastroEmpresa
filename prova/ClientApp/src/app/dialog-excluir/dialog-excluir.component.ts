import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
import { Empresa } from '../models/empresa';

export interface DialogData {
  id: string;
  nome: string;
}

@Component({
  selector: 'app-dialog-excluir',
  templateUrl: './dialog-excluir.component.html',
  styleUrls: ['./dialog-excluir.component.css']
})

export class DialogExcluirComponent{

  constructor(
    public dialogRef: MatDialogRef<DialogExcluirComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private apiServices: ApiService) { }

  
  @Output() dataSource = new EventEmitter<Empresa[]>()

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(id): void {
    this.apiServices.deleteEmpresa(id).subscribe((mensagem: Empresa) => {
    });
    this.dialogRef.close();
  }

  getEmpresas() {
    this.apiServices.getEmpresa().subscribe((empresas: Empresa[]) => {
      this.dataSource.emit(empresas)
    });
  }


}
