import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnDestroy,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked{
  counter=0
  @Input() title='';
  interval:any
  @ContentChild('projectContent') projectContent:any

  constructor(){
    console.log("Child constructor")
  }
  ngOnInit(): void {
    console.log("Child OnInit")
    console.log("OnInit-"+this.projectContent)

    //   this.interval=setInterval(()=>{
    //   this.counter=this.counter+1
    //   console.log(this.counter)
    // },1000);
  }
  ngOnDestroy(): void {
    clearInterval(this.interval)
    console.log("Child onDestroy")
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    console.log("Child onchanges")
    console.log("onchanges-"+this.projectContent)

  }
  ngDoCheck(): void {
    console.log("Child DoCheck")
    console.log("docheck-"+this.projectContent)

  }
  ngAfterContentInit(): void {
    console.log("Child AfterContentInit")
    console.log("AfterContentInit-"+this.projectContent)

  }
  ngAfterContentChecked(): void {
    console.log("Child AfterContentChecked")
  }
  ngAfterViewInit(): void {
    console.log("Child AfterViewInit")
  }
  ngAfterViewChecked(): void {
    console.log("Child AfterViewChecked")
  }
}
