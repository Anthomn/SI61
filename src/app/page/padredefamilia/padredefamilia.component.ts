import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-padredefamilia',
  templateUrl: './padredefamilia.component.html',
  styleUrls: ['./padredefamilia.component.css']
})
export class PadredefamiliaComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
