import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ListaEmpresasComponent } from './lista-empresas/lista-empresas.component'
import { CriaEmpresasComponent } from './cria-empresas/cria-empresas.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'

import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { AlteraEmpresasComponent } from './altera-empresas/altera-empresas.component';
import { DialogExcluirComponent } from './dialog-excluir/dialog-excluir.component'





@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ListaEmpresasComponent,
    CriaEmpresasComponent,
    AlteraEmpresasComponent,
    DialogExcluirComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'lista-empresas', component: ListaEmpresasComponent },
      { path: 'cria-empresas', component: CriaEmpresasComponent },
      { path: 'altera-empresas/:id', component: AlteraEmpresasComponent },
      { path: 'excluir-empresa', component: DialogExcluirComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
