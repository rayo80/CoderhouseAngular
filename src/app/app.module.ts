import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ContentComponent } from './content/content.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { CloudsComponent } from './background/clouds/clouds.component';
import { RocketSmokeComponent } from './background/rocket-smoke/rocket-smoke.component';
import { RocketComponent } from './background/rocket/rocket.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidemenuComponent,
    ContentComponent,
    CardComponent,
    ButtonComponent,
    CloudsComponent,
    RocketSmokeComponent,
    RocketComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
