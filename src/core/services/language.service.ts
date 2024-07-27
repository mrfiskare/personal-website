import { Injectable } from '@angular/core';
import { LANGUAGES } from '../constants/constants';
import { BehaviorSubject, Observable } from 'rxjs';
import { LanguageModel } from '../models/language.model';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languages$: BehaviorSubject<LanguageModel[]> = new BehaviorSubject<
    LanguageModel[]
  >(LANGUAGES);

  private currentLanguage$: BehaviorSubject<LanguageModel> =
    new BehaviorSubject<LanguageModel>({} as LanguageModel);

  constructor() {
    this.currentLanguage$.next(this.languages$.value[0]);
  }

  setCurrentLanguage(step: LanguageModel): void {
    this.currentLanguage$.next(step);
  }

  getCurrentLanguage(): Observable<LanguageModel> {
    return this.currentLanguage$.asObservable();
  }

  getLanguages(): Observable<LanguageModel[]> {
    return this.languages$.asObservable();
  }

  findLanguageByCode(code: string) {
    const result = LANGUAGES.find((l) => l.code === code);

    if (result) {
      return result;
    } else {
      return LANGUAGES[0];
    }
  }
}
