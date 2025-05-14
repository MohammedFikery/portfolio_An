import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorkComponent } from './work/work.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GraphicComponent } from './graphic/graphic.component';
import { AppsComponent } from './apps/apps.component';
import { SoftwareComponent } from './software/software.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'home' },
  { path: 'about', component: AboutComponent, title: 'about' },
  { path: 'skills', component: SkillsComponent, title: 'skills' },
  { path: 'Experience', component: ExperienceComponent, title: 'Experience' },
  {
    path: 'Work',
    component: WorkComponent,
    title: 'Work',
    children: [
      { path: '', redirectTo: 'Graphic', pathMatch: 'full' },
      { path: 'Graphic', component: GraphicComponent },
      { path: 'Apps', component: AppsComponent },
      { path: 'Software', component: SoftwareComponent },
    ],
  },
  { path: '**', component: NotFoundComponent, title: 'NotFound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
