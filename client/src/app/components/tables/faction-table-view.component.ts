import { AllFactionsGQL, FactionOutput } from "src/app/services/whtcGraphglService";
import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";

@Component({
    selector: "app-faction-table-view",
    template: `
        <div>
            <h2>All Factions</h2>
            <h4>Total Factions: {{(factions$ | async)?.length}} | Latest Update: {{(factions$ | async)?.at(0)?.createdAt }} </h4>
            <div class="lessons-list-container v-h-center-block-parent">
                <app-table-view [tableItems]="((factions$ | async) ?? [])" (faction)="selectAbility($event)"></app-table-view>
            </div>
        </div>
    `,
    styles: [
    ]
})

export class FactionTableViewComponent {
    factions$ = this.factionService.fetch().pipe(map((res) => res.data.factions));

    constructor(private readonly factionService: AllFactionsGQL) { }

    selectAbility(faction: any) {
        // ...
    }
}
