import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { GenericViewComponent } from './generic-view.component';
import { GenericViewRoutingModule } from './generic-view-routing.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { ThemeModule, lightTheme, darkTheme } from '../theme';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GroupedWordComponent } from './grouped-words/grouped-word.component';

@NgModule({
  declarations: [GenericViewComponent, GroupedWordComponent],
  imports: [
    CommonModule,
    GenericViewRoutingModule,
    SharedComponentsModule,
    BreadcrumbModule,
    FontAwesomeModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'dark'
    }),
  ]
})
export class GenericViewModule { }
