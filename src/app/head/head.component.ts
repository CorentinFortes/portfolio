import { Component } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent {
  cheminImage:string = "assets/images/photo moi.jpg";
  cheminGithub:string = "assets/images/github-mark-white.png";
  cheminLinkedin:string = "assets/images/linkedin.png";
  cheminMail:string = "assets/images/mail.png";
}
