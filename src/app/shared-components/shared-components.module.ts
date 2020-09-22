import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppGridComponent } from './app-grid/app-grid.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { MoreButtonComponent } from './more-button/more-button.component';
import { OptionButtonGroupComponent } from './option-button-group/option-button-group.component';
import { ThemeModule, lightTheme, darkTheme } from '../theme';
import { RefreshButtonComponent } from './refresh-button/refresh-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RemoveButtonComponent } from './remove-button/remove-button.component';
import { TopicBlockComponent } from './topic-block/topic-block.component';


@NgModule({
  declarations: [
    AppGridComponent,
    BreadcrumbsComponent,
    LoadingIndicatorComponent,
    MoreButtonComponent,
    OptionButtonGroupComponent,
    RefreshButtonComponent,
    RemoveButtonComponent,
    TopicBlockComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'dark'
    }),
  ],
  exports: [
    AppGridComponent,
    BreadcrumbsComponent,
    LoadingIndicatorComponent,
    MoreButtonComponent,
    OptionButtonGroupComponent,
    RefreshButtonComponent,
    RemoveButtonComponent,
    TopicBlockComponent
  ]
})
export class SharedComponentsModule { }
