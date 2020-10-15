import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css'],
})
export class VistaComponent implements OnInit {
  @Input() nombre_entrada: string;
  @Input() apellido_entrada: string;
  @Input() telefono_entrada: number;
  constructor() {}

  ngOnInit(): void {}
}
