import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
	selector: 'app-deparment-list',
	template: `
		<h3>deparment list</h3>
		<ul class="items" *ngFor="let department of departments">
			<a (click)="onSelect(department)">
				<li [class.selectedItem]="isSelected(department)">
					<span class="badge">{{ department.id }}</span> {{ department.name }}
				</li>
			</a>
		</ul>
	`,
	styles: []
})
export class DeparmentListComponent implements OnInit {
	public selectedId: any
	departments = [
		{ id: 1, name: 'Angular' },
		{ id: 2, name: 'React' },
		{ id: 3, name: 'Python' },
		{ id: 4, name: 'NodeJs' },
		{ id: 5, name: 'Ruby' }
	]
	constructor(private router: Router, private activatedRoute: ActivatedRoute) {
		this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
			let id = param.get('id')
			this.selectedId = parseInt(id ? id : '')
		})
	}

	ngOnInit(): void {}

	onSelect(department: any) {
		// alert(department.id);'

		// this.router.navigate(['/departments', department.id])
    this.router.navigate([department.id], {relativeTo: this.activatedRoute})
	}

	isSelected(deparment: any) {
		if (deparment.id === this.selectedId) {
			return true
		} else {
			return false
		}
	}
}
