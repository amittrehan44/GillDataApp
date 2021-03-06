import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Client } from './client.model';
@Injectable()
export class ClientService {
  clientList: AngularFireList<any>;
  clientAppointmentsList: AngularFireList<any>;
  selectedClient: Client = new Client();
  constructor(private firebase : AngularFireDatabase) { }

  getData(){
    this.clientList = this.firebase.list('clients');
    return this.clientList;
  }

  getClientAppData(){
    this.clientAppointmentsList = this.firebase.list('clientAppointments');
    return this.clientAppointmentsList;
  }

  insertClient(client: Client): string  
  {
    return this.clientList.push({
      firstName: client.firstName,
      lastName: client.lastName,
      phone: client.phone,
      landline: client.landline,
      email: client.email,
      age: client.age,
      gender: client.gender,
      street1: client.street1,
      city: client.city,
      province: client.province,
      postal: client.postal,
      lead: 'Victoria Nagar Kirtan',
      profession: client.profession,
      notes: client.notes
    }).key;
  }

  insertNewClientInClientApp(client: string) 
  {
    this.clientAppointmentsList.push({
      clientKey: client
    });
  }

  updateClient(client: Client) 
  {
    this.clientList.update( client.$key,
      {
        firstName: client.firstName,
        lastName: client.lastName,
        phone: client.phone,
        landline: client.landline,
        email: client.email,
        age: client.age,
        gender: client.gender,
        street1: client.street1,
        city: client.city,
        province: client.province,
        postal: client.postal,
        lead: 'Victoria Nagar Kirtan',
        profession: client.profession,
        notes: client.notes
    });
  }

  deleteClient($key: string){
    this.clientList.remove($key);
  }

}
