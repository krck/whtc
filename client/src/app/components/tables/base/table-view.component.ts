import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: "app-table-view",
    template: `
        <table class="table app-table-view card card-strong">
            <thead>
                <tr>
                    <th *ngFor="let head of (tableItems[0] | keys)">{{head}}</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of tableItems">
                    <td *ngFor="let list of item | keys">{{item[list]}}</td>
                </tr>
            </tbody>
        </table>
    `,
    styles: [
    ]
})

export class TableViewComponent {

    @Input()
    tableItems: any[] = [];

    @Output("selectedItem")
    selectedItemEmitter = new EventEmitter<any>();

    selectedItem(item: any) {
        this.selectedItemEmitter.emit(item);
    }
}
