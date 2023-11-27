import { formatDate } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-contribuition',
  templateUrl: './user-contribuition.component.html',
  styleUrls: ['./user-contribuition.component.css'],
})
export class UserContribuitionComponent {
  @Input() contribuitions: any;

  getWeeks() {
    return this.contribuitions.contributionCalendar?.weeks;
  }

  getDays(week: any) {
    return week.contributionDays;
  }
  getStyleForDay(day: any) {
    console.log(day);
    let backgroundColor;
    switch (true) {
      case day.contributionCount > 8:
        backgroundColor = '#216e39';
        break;
      case day.contributionCount >= 6:
        backgroundColor = '#3aa14e';
        break;
      case day.contributionCount >= 4:
        backgroundColor = '#48c463';
        break;
      case day.contributionCount >= 1:
        backgroundColor = '#9be9a8';
        break;
      default:
        backgroundColor = '#ebedf0';
        break;
    }
    return { 'background-color': backgroundColor };
  }
  getMonthForWeek(week: any): string {
    const firstDayOfMonth = new Date(week.contributionDays[0].date);
    return formatDate(firstDayOfMonth, 'MMM', 'en-US');
  }
  lastMonthDisplayed: string | null = null;

  shouldDisplayMonth(week: any): boolean {
    const firstDayOfMonth = new Date(week.contributionDays[0].date);
    const month = formatDate(firstDayOfMonth, 'MMM', 'en-US');

    if (this.lastMonthDisplayed !== month) {
      this.lastMonthDisplayed = month;
      return true;
    }
    return false;
  }
}
