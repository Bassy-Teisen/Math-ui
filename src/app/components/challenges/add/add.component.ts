import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/services/score.service';
import { Router, NavigationStart, Event as RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

enum Difficulty {
    easy = 10,
    medium = 100,
    hard = 1000,
}

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
    userAnswerFromAddComponent!: number;
    question: string = '1 + 1';
    difficultyLevel: Difficulty = Difficulty.easy;
    answer!: number;
    incorrectAnswersCount: number = 0;
    correctAnswersCount: number = 0;

    constructor(private router: Router, private scoreService: ScoreService) {
        this.router.events
            .pipe(
                filter(
                    (event: RouterEvent): event is NavigationStart =>
                        event instanceof NavigationStart,
                ),
            )
            .subscribe((event: NavigationStart) => {
                console.log('Navigation started to: ' + event.url);
                this.saveScore();
            });
    }

    ngOnInit(): void {
        this.additionQuestion();
    }

    handleCalculation(userAnswer: any): void {
        // userAnswer can be of any type
        const numericUserAnswer = Number(userAnswer);
        const numericAnswer = Number(this.answer);

        if (!isNaN(numericUserAnswer) && !isNaN(numericAnswer)) {
            if (numericUserAnswer === numericAnswer) {
                this.correctAnswersCount++;
                console.log('The answer was correct!');
            } else {
                this.incorrectAnswersCount++;
                console.log('The answer was incorrect.');
            }
        } else {
            console.log('One or both of the answers is not a valid number.');
        }
        this.additionQuestion();
    }

    handleDifficultyChange(difficultyString: string): void {
        switch (difficultyString) {
            case 'easy':
                this.difficultyLevel = Difficulty.easy;
                break;
            case 'medium':
                this.difficultyLevel = Difficulty.medium;
                break;
            case 'hard':
                this.difficultyLevel = Difficulty.hard;
                break;
            default:
                this.difficultyLevel = Difficulty.easy;
        }
        this.additionQuestion();
    }

    additionQuestion() {
        const number1 = this.getRandomNumber();
        const number2 = this.getRandomNumber();

        this.question = `${number1} + ${number2}`;
        this.answer = number1 + number2;

        return this.answer;
    }

    getRandomNumber(): number {
        // Use the difficulty level to set the range of random numbers
        let maxNumber;
        switch (this.difficultyLevel) {
            case Difficulty.easy:
                maxNumber = Difficulty.easy;
                break;
            case Difficulty.medium:
                maxNumber = Difficulty.medium;
                break;
            case Difficulty.hard:
                maxNumber = Difficulty.hard;
                break;
            default:
                maxNumber = Difficulty.easy; // Default case
        }

        return Math.floor(Math.random() * maxNumber);
    }

    saveScore(): void {
        const scoreData = { user: 'UserName', score: this.correctAnswersCount };
        this.scoreService.saveScore(scoreData).subscribe({
            next: (response) => console.log('Score saved!', response),
            error: (error) => console.error('Error saving score', error),
        });
    }
}
