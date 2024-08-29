import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { AulasComponent } from './app/aulas/aulas.component';
import { MatematicaComponent } from './app/matematica/matematica.component';
import { ProgramacaoComponent } from './app/programacao/programacao.component';

const routes: Routes = [
  {
    path: 'aulas', component: AulasComponent, children: [
      { path: 'matematica', component: MatematicaComponent },
      {path:'programacao', component:ProgramacaoComponent}
    ]
  },
  { path: '', redirectTo: '/aulas', pathMatch: 'full' },
  { path: '**', redirectTo: '/aulas' } 
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
});
