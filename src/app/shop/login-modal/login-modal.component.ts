// import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { finalize } from 'rxjs/operators';

// import { environment } from '@env/environment';
// import { AuthenticationService } from '@app/core';

// @Component({
//   selector: 'app-login-modal',
//   templateUrl: './login-modal.html',
//   styleUrls: ['./login-modal.scss']
// })
// export class LoginModalComponent implements OnInit {
//   version: string = environment.version;
//   error: string;
//   loginForm: FormGroup;
//   isLoading = false;

//   constructor(
//     private router: Router,
//     private route: ActivatedRoute,
//     private formBuilder: FormBuilder,
//     private authenticationService: AuthenticationService
//   ) {
//     this.createForm();
//   }

//   ngOnInit() { }

//   login() {
//     this.isLoading = true;
//     this.authenticationService
//       .login(this.loginForm.value)
//       .pipe(
//         finalize(() => {
//           this.loginForm.markAsPristine();
//           this.isLoading = false;
//         })
//       )
//       .subscribe(
//         credentials => {
//           log.debug(`${credentials.username} successfully logged in`);
//           this.route.queryParams.subscribe(
//             params => this.router.navigate(['/wishlist'], { replaceUrl: true })
//             //  this.router.navigate([params.redirect || '/'], { replaceUrl: true })
//           );
//         },
//         error => {
//           this.error = error;
//         }
//       );
//   }

//   private createForm() {
//     this.loginForm = this.formBuilder.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required],
//       remember: true
//     });
//   }
// }
