import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-outline-button',
  templateUrl: './outline-button.component.html',
  styleUrl: './outline-button.component.scss'
})
export class OutlineButtonComponent {
@Input() label:string='';
@Input() color:string='primary';
@Input() icon:string='';
}
