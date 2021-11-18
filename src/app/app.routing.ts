import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { DetallesequipoComponent } from "./components/detallesequipo/detallesequipo.component";
import { JugadoresequipoComponent } from "./components/jugadoresequipo/jugadoresequipo.component";
import { DetallesjugadorComponent } from "./components/detallesjugador/detallesjugador.component";
import { VerapuestasComponent } from "./components/verapuestas/verapuestas.component";
import { CrearapuestaComponent } from "./components/crearapuesta/crearapuesta.component";
import { CrearjugadorComponent } from "./components/crearjugador/crearjugador.component";
import { BuscarJugadorComponent } from "./components/buscar-jugador/buscar-jugador.component";
import { Error404Component } from "./components/error404/error404.component";

const routes = [
    {path: "", component: HomeComponent},
    {path: "home", component: HomeComponent},
    {path: "apuestas", component: VerapuestasComponent},
    {path: "apuestas/nueva", component: CrearapuestaComponent},
    {path: "crearjugador", component: CrearjugadorComponent},
    {path: "buscarjugadores/:busqueda", component: BuscarJugadorComponent},
    {path: "equipos/:idEquipo", component: DetallesequipoComponent},
    {path: "equipos/:idEquipo/jugadores", component: JugadoresequipoComponent},
    {path: "equipos/:idEquipo/jugadores/:idJugador", component: DetallesjugadorComponent},
    {path: "**", component: Error404Component}
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
