import { Component } from '@angular/core';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-scrollbar';
  public scrollbarOptions = { axis: 'y', theme: 'rounded-dark' };
  constructor(
    
  ) { }
   
  ngAfterViewInit() {
   
  }
   
  ngOnDestroy() {
    
  }
}
