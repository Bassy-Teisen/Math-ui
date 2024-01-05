import { Component, OnInit } from '@angular/core';
import { TopScore } from 'src/app/models';
import { ScoreService } from 'src/app/services/score.service';

@Component({
    selector: 'app-leaderboard',
    templateUrl: './leaderboard.component.html',
    styleUrls: ['./leaderboard.component.css'],
})
export class LeaderboardComponent implements OnInit {
    topScores: TopScore[] = [];

    constructor(private scoreService: ScoreService) {} // Inject the service

    ngOnInit() {
        this.loadTopScores();
    }

    loadTopScores() {
        this.scoreService.getTopScores().subscribe(
            (scores) => {
                this.topScores = [...scores];
            },
            (error) => {
                console.error('Error fetching top scores:', error);
                // Handle or display error message
            },
        );
    }
}
