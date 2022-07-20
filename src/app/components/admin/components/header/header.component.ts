import { Component, OnInit } from '@angular/core';

import { Observable, filter, mapTo, merge, map } from 'rxjs';
import { Router, ResolveEnd, ResolveStart, ActivatedRoute } from '@angular/router';

import { User } from '../../user';
import { AuthService } from '../../../../services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    private showLoader!: Observable<boolean>;
    private hideLoader!: Observable<boolean>;

    public isLoading!: Observable<boolean>;

    constructor(
        private authService: AuthService,
        private router: Router,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {

        this.hideLoader = this.router.events.pipe(filter((e) => e instanceof ResolveEnd), mapTo(false));
        this.showLoader = this.router.events.pipe(filter((e) => e instanceof ResolveStart), mapTo(true));

        this.isLoading = merge(this.hideLoader, this.showLoader)
    }

    logout() {
        this.authService.logout();
    }

}
