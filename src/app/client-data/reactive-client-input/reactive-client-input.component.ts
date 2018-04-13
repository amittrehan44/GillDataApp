import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';

import {ClientService} from '../shared/client.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-reactive-client-input',
  templateUrl: './reactive-client-input.component.html',
  styleUrls: ['./reactive-client-input.component.css']
})
export class ReactiveClientInputComponent implements OnInit {

  constructor(private clientService: ClientService, private toastr: ToastrService) { }

  ngOnInit() {
  }

}
