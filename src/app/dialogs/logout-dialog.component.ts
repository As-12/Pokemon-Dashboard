import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-logout-dialog",
  template: `
    <div class="dialog-container">
      <h1 mat-dialog-title>Sign Out</h1>

      <p>Are you sure you want to Sign Out?</p>

      <div class="buttons" mat-dialog-actions>
        <button mat-button (click)="onNoClick()">Cancel</button>
        <button mat-button [mat-dialog-close]="true" cdkFocusInitial>
          Log Out
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      mat-label {
        color: white;
      }
      mat-error {
        color: #fa8a89;
      }
      .dialog-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        height: 100%;
      }
      .buttons {
        margin-left: auto;
      }
      h1 {
        margin-right: auto;
      }
    `
  ]
})
export class LogoutDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<LogoutDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
