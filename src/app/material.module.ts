import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@NgModule({
    exports: [FormsModule, MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule]
})
export class MaterialModule { }
