import { sandboxOf } from 'angular-playground';
import { SandboxComponent } from '../sandbox.component';

export default sandboxOf(SandboxComponent)
  .add('default', {
    template: `<app-sandbox></app-sandbox>`
  });
