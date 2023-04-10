import { AbilityOutput, AllAbilitiesGQL } from "src/app/services/whtcGraphglService";
import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";

@Component({
    selector: "app-ability-table-view",
    template: `
        <div>
            <h2>All Abilities</h2>
            <h4>Total Abilities: {{(abilities$ | async)?.length}} | Latest Update: {{(abilities$ | async)?.at(0)?.createdAt }} </h4>
            <div class="lessons-list-container v-h-center-block-parent">
                <app-table-view [tableItems]="((abilities$ | async) ?? [])" (ability)="selectAbility($event)"></app-table-view>
            </div>
        </div>
    `,
    styles: [
    ]
})

export class AbilityTableViewComponent {
    abilities$ = this.abilityService.fetch().pipe(map((res) => res.data.abilities));

    constructor(private readonly abilityService: AllAbilitiesGQL) { }

    selectAbility(ability: any) {
        // ...
    }

}
