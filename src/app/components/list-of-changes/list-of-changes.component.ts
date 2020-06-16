import {Component, OnInit, ViewChild} from '@angular/core';
import {Change} from "../../models/Change";
import {TimetableService} from "../../services/timetable.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-list-of-changes',
  templateUrl: './list-of-changes.component.html',
  styleUrls: ['./list-of-changes.component.scss']
})
export class ListOfChangesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'description', 'accept', 'reject'];
  changes: Change[];
  dataSource;

  constructor(private timetableService: TimetableService) { }

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
    this.timetableService.getListOfChanges().subscribe( data => {
      this.changes = data.filter((value,key) => {return value.suggestionState == "Pending"});
      this.dataSource = new MatTableDataSource(this.changes);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  acceptChange(change: Change) {
    this.timetableService.acceptChange(change).subscribe(x=> window.location.reload());
  }

  rejectChange(change: Change) {
    this.timetableService.deleteChange(change).subscribe(x=> window.location.reload());
  }

}

