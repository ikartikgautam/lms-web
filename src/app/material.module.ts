import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const matModules: any[] = [
    MatInputModule,
    MatButtonModule
];

@NgModule({
    exports: [matModules]
})
export class MaterialModule { }
