import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';

import {ClientService} from '../shared/client.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-client-input',
  templateUrl: './client-input.component.html',
  styleUrls: ['./client-input.component.css']
})
export class ClientInputComponent implements OnInit {

  mask: any[] = ['+', '1', /[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
  mask1: any[] = [/[0-9]/, ':', /[0-5]/, /[0-9]/];
  mask2: any[] = [/^[0-9]+(\.[0-9]{1,2})?$/];
  mask3: any[] = ['+', '1', /[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

  constructor(private clientService: ClientService, private toastr: ToastrService) { }

  ngOnInit() {
    // moving getdata to employee list, as both input and list are on same page
    //this.clientService.getData();
    this.resetForm();
  }

  onSubmit(clientForm: NgForm) {
    if(clientForm.value.$key == null)
    this.clientService.insertClient(clientForm.value);
    else
    this.clientService.updateClient(clientForm.value);
    this.resetForm(clientForm);
    this.toastr.success('Submitted Successfully', 'Client Register');
  }

  resetForm(clientForm?: NgForm) {
    if(clientForm != null)
      clientForm.reset();
    this.clientService.selectedClient = {
      $key: null,
      firstName: ' ',
      lastName: ' ', 
      phone: ' ',
      landline: ' ',
      email: ' ',
      age: ' ',
      gender: ' ',
      street1: '',
      city: '',
      province: '',
      postal: '',
      lead: 'Victoria NagarKirtan',
      profession: '',
      notes: ''

    }

  }

}
