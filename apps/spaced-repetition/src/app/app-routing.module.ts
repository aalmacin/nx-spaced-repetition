import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopicsComponent } from './topics/topics.component';

const routes = [{ path: '/topics', component: TopicsComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
