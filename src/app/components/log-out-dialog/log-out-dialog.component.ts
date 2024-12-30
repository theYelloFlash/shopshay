import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-log-out-dialog',
  templateUrl: './log-out-dialog.component.html',
  styleUrl: './log-out-dialog.component.scss'
})
export class LogOutDialogComponent {

  constructor(private dialogRef: MatDialogRef<LogOutDialogComponent>) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  logOut(response: string) {
    if (response == 'cancel') {
      this.dialogRef.close(false);
    } else {
      this.dialogRef.close(true)
    }
  }

}
