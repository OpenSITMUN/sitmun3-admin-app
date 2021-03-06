import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ExternalConfigurationService } from './ExternalConfigurationService';
import { AngularHalModule } from '@sitmun/frontend-core';
import { HomeComponent } from './home/home.component';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FlexLayoutModule} from '@angular/flex-layout';

import { SitmunFrontendGuiModule, TerritoryListComponent, TerritoryEditComponent, TerritoryTypeListComponent, TerritoryTypeEditComponent,
  RoleListComponent, RoleEditComponent, UserListComponent, UserEditComponent, UserChangePasswordComponent,
  LoginComponent,AccountEditComponent,AccountChangePasswordComponent,
  ConnectionListComponent,ConnectionEditComponent,TaskListComponent,TaskEditComponent,TaskTypeListComponent,TaskTypeEditComponent,TaskGroupListComponent,
  TaskGroupEditComponent,ServiceListComponent,ServiceEditComponent,CartographyEditComponent,CartographyListComponent,CartographyGroupEditComponent,
  CartographyGroupListComponent,BackgroundListComponent, BackgroundEditComponent,TreeListComponent,TreeEditComponent,ApplicationListComponent,
  ApplicationEditComponent,TaskUIListComponent,TaskUIEditComponent  } from '@sitmun/frontend-gui';

import { SitmunFrontendCoreModule,
  AuthInterceptor, AuthExpiredInterceptor} from '@sitmun/frontend-core';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },

    {
        path: 'login',
        component: LoginComponent
    }
    ,
    {
        path: 'account',
        component: AccountEditComponent
    }
    , {
        path: 'change-password',
        component: AccountChangePasswordComponent
    }
    ,
    {
        path: 'territory-add',
        component: TerritoryEditComponent
    },
    {
        path: 'territory-list',
        component: TerritoryListComponent
    },
    {
        path: 'territory-edit/:id',
        component: TerritoryEditComponent
    },
    {
        path: 'territory-type-list',
        component: TerritoryTypeListComponent
    },
    {
        path: 'territory-type-add',
        component: TerritoryTypeEditComponent
    },
    {
        path: 'territory-type-edit/:id',
        component: TerritoryTypeEditComponent
    }
    ,
    {
        path: 'role-list',
        component: RoleListComponent
    },
    {
        path: 'role-add',
        component: RoleEditComponent
    },
    {
        path: 'role-edit/:id',
        component: RoleEditComponent
    },
    {
        path: 'user-list',
        component: UserListComponent
    },
    {
        path: 'user-add',
        component: UserEditComponent
    },
    {
        path: 'user-edit/:id',
        component: UserEditComponent
    },
    {
        path: 'user-change-password/:id',
        component: UserChangePasswordComponent
    },    {
        path: 'connection-list',
        component: ConnectionListComponent
    },
    {
        path: 'connection-add',
        component: ConnectionEditComponent
    },
    {
        path: 'connection-edit/:id',
        component: ConnectionEditComponent
    },  {
        path: 'task-list',
        component: TaskListComponent
    },
    {
        path: 'task-add',
        component: TaskEditComponent
    },
    {
        path: 'task-edit/:id',
        component: TaskEditComponent
    },  {
        path: 'task-group-list',
        component: TaskGroupListComponent
    },
    {
        path: 'task-group-add',
        component: TaskGroupEditComponent
    },
    {
        path: 'task-group-edit/:id',
        component: TaskGroupEditComponent
    },  {
        path: 'task-type-list',
        component: TaskTypeListComponent
    },
    {
        path: 'task-type-add',
        component: TaskTypeEditComponent
    },
    {
        path: 'task-type-edit/:id',
        component: TaskTypeEditComponent
    },  {
        path: 'task-ui-list',
        component: TaskUIListComponent
    },
    {
        path: 'task-ui-add',
        component: TaskUIEditComponent
    },
    {
        path: 'task-ui-edit/:id',
        component: TaskUIEditComponent
    },  {
        path: 'service-list',
        component: ServiceListComponent
    },
    {
        path: 'service-add',
        component: ServiceEditComponent
    },
    {
        path: 'service-edit/:id',
        component: ServiceEditComponent
    },  {
        path: 'cartography-list',
        component: CartographyListComponent
    },
    {
        path: 'cartography-add',
        component: CartographyEditComponent
    },
    {
        path: 'cartography-edit/:id',
        component: CartographyEditComponent
    },  {
        path: 'cartography-group-list',
        component: CartographyGroupListComponent
    },
    {
        path: 'cartography-group-add',
        component: CartographyGroupEditComponent
    },
    {
        path: 'cartography-group-edit/:id',
        component: CartographyGroupEditComponent
    },  {
        path: 'background-list', 
        component: BackgroundListComponent
    },
    {
        path: 'background-add',
        component: BackgroundEditComponent
    },
    {
        path: 'background-edit/:id',
        component: BackgroundEditComponent
    },  {
        path: 'tree-list', 
        component: TreeListComponent
    },
    {
        path: 'tree-add',
        component: TreeEditComponent
    },
    {
        path: 'tree-edit/:id',
        component: TreeEditComponent
    },  {
        path: 'application-list', 
        component: ApplicationListComponent
    },
    {
        path: 'application-add',
        component: ApplicationEditComponent
    },
    {
        path: 'application-edit/:id',
        component: ApplicationEditComponent
    }

];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent/*,
    
    TerritoryListComponent,
    
    TerritoryEditComponent,
    TerritoryTypeListComponent,
    TerritoryTypeEditComponent,
    RoleListComponent,
    RoleEditComponent,
    RoleListComponent,
    RoleEditComponent,
    UserListComponent,
    UserEditComponent,
    UserPositionListComponent,
    UserPositionEditDialog,
    UserPositionEditComponent,
    UserConfigurationEditComponent,
    UserConfigurationEditDialog,
    UserConfigurationListComponent
    */
    ],
    imports: [
        BrowserModule,
        FlexLayoutModule,
        SitmunFrontendCoreModule.forRoot(),
        SitmunFrontendGuiModule,
        MatSidenavModule,


        /*,

        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        HttpClientModule,

        MatCardModule,
        MatInputModule,
        MatListModule,

        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatTabsModule,
        MatTableModule,
        FormsModule,
        MatSelectModule,
        MatPaginatorModule,
        MatSortModule,

        NoopAnimationsModule,
        MatDialogModule,
        */
        AngularHalModule.forRoot(),
        RouterModule.forRoot(appRoutes)
    ],
    entryComponents: [
        /*
          UserPositionEditDialog,
          UserConfigurationEditDialog
          */
    ],
    providers: [
        { provide: 'ExternalConfigurationService', useClass: ExternalConfigurationService },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
        , {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthExpiredInterceptor,
            multi: true
        }
        /*,
       TerritoryService,
       TerritoryTypeService,
       UserService
       */
        //ResourceService,
        //ExternalService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
