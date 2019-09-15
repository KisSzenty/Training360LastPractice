import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersComponent } from './page/members/members.component';
import { NewMemberComponent } from './page/new-member/new-member.component';
import { UpdateMemberComponent } from './page/update-member/update-member.component';


const routes: Routes = [
  { path: '', component: MembersComponent },
  { path: 'new', component: NewMemberComponent },
  { path: 'update/:id', component: UpdateMemberComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
