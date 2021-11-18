import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { DetallesequipoComponent } from "./components/detallesequipo/detallesequipo.component";
import { JugadoresequipoComponent } from "./components/jugadoresequipo/jugadoresequipo.component";
import { DetallesjugadorComponent } from "./components/detallesjugador/detallesjugador.component";
import { VerapuestasComponent } from "./components/verapuestas/verapuestas.component";
import { CrearapuestaComponent } from "./components/crearapuesta/crearapuesta.component";

const routes = [
    {path: "", component: HomeComponent},
    {path: "home", component: HomeComponent},
    {path: "apuestas", component: VerapuestasComponent},
    {path: "apuestas/nueva", component: CrearapuestaComponent},
    {path: "equipos/:idEquipo", component: DetallesequipoComponent},
    {path: "equipos/:idEquipo/jugadores", component: JugadoresequipoComponent},
    {path: "equipos/:idEquipo/jugadores/:idJugador", component: DetallesjugadorComponent},

]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
