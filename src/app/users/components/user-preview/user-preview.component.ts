import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IUser } from '../../models/user';

@Component({
  selector: 'an-user-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.scss']
})
export class UserPreviewComponent implements OnInit {
  @Input() user: IUser;
  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() remove: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

}
