import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuscripcionComponent } from './suscripcion/suscripcion.component';
import { InicioComponent } from './inicio/inicio.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { RouterModule} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InformacionComponent } from './informacion/informacion.component';
import { PlanComponent } from './plan/plan.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'presentacion', component: PresentacionComponent},
      {path: 'suscripcion', component: SuscripcionComponent},
      {path: 'informacion', component: InformacionComponent},
      {path: 'pie-pagina', component: PiePaginaComponent},
      {path: 'plan', component: PlanComponent},
      {path: 'inicio', component: InicioComponent},
      {path: '', redirectTo: '/presentacion', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  declarations: [
    AppComponent,
    SuscripcionComponent,
    InicioComponent,
    PiePaginaComponent,
    PresentacionComponent,
    PageNotFoundComponent,
    InformacionComponent,
    PlanComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
