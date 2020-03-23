import { sandboxOf } from 'angular-playground';
import { TestComponent } from '../test.component';

export default sandboxOf(TestComponent)
  .add('default', {
    template: `<app-test></app-test>`
  });
