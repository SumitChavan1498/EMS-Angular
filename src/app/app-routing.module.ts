import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { EmployeeComponent } from "./employee/employee.component";
import { MainComponent } from "./login/main.component";
import { UpdateComponent } from "./admin/updateEmployee/update.component";
import { AddEmployeeComponent } from "./admin/add-employee/add-employee.component";
import { ShowEmployeeComponent } from "./admin/show-employee/show-employee.component";
import { ViewEmployeeComponent } from "./employee/view-employee/view-employee.component";
import { ApplyForLeaveComponent } from "./employee/apply-for-leave/apply-for-leave.component";
import { DeleteAllEmployeeComponent } from "./admin/delete-all-employee/delete-all-employee.component";
import { LeavestatusComponent } from "./employee/leavestatus/leavestatus.component";
import { ErrorComponent } from "./error/error.component";
import { SearchemployeeComponent } from './employee/searchemployee/searchemployee.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: "", redirectTo: "/login", pathMatch: "full" },
      {
        path: "admin",
        component: AdminComponent,
        children: [
          { path: "update", component: UpdateComponent },
          { path: "show", component: ShowEmployeeComponent },
          { path: "add", component: AddEmployeeComponent },
          { path: "deleteall", component: DeleteAllEmployeeComponent },
        ],
      },

      {
        path: "employee",
        component: EmployeeComponent,
        children: [
          { path: "view", component: ViewEmployeeComponent },
          { path: "leave", component: ApplyForLeaveComponent },
          { path: "viewstatus", component: LeavestatusComponent },
          { path: "search", component: SearchemployeeComponent}
        ],
      },
      { path: "login", component: MainComponent },
      { path: "**", component: ErrorComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
