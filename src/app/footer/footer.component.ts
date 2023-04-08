import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-footer',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule],
    template: `<p>Copyright © 2023 by Volodymyr O. Samoilenko</p>`
})
export class FooterComponent {

}
