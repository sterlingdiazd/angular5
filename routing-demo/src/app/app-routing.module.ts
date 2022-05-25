import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeparmentListComponent } from './deparment-list/deparment-list.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
	{ path: '', redirectTo: '/departments-list', pathMatch: 'full' },
	{ path: 'departments-list', component: DeparmentListComponent },
  {
    path: 'departments-list/:id',
    component: DepartmentDetailComponent,
    children: [
      { path: 'overview', component: DepartmentOverviewComponent },
      { path: 'contact', component: DepartmentContactComponent }
    ]
  },
	{ path: 'employees', component: EmployeeListComponent },
	{ path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
	DeparmentListComponent,
	DepartmentDetailComponent,
	EmployeeListComponent,
  PageNotFoundComponent,
  DepartmentOverviewComponent,
	DepartmentContactComponent
]
