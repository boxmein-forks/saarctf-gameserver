import {Component, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Rank} from "../models";

@Component({
	//selector: 'app-table-line-cells',
	selector: 'tablelinecells',
	templateUrl: './table-line-cells.component.html',
	styleUrls: ['./table-line-cells.component.less']
})
export class TableLineCellsComponent implements OnInit {

	@Input() rank: Rank;
	@Input() tick: number;

	@ViewChild('template', {static: true}) template;

	constructor(private viewContainerRef: ViewContainerRef) {
	}

	ngOnInit(): void {
		this.viewContainerRef.createEmbeddedView(this.template);
	}

	indexTrack(index, item) {
		return index;
	}

	statusToClass(status: number): string {
		switch (status) {
			case 0: // up
				return 'label-success';
			case 1: // faulty
			case 2: // down
			case 3: // flag not found
				return 'label-danger';
			case 4: // recovering
				return 'label-warning';
			default:
				return 'label-default';
		}
	}

	statusToTooltip(status: number): string {
		switch (status) {
			case 0:
				return 'Service online';
			case 1:
				return 'Service unreachable';
			case 2:
				return 'Service faulty';
			case 3:
				return 'No flag found';
			case 4:
				return 'Recovering';
			default:
				return 'unkown';
		}
	}

	statusToText(status: number): string {
		switch (status) {
			case 0:
				return 'up';
			case 1:
				return 'down';
			case 2:
				return 'faulty';
			case 3:
				return 'flag';
			case 4:
				return 'recover';
			default:
				return '-';
		}
	}

	floatToString(n: number, zeroIsNegative = false): string {
		if (zeroIsNegative) {
			return (n > 0 ? '+' : (n === 0.0 ? '-' : '')) + n.toFixed(1);
		}
		return (n < 0 ? '' : '+') + n.toFixed(1);
	}

	intToString(n: number, zeroIsNegative = false): string {
		if (zeroIsNegative) {
			return (n > 0 ? '+' : (n === 0.0 ? '-' : ''));
		}
		return (n < 0 ? '' : '+') + n;
	}

}
