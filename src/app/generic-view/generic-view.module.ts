import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { GenericViewComponent } from './generic-view.component';
import { GenericViewRoutingModule } from './generic-view-routing.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { ThemeModule, lightTheme, darkTheme } from '../theme';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GroupedWordComponent } from './grouped-words/grouped-word.component';
import { KeysPipe } from '../pipes/keys.pipe';
import { GroupedWordsMenuComponent } from './grouped-words-menu/grouped-words-menu.component';
import { WordsRiskWidgetComponent } from './words-risk-widget/words-risk-widget.component';

@NgModule({
    declarations: [
        GenericViewComponent,
        GroupedWordComponent,
        GroupedWordsMenuComponent,
        KeysPipe,
        WordsRiskWidgetComponent
    ],
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
