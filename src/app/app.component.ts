import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements OnInit {
  title = 'ecommerce';
  heading = 'harini';

  ngOnInit(): void {

    const arr = [1,2,3,4,5,6];
    for(let i=0; i<arr.length; i++){
      console.log("element: "+arr[i]);
    }
    //foreach, filter, map, find, findIndex
    
    // const doubleEle = arr.map(x=>x+2);
    // const doubleEle = arr.map(x=>x.toString());
    const doubleEle = arr.map(x=>x+"");
    const odd =arr.filter(x=>x%2 != 0);
    const sum = arr.reduce((x,y) => x+y, 1);
    console.log( "new arr: ", doubleEle, "\nbefor: ",arr, 
      "\nodd: ", odd, "\nsum: ",sum, "\nfind: ", odd.find(x=>x>=3), 
      "\nfindIndex: ", odd.findIndex(x=>x==5), "\nincludes: ", odd.includes(3),
    "\nheading: ",this.heading.includes("ha"),"\n splicing: ", arr.splice(4,6), arr);

  } 

  
}
