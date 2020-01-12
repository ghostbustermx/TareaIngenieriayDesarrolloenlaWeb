import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ticket } from '../interfaces/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  API_ENDPOINT = 'https://www.venadoblanco.com/TareaIngenieria/Back/API/public/api/';
  constructor(private httpClient: HttpClient ) { }
  get(){
    return this.httpClient.get(this.API_ENDPOINT + 'tickets');
  }
  save(ticket: ticket){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + 'tickets', ticket, {headers: headers});
  }
  put(ticket: ticket){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(this.API_ENDPOINT + 'tickets/' + ticket.id, ticket, {headers: headers});
  }
  delete(id) {
    return this.httpClient.delete(this.API_ENDPOINT + 'tickets/' + id);
  }

}
