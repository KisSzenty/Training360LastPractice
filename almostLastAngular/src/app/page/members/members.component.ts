import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent {


  title = 'almostLastAngular';
  list$: Observable<any> = this.us.read();
  searchText: string = '';
  changeCounter: number = 0;

  constructor(private us: UserService) {
    us.access();
  }

  onDelete(id: number): void {
    this.us.delete(id).forEach(data => location.reload());
  }

}
