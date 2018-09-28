import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ShoppingcartService } from '../../core/shoppingcart.service';
import { interval } from 'rxjs';

@Component({
	selector: 'app-shoppingcart-updater',
	templateUrl: './shoppingcart-updater.html'
})
export class ShoppingcartUpdaterComponent implements OnInit {
	@Output() foundUpdates = new EventEmitter<Boolean>();

	updatedAt: Date;
	updatesAvailable: Boolean;
	doUpdates: Boolean;

	secondsCounter = interval(3000);

	constructor(
		private shoppingcartService: ShoppingcartService,
	) {}
	ngOnInit() {
		this.updatedAt = new Date();
		this.updatesAvailable = false;
		this.doUpdates = true;
		console.log('ngOnInit in updater');

		this.secondsCounter.subscribe(n => {
			console.log(`It's been ${n} intervals since subscribing!`);
			if (this.doUpdates) {
				this.shoppingcartService.getLastUpdate(this.updatedAt)
					.subscribe( lastUpdate => {
						console.log('after check the lastUpdate, received: ', lastUpdate);
						if (lastUpdate > this.updatedAt) {
							this.updatesAvailable = true;
						}
				});
			}
		});
	}

	toggleTimer() {
		this.doUpdates = ! this.doUpdates;
	}

	getUpdates() {
		this.foundUpdates.emit();
		this.updatesAvailable = false;
		this.updatedAt = new Date();
	}

	ngOndestroy() {
		// this.secondsCounter.unsubscribe();
	}
}
