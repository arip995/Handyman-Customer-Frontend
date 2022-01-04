import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'view-home',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  // isTopBar:boolean = false;
  content:'Home'|'Profile'|'History'|'About'|'Help' = 'Profile';
  mode:any = "side";

  constructor(private observer: BreakpointObserver) {}

  ngOnInit(): void {
    // this.sidenav.mode = 'side';
  }


  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          // this.sidenav.close();
          // this.isTopBar = true;
        } else {
          this.sidenav.mode = 'side';
          // this.sidenav.open();
        }
      });
  }

  onContentChange(val:any){
    this.content = val;
    // this.sidenav.close();
  }
}