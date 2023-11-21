// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-password',
//   templateUrl: './password.component.html',
//   styleUrls: ['./password.component.css']
// })
// export class PasswordComponent {

//   // Define a property to store the password
//   password: string = '';

//   // Define a property to store the password strength
//   passwordStrength: string = '';

//   // Function to check password strength
//   checkPasswordStrength() {
//     // Reset strength display
//     this.passwordStrength = '';

//     // Minimum length
//     if (this.password.length < 8) {
//       this.passwordStrength = 'Weak (minimum 8 characters)';
//     } else {
//       // Additional criteria (e.g., uppercase, lowercase, numbers, special characters)
//       const uppercaseRegex = /[A-Z]/;
//       const lowercaseRegex = /[a-z]/;
//       const numberRegex = /[0-9]/;
//       const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

//       let criteriaMet = 0;

//       if (uppercaseRegex.test(this.password)) {
//         criteriaMet++;
//       }

//       if (lowercaseRegex.test(this.password)) {
//         criteriaMet++;
//       }

//       if (numberRegex.test(this.password)) {
//         criteriaMet++;
//       }

//       if (specialCharRegex.test(this.password)) {
//         criteriaMet++;
//       }

//       // Display strength based on the number of criteria met
//       if (criteriaMet === 4) {
//         this.passwordStrength = 'Strong';
//       } else if (criteriaMet >= 2) {
//         this.passwordStrength = 'Moderate';
//       } else {
//         this.passwordStrength = 'Weak';
//       }
//     }
//   }
// }


import { Component } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {

  // Define a property to store the password
  password: string = '';

  // Define a property to store the password strength
  passwordStrength: string = '';

  // Method to set password strength color
  passwordStrengthColor(): string {
    switch (this.passwordStrength) {
      case 'Strong':
        return 'green';
      case 'Moderate':
        return 'orange';
      case 'Weak':
        return 'red';
      default:
        return '';
    }
  }

  // Function to check password strength
  checkPasswordStrength() {
    // Reset strength display
    this.passwordStrength = '';

    // Minimum length
    if (this.password.length < 8) {
      this.passwordStrength = 'Weak (minimum 8 characters)';
    } else {
      // Additional criteria (e.g., uppercase, lowercase, numbers, special characters)
      const uppercaseRegex = /[A-Z]/;
      const lowercaseRegex = /[a-z]/;
      const numberRegex = /[0-9]/;
      const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

      let criteriaMet = 0;

      if (uppercaseRegex.test(this.password)) {
        criteriaMet++;
      }

      if (lowercaseRegex.test(this.password)) {
        criteriaMet++;
      }

      if (numberRegex.test(this.password)) {
        criteriaMet++;
      }

      if (specialCharRegex.test(this.password)) {
        criteriaMet++;
      }

      // Display strength based on the number of criteria met
      if (criteriaMet === 4) {
        this.passwordStrength = 'Strong';
      } else if (criteriaMet >= 2) {
        this.passwordStrength = 'Moderate';
      } else {
        this.passwordStrength = 'Weak';
      }
    }
  }
}
