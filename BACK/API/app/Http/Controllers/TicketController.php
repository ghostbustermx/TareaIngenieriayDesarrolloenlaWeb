<?php

namespace App\Http\Controllers;

use App\Ticket;
use Illuminate\Http\Request;

class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tickets = Ticket::get();
        echo json_encode($tickets); 
    }

    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $ticket = new Ticket();
        $ticket->sistema = $request->input('sistema');
        $ticket->descripcion = $request->input('descripcion');
        $ticket->year = $request->input( 'year');
        $ticket->save();
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Ticket  $ticket_id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $ticket_id)
    {
        $ticket = Ticket::find($ticket_id);
        echo json_encode($ticket);
        $ticket->sistema = $request->input('sistema');
        $ticket->descripcion = $request->input('descripcion');
        $ticket->year = $request->input('year');
        $ticket->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Ticket  $ticket
     * @return \Illuminate\Http\Response
     */
    public function destroy($ticket_id)
    {
        $ticket = Ticket::find($ticket_id);
        $ticket->delete();

    }
}
