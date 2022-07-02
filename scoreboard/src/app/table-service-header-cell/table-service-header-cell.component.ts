import {Component, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {BackendService} from "../backend.service";
import {Service} from "../models";

@Component({
	selector: 'app-table-service-header-cell',
	templateUrl: './table-service-header-cell.component.html',
	styleUrls: ['./table-service-header-cell.component.less']
})
export class TableServiceHeaderCellComponent implements OnInit {

	@Input() services: Array<Service>;

	@ViewChild('template', {static: true}) template;

	constructor(public backend: BackendService, private viewContainerRef: ViewContainerRef) {
	}

	ngOnInit(): void {
		this.viewContainerRef.createEmbeddedView(this.template);
	}

	firstBloodNames(service: Service): string {
		return service.first_blood.map(team_id => this.backend.teams[team_id].name).join(', ')
	}

	indexTrack(index, item) {
		return index;
	}

}
