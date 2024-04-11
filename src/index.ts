import { timer } from 'rxjs/internal/observable/timer';

timer(100).subscribe(() => console.log('meow'));