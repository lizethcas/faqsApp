import { CommonModule} from "@angular/common";
import { Component, Input } from "@angular/core";



@Component({
  selector: "app-component",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "Faq.component.html",
})
export class FaqComponent {
 

  @Input() title: string = '';
  @Input() description: string = '';

  show = false;

  toggle() {
    console.log();
    this.show = !this.show;
  }
}
