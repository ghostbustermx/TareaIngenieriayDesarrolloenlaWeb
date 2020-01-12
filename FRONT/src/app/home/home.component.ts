import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../services/tickets.service';
import { ticket } from '../interfaces/ticket';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tickets: ticket[];
  constructor(private ticketsService: TicketsService) {
    this.getTickets();
   }

   getTickets() {
    this.ticketsService.get().subscribe( (data: ticket[])=>{
      this.tickets = data;
    }, (error)=>{
      console.log(error);
      alert('Ocurrio un error');
    } );
   }

  ngOnInit() {
  }



  delete(id) {
    if (confirm('estas seguro de eliminar este ticket?')){
      this.ticketsService.delete(id).subscribe( (data)=>{
        alert('Ticket eliminado con exito');
        console.log(data);
        this.getTickets();
      }, (error)=>{
        console.log(error);
      });
    }
    
  }

}
