import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbGlobalPhysicalPosition, NbInputModule, NbLayoutModule, NbSelectModule, NbThemeModule, NbToastrModule, NbTooltipModule, NbUserModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HeaderComponent } from './components/header/header.component';
import { SummonersMatchesComponent } from './pages/summoners-matches/summoners-matches.component';
import { MatchesListComponent } from './components/matches-list/matches-list.component';
import { MatchDetailsComponent } from './components/match-details/match-details.component';
import { DurationPipe } from './pipes/duration.pipe';
import { TimeSincePipe } from './pipes/timeSince.pipe';
import { KdaComponent } from './components/kda/kda.component';
import { ChampionDetailsComponent } from './components/champion-details/champion-details.component';
import { SummonerStatsComponent } from './components/summoner-stats/summoner-stats.component';
import { FormatStringPipe } from './pipes/formatString.pipe';
import { TeamsComponent } from './components/teams/teams.component';

const toastrConfig = {
  duration: 5000,
  position: NbGlobalPhysicalPosition.TOP_RIGHT,
  preventDuplicates: true,
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SummonersMatchesComponent,
    MatchesListComponent,
    MatchDetailsComponent,
    DurationPipe,
    TimeSincePipe,
    KdaComponent,
    ChampionDetailsComponent,
    SummonerStatsComponent,
    FormatStringPipe,
    TeamsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbInputModule,
    NbSelectModule,
    NbButtonModule,
    NbToastrModule.forRoot(toastrConfig),
    NbUserModule,
    NbTooltipModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
