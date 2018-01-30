import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;
    private id: string;

    constructor(private _ActivatedRoute: ActivatedRoute,
                private heroService: HeroService,
                private location: Location) {
    }

    ngOnInit(): void {
        this._ActivatedRoute.paramMap.subscribe(params => {
            this.id = params.get('id');
            this.getHero(this.id);
        });
    }

    getHero(id): void {
        //const id = +this._ActivatedRoute.snapshot.paramMap.get('id');
        this.heroService.getHero(id)
            .subscribe(hero => this.hero = hero['data']);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.heroService.updateHero(this.hero)
            .subscribe(() => this.goBack());
    }
}
