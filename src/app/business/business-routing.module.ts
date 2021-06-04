import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BusinessComponent } from "./business.component";
import { GestionComponent } from "./gestion-flow/gestion.component";
import { HomePageComponent } from "./home-flow/commons/components/home-page/home-page.component";
import { RolesPageComponent } from "./roles-flow/commons/components/roles-page/roles-page.component";
import { UsersPageComponent } from "./users-flow/commons/components/users-page/users-page.component";

const routes: Routes = [  
  {
    path: "",
    component: BusinessComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {
        path: "",
        children: [
          {
            path: "home",
            loadChildren: () =>
              import("./home-flow/home-flow.module").then(
                (m) => m.HomeFlowModule
              ),
          },
          {
            path: "roles",
            loadChildren: () =>
              import("./roles-flow/roles-flow.module").then(
                (m) => m.RolesFlowModule
              ),
          },
          {
            path: "users",
            loadChildren: () =>
              import("./users-flow/users-flow.module").then(
                (m) => m.UsersFlowModule
              ),
          },
          {
            path: "documentos",
            loadChildren: () =>
              import("./gestion-flow/gestion-flow.module").then(
                (m) => m.GestionFlowModule
              ),
          },
          


        ],
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessRoutingModule {}
