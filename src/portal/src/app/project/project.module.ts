// Copyright Project Harbor Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RepositoryModule } from '../repository/repository.module';
import { ReplicationModule } from '../replication/replication.module';
import { SummaryModule } from './summary/summary.module';
import { LogModule } from '../log/log.module';

import { ProjectComponent } from './project.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ListProjectComponent } from './list-project/list-project.component';

import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { MemberComponent } from './member/member.component';
import { AddMemberComponent } from './member/add-member/add-member.component';
import { AddGroupComponent } from './member/add-group/add-group.component';

// import { ProjectService } from '@harbor/ui';
import { MemberService } from './member/member.service';
import { RobotService } from './robot-account/robot-account.service';
import { ProjectRoutingResolver } from './project-routing-resolver.service';

import { TargetExistsValidatorDirective } from '../shared/target-exists-directive';
import { ProjectLabelComponent } from "../project/project-label/project-label.component";
import { HelmChartModule } from './helm-chart/helm-chart.module';
import { RobotAccountComponent } from './robot-account/robot-account.component';
import { AddRobotComponent } from './robot-account/add-robot/add-robot.component';
import { AddHttpAuthGroupComponent } from './member/add-http-auth-group/add-http-auth-group.component';
import { TagRetentionComponent } from "./tag-retention/tag-retention.component";
import { AddRuleComponent } from "./tag-retention/add-rule/add-rule.component";
import { TagRetentionService } from "./tag-retention/tag-retention.service";


@NgModule({
  imports: [
    SharedModule,
    RepositoryModule,
    ReplicationModule,
    LogModule,
    RouterModule,
    HelmChartModule,
    SummaryModule
  ],
  declarations: [
    ProjectComponent,
    CreateProjectComponent,
    ListProjectComponent,
    ProjectDetailComponent,
    MemberComponent,
    AddMemberComponent,
    TargetExistsValidatorDirective,
    ProjectLabelComponent,
    AddGroupComponent,
    RobotAccountComponent,
    AddRobotComponent,
    AddHttpAuthGroupComponent,
    TagRetentionComponent,
    AddRuleComponent,
  ],
  exports: [ProjectComponent, ListProjectComponent],
  providers: [ProjectRoutingResolver, MemberService, RobotService, TagRetentionService]
})
export class ProjectModule {

}
