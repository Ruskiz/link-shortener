import { Component } from "@angular/core";
import { Model } from "./repository.model";
import { BDLink } from "./link.model";

@Component({
 selector: 'app-link',
 templateUrl: './link.component.html',
})
export class LinkComponent {
 model: Model = new Model();

 getBDLinks(): BDLink[] {
    return this.model.getBDLinks();
    }
}