import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
	selector: 'app-department-detail',
	template: `
		<p>department-detail is {{ departmentId }}!</p>
		<p>
			<button (click)="goToOverview()">Overview</button>
			<button (click)="goToContact()">Contact</button>
		</p>
		<router-outlet></router-outlet>
		<button (click)="goPrevious()">Previous</button>
		<button (click)="goNext()">Next</button>
		<button (click)="goBackToDeparments()">Back</button>
	`,
	styles: []
})
export class DepartmentDetailComponent implements OnInit {
	public departmentId!: number
	constructor(private route: ActivatedRoute, private router: Router) {}

	ngOnInit(): void {
		// let id = this.route.snapshot.paramMap.get('id');
		// this.departmentId = parseInt(id !== null ? id : '0');
		this.route.paramMap.subscribe((param: ParamMap) => {
			let id = param.get('id')
			this.departmentId = parseInt(id ? id : '')
		})
	}

	goToContact() {
		this.router.navigate(['contact'], {relativeTo: this.route})
	}

	goToOverview() {
		this.router.navigate(['overview'], {relativeTo: this.route})
	}
	goPrevious() {
		let previousId = this.departmentId - 1
		// this.router.navigate(['departments', previousId])
		this.router.navigate(['../', previousId], { relativeTo: this.route })
	}

	goNext() {
		let nextId = this.departmentId + 1
		// this.router.navigate(['departments', nextId])
		this.router.navigate(['../', nextId], { relativeTo: this.route })
	}
	goBackToDeparments() {
		let selectedId = this.departmentId ? this.departmentId : null
		// this.router.navigate(['departments', {id: selectedId}])
		this.router.navigate(['../', { id: selectedId }], {
			relativeTo: this.route
		})
	}
}
