import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GitHubDetailPage } from './git-hub-detail';

@NgModule({
    declarations: [GitHubDetailPage],
    imports: [IonicPageModule.forChild(GitHubDetailPage)]
})
export class GitHubDetailPageModule {}
