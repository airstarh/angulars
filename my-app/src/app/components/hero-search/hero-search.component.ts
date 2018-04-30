import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {Subject}    from 'rxjs/Subject';
import {of}         from 'rxjs/observable/of';

import {
	debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import {Hero}        from '../../utils/hero';
import {HeroService} from '../../services/hero.service';

@Component({
	           selector:    'app-hero-search',
	           templateUrl: './hero-search.component.html',
	           styleUrls:   ['./hero-search.component.css']
           })
export class HeroSearchComponent implements OnInit {
	heroes$: Observable<Hero[]>;
	private _Subject_searchTerms = new Subject<string>();

	constructor(private heroService: HeroService) {}

	// Push a search term into the observable stream.
	search(term: string): void {
		this._Subject_searchTerms.next(term);
	}

	ngOnInit(): void {
		this.heroes$ = this._Subject_searchTerms.pipe(
			// wait 300ms after each keystroke before considering the term
			debounceTime(300),

			// ignore new term if same as previous term
			distinctUntilChanged(),

			// switch to new search observable each time the term changes
			switchMap((term: string) => this.heroService.searchHeroes(term)),
		);
	}
}
