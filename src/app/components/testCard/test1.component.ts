import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
    selector: 'app-test1',
    templateUrl: './test1.component.html',
    styleUrls: ['./test1.component.css'],
})
export class Test1Component implements OnInit {
    @Input() title!: string;
    @Input() question!: string;
    @Input() userAnswer!: number;
    @Input() incorrectAnswersCount: number = 0;
    @Input() correctAnswersCount: number = 0;
    @Input() difficultyLevel: number = 0;
    @Output() userSubmitAnswer = new EventEmitter<number>();
    @Output() userSetDifficultyLevel = new EventEmitter<string>();
    testGroup!: FormGroup;

    constructor() {}

    ngOnInit(): void {
        this.testGroup = new FormGroup({
            blah: new FormControl(''),
        });
    }

    difficultyChange(difficultyLevel: string) {
        this.userSetDifficultyLevel.emit(difficultyLevel);
    }

    onSubmit() {
        const userAnswer = this.testGroup.get('blah')?.value;

        this.userSubmitAnswer.emit((this.userAnswer = userAnswer));
        this.testGroup.reset('')
    }
}
