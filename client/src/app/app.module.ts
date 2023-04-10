import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { GraphQLModule } from "./graphql.module";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { AbilityTableViewComponent } from "./components/tables/ability-table-view.component";
import { FactionTableViewComponent } from "./components/tables/faction-table-view.component";
import { TableViewComponent } from "./components/tables/base/table-view.component";
import { KeysPipe } from "./pipes/keysPipe";
import { CalculatorComponent } from "./components/calculator/calculator.component";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CalculatorComponent,
        AbilityTableViewComponent,
        FactionTableViewComponent,
        TableViewComponent,
        KeysPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        GraphQLModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatExpansionModule,
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatListModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
