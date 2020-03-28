import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-login-dialog",
  template: `
    <div class="dialog-container">
      <h1 mat-dialog-title>Sign In</h1>
      <div class="forms" mat-dialog-content>
        <p>Enter any name to log in.</p>
        <mat-form-field>
          <mat-label>Username</mat-label>
          <input
            required
            minlength="3"
            maxlength="15"
            pattern="^[A-Za-z ]*$"
            id="name"
            name="name"
            placeholder="Username"
            matInput
            [(ngModel)]="data.name"
            #name="ngModel"
          />

          <mat-error *ngIf="name.invalid && (name.dirty || name.touched)">
            <span *ngIf="name.errors.required">
              Name is required.
            </span>
            <span *ngIf="name.errors.minlength">
              Name must be at least 3 characters long.
            </span>
            <span *ngIf="name.errors.maxlength">
              Name cannot be greater than 10 characters long.
            </span>
            <span *ngIf="name.errors.pattern">
              Name can only contain alphabets.
            </span>
          </mat-error>
        </mat-form-field>
      </div>
      <div class="buttons" mat-dialog-actions>
        <button mat-button (click)="onNoClick()">Cancel</button>
        <button
          mat-button
          [disabled]="name.invalid && (name.dirty || name.touched)"
          [mat-dialog-close]="data.name"
          cdkFocusInitial
        >
          Log In
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
      .forms,
      .forms > :nth-child(n) {
        margin-right: auto;
        width: 100%;
      }
    `
  ]
})
export class LoginDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
