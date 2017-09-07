import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

const APP_ROUTES: Routes = [
    { path: 'cursos', component: CursosComponent },
    { path: 'curso/:id', component: CursoDetalheComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

// import { RouterModule, Routes } from '@angular/router';
// import { ListagemComponent } from './listagem/listagem.component';
// import { CadastroComponent } from './cadastro/cadastro.component';

// const appRoutes: Routes = [
//     {path: '', component: ListagemComponent},
//     {path: 'cadastro', component: CadastroComponent},
//     {path: 'cadastro/:id',  component: CadastroComponent},
//     {path: '**', component: ListagemComponent}
// ];

// export const routing = RouterModule.forRoot(appRoutes);
