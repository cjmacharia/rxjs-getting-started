import { Observable, Observer, of, from, fromEvent, concat } from 'rxjs';
import { allBooks, allReaders } from './data';

// const subscribe = (subscriber: Observer<any>) => {
// 	for (let book of allBooks) {
// 		subscriber.next(book);
// 	}
// }
// let allBooksObservable$ = new Observable(subscribe)

// allBooksObservable$.subscribe(book => console.log(book.title))

//of and from are used to create an observable 
let source1$ = of(allBooks)
// .subscribe(value => console.log(value, 'cjams'))
let source2$ = from(allBooks)
// .subscribe(book => console.log(book))


//return a single observable that has all the values from the two different observables
concat(source1$, source2$)
	.subscribe(values => console.log(values))