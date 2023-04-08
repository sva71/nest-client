import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-title',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule],
    template: `<h1>Nest.js client application</h1>`
})
export class TitleComponent {

}
