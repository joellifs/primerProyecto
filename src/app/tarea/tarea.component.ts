import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css'],
})
export class TareaComponent implements OnInit {
  @Input() nom: string;
  @Input() ap: string;
  @Input() tel: number;
  constructor() {}

  ngOnInit(): void {}
}
