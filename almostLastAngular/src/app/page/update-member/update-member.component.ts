import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.css']
})
export class UpdateMemberComponent implements OnInit {

  editMemeber: User = new User();

  constructor(private us: UserService, private router: Router, private ar: ActivatedRoute) {
    let id: number;

    ar.params.forEach(data => id = data.id)
    console.log(id);
    us.read().forEach(memberArray => {
      this.editMemeber = memberArray.filter(member => member.id == id)[0];
      console.log(this.editMemeber);
    })
  }


  ngOnInit() {
  }
  onUpdate() {
    this.us.update(this.editMemeber, this.editMemeber.id).forEach(
      data => this.router.navigateByUrl('/')
    )
  }
}
