import { Component, Input, OnInit, Output } from '@angular/core';

import { Post } from './post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() @Output() post: Post;

  constructor() {}

  ngOnInit(): void {}
}
