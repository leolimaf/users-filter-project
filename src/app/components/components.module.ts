import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { UsersListComponent } from './users-list/users-list.component';
import { PipesModule } from '../pipes/pipes.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UserDetailsComponent, FilterComponent, UsersListComponent],
  imports: [AngularMaterialModule, FormsModule, PipesModule, CommonModule],
  exports: [
    UserDetailsComponent,
    FilterComponent,
    FormsModule,
    UsersListComponent,
  ],
})
export class ComponentsModule {}
