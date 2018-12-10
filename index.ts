import { Observable, Observer } from 'rxjs';
import { allBooks } from './data';

const subscribe = (subscriber: Observer<any>) => {
	for (let book of allBooks) {
		subscriber.next(book);
	}
}
let allBooksObservable$ = new Observable(subscribe)

allBooksObservable$.subscribe(book => console.log(book.title))