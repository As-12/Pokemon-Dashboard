import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-confirm-delete-dialog",
  template: `
    <div class="dialog-container">
      <h1 mat-dialog-title>Confirm Deletion</h1>

      <p>Are you sure you want to delete?</p>

      <div class="buttons" mat-dialog-actions>
        <button mat-button (click)="onNoClick()">Cancel</button>
        <button mat-button [mat-dialog-close]="true" cdkFocusInitial>
          Delete
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
export class ConfirmDeleteDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
