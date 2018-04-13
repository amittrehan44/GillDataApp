import { Component, OnInit } from '@angular/core';
import {ClientService} from './shared/client.service';


@Component({
  selector: 'app-client-data',
  templateUrl: './client-data.component.html',
  styleUrls: ['./client-data.component.css'],
  providers: []
})
export class ClientDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
