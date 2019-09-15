import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css']
})
export class NewMemberComponent implements OnInit {

  newMember: User = new User();

  constructor(private us: UserService, private router: Router) { }

  ngOnInit() {
  }
  onCreate() {
    this.us.create(this.newMember).forEach(
      data => this.router.navigateByUrl('/')
    )
  }

}
