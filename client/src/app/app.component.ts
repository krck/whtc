import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { map, shareReplay } from "rxjs/operators";
import { Component } from "@angular/core";
import { Observable } from "rxjs";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styles: [`
        .sidenav-container {
            height: 100%;
        }
        .sidenav {
            min-width: 200px;
        }
        .spacer {
            flex: 1 1 auto;
        }
    `]
})

export class AppComponent {
    title = "whtc";

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches),
            shareReplay()
        );

    constructor(private breakpointObserver: BreakpointObserver) { }

}
