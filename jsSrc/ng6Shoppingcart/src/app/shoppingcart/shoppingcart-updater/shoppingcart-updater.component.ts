import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ShoppingcartService } from '../../core/shoppingcart.service';
import { interval, Subscription } from 'rxjs';

@Component({
	selector: 'app-shoppingcart-updater',
	templateUrl: './shoppingcart-updater.html'
})

export class ShoppingcartUpdaterComponent implements OnInit, OnDestroy {
	@Output() foundUpdates = new EventEmitter<Boolean>();

	updatedAt: Date;
	updatesAvailable: Boolean;
	doUpdates: Boolean;

	secondsCounter = interval(3000);
	subscription: Subscription;

	constructor(
		private shoppingcartService: ShoppingcartService,
	) {}
	ngOnInit() {
		this.updatedAt = new Date();
		this.updatesAvailable = false;
		this.doUpdates = false;
		console.log('ngOnInit in updater');
		// this.startTimer();
	}

	startTimer() {
		this.subscription = this.secondsCounter.subscribe(n => {
			console.log(`It's been ${n} intervals since subscribing!`);
			this.shoppingcartService.getLastUpdate(this.updatedAt)
				.subscribe( lastUpdate => {
					console.log('after check the lastUpdate, received: ', lastUpdate);
					if (lastUpdate > this.updatedAt) {
						this.updatesAvailable = true;
					}
			});
		});
	}

	stopTimer() {
		this.subscription.unsubscribe();
	}

	toggleTimer() {
		this.doUpdates = ! this.doUpdates;
		if (!this.doUpdates) {
			this.stopTimer();
		} else {
			this.startTimer();
		}
	}

	getUpdates() {
		this.foundUpdates.emit();
		this.updatesAvailable = false;
		this.updatedAt = new Date();
	}

	ngOnDestroy() {
		this.stopTimer();
	}
}
