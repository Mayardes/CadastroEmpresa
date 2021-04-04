import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Empresa } from '../models/empresa';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://localhost:44361/v1/empresa';

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // Obtem todas as empresas
  getEmpresa(): Observable<Empresa[]> {
    return this.httpClient.get<Empresa[]>(this.url)
      .pipe(
        retry(0),
        catchError(this.handleError));
  }

  // Obtem uma empresa
  getEmpresaById(id: number): Observable<Empresa> {
    return this.httpClient.get<Empresa>(this.url + '/' + id)
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }

  // salva uma empresa
  saveEmpresa(empresa: Empresa): Observable<Empresa> {
    return this.httpClient.post<Empresa>(this.url, JSON.stringify(empresa), this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }

  // atualiza uma empresa
  updateEmpresa(empresa: Empresa): Observable<Empresa> {
    return this.httpClient.put<Empresa>(this.url + '/' + empresa.id, JSON.stringify(empresa), this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }

  // deleta uma empresa
  deleteEmpresa(id: number) {
    return this.httpClient.delete<Empresa>(this.url + '/' + id, this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
