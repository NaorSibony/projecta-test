import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './view-model/general/error-pages/page-not-found/page-not-found.component';
import { UnderConstructionComponent } from './view-model/general/error-pages/under-construction/under-construction.component';
import { MainComponent } from './view-model/main/main.component';
import { ShellComponent } from './view-model/shell/shell.component';

const routes: Routes = [
  // route redirection - valid routes that have no view
  {
    path: '',
    redirectTo: 'main/registration',
    pathMatch: 'full'
  },
  // actual app tree
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'main',
        component: MainComponent,
        children: [
          {
            path: 'registration',
            component: UnderConstructionComponent
          }
        ]
      }
    ]
  },
  // invalid routes
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [ShellComponent, MainComponent, UnderConstructionComponent, PageNotFoundComponent];
