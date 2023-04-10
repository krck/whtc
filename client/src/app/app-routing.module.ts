import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AbilityTableViewComponent } from "./components/tables/ability-table-view.component";
import { FactionTableViewComponent } from "./components/tables/faction-table-view.component";
import { CalculatorComponent } from "./components/calculator/calculator.component";

const routes: Routes = [
    // Home as the main route
    { path: "", component: HomeComponent },
    { path: "calculator/basic", component: CalculatorComponent },
    { path: "tables/abilities", component: AbilityTableViewComponent },
    { path: "tables/factions", component: FactionTableViewComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
