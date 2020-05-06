import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  redirectMessage;
  timeLeft: number = 3;
  interval;

  constructor(private route: ActivatedRoute, private router: Router,  private auth: AuthService) {
    route.fragment.subscribe((fragment: string) => {
      const token = new URLSearchParams(fragment).get('access_token');
      if (token) {
        auth.setAccessToken(token);
      }
      token ? this.redirectMessage = 'Авторизация прошла успешно' : this.redirectMessage = 'Во время авторизации возникли ошибки';
    });

    setTimeout(() => {
      this.router.navigate(['/']);
    }, 3000);

    this.startTimer();
  }

  ngOnInit(): void {
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    }, 1000);
  }
}
