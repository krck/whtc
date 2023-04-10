import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "keys" })
export class KeysPipe implements PipeTransform {
    transform(value: any): any {
        const keys: any[] = [];
        for (const key in value) {
            if (key === "__typename" || key === "createdAt")
                continue;

            keys.push(key);
        }
        return keys;
    }
}
