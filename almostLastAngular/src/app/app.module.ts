import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { FilterPipe } from './pipe/filter.pipe';
import { NewMemberComponent } from './page/new-member/new-member.component';
import { MembersComponent } from './page/members/members.component';
import { UpdateMemberComponent } from './page/update-member/update-member.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    NewMemberComponent,
    MembersComponent,
    UpdateMemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
