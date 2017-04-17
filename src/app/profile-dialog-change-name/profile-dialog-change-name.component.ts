import { MdDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-dialog-change-name',
  templateUrl: './profile-dialog-change-name.component.html',
  styleUrls: ['./profile-dialog-change-name.component.scss']
})
export class ProfileDialogChangeNameComponent implements OnInit {

  constructor(private dialog : MdDialog) { }

  ngOnInit() {
  }
  cancel() {
    this.dialog.closeAll();
  }

}
