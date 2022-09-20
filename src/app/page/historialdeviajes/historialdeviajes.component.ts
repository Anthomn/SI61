import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-historialdeviajes',
  templateUrl: './historialdeviajes.component.html',
  styleUrls: ['./historialdeviajes.component.css']
})
export class HistorialdeviajesComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
