import { Component, OnInit } from '@angular/core';
import { ticket } from '../interfaces/ticket';
import { TicketsService } from '../services/tickets.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  ticket: ticket = {
    sistema: null,
    descripcion: null,
    year: null
  };
  id:any;
  editing:boolean = false;
  tickets: ticket[];
  constructor(private ticketsService: TicketsService, private activatedRoute: ActivatedRoute ) { 
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id){
      this.editing = true;
      this.ticketsService.get().subscribe( (data: ticket[])=>{
        this.tickets = data;
        this.ticket = this.tickets.find( (m)=>{return m.id == this.id} );
        console.log(this.ticket);
      }, (error)=>{
        console.log(error);
      });
    } else {
      this.editing = false;
    }
  }

  ngOnInit() {
  }

  saveTicket(){
  if (this.editing) {
    this.ticketsService.put(this.ticket).subscribe( (data)=> {
      alert('Ticket actualizado correctamente');
      console.log(data);
    }, (error)=>{
      console.log(error);
      alert('Ocurrio un error');
    });
  } else {
    this.ticketsService.save(this.ticket).subscribe( (data)=> {
      alert('Ticket guardado correctamente');
      console.log(data);
    }, (error)=>{
      console.log(error);
      alert('Ocurrio un error');
    });
  }    
  }

}
