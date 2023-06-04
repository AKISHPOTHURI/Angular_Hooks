import { AfterContentInit, Component, ContentChild, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,OnChanges, DoCheck,AfterContentInit {
  isChild=true;
  title='';
  constructor(){
    console.log("Parent constructor")
  }
  ngOnInit(): void {
    console.log("Parent OnInit")
  }
  toggleChild()
  {
    this.isChild=!this.isChild;
  }
ngOnChanges(): void {
  console.log("parent onchanges")

}
ngDoCheck(): void {
  console.log("Parent DoCheck")

}
ngAfterContentInit(): void {
  console.log("Parent AfterContentInit")

}
}
