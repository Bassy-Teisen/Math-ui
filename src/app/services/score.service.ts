import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TopScore } from '../models';

@Injectable({
    providedIn: 'root',
})
export class ScoreService {
    private apiUrl = 'http://localhost:3000/top-scores'; // URL to web API

    constructor(private http: HttpClient) {}

    getTopScores(): Observable<TopScore[]> {
        return this.http.get<TopScore[]>(`${this.apiUrl}?limit=5`); // Assuming your API supports a limit query
    }

    saveScore(scoreData: { user: string; score: number }): Observable<any> {
        return this.http.post(this.apiUrl, scoreData);
    }
}
