<template>
  <div class="d-flex align-items-stretch">
    <div class="container">
      <div class="align-items-center">
        <div class="px-lg-4 col-lg-7">
          <div class="card">
            <div class="px-lg-5 card-header">
              <div class="card-heading text-primary">Register form</div>
            </div>
            <div class="p-lg-5 card-body">
              <h3 class="mb-4">Hi, ready to get started?</h3>
              <p class="text-muted text-sm mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
              </p>
              <form class="row" @submit.prevent="submitForm">
                <div class="col-sm-6 form-floating mb-3">
                  <input v-model="formData.firstName" class="form-control" placeholder="First name" type="text"
                    required>
                  <label class="form-label" for="name">First name<span class="text-danger">*</span></label>
                </div>
                <div class="col-sm-6 form-floating mb-3">
                  <input v-model="formData.lastName" class="form-control" placeholder="Last name" type="text" required>
                  <label class="form-label" for="lastName">Last name<span class="text-danger">*</span></label>
                </div>
                <div class="col-sm-6 form-floating mb-3">
                  <input v-model="formData.username" class="form-control" placeholder="Username" type="text" required>
                  <label class="form-label" for="username">Username<span class="text-danger">*</span></label>
                </div>
                <div class="col-sm-6 form-floating mb-3">
                  <input v-model="formData.password" class="form-control" placeholder="Password" type="password"
                    required>
                  <label class="form-label" for="password">Password<span class="text-danger">*</span></label>
                </div>
                <div class="col-sm-6 form-floating mb-3">
                  <input v-model="formData.confirmPassword" class="form-control" placeholder="Confirm password"
                    type="password" required>
                  <label class="form-label" for="confirmPassword">Confirm password<span
                      class="text-danger">*</span></label>
                </div>
                <div class="col-sm-6 form-floating mb-3">
                  <input v-model="formData.email" class="form-control" placeholder="name@example.com" type="email"
                    required>
                  <label class="form-label" for="email">E-mail<span class="text-danger">*</span></label>
                </div>
                <div class="col-sm-6 form-floating mb-3">
                  <input v-model="formData.address" class="form-control" placeholder="Address" type="text" required>
                  <label class="form-label" for="address">Address<span class="text-danger">*</span></label>
                </div>
                <div class="col-sm-6 form-floating mb-3">
                  <input v-model="formData.city" class="form-control" placeholder="City" type="text" required>
                  <label class="form-label" for="city">City<span class="text-danger">*</span></label>
                </div>
                <div class="col-sm-6 form-floating mb-3">
                  <input v-model="formData.zipCode" class="form-control" placeholder="Zip Code" type="text" required>
                  <label class="form-label" for="zipCode">Zip code<span class="text-danger">*</span></label>
                </div>
                <div class="mb-4">
                  <input v-model="formData.agree" type="checkbox" id="registerAgree" required>
                  <label for="agree" class="form-check-label">I agree with the <a href="#">Terms & Conditions</a><span
                      class="text-danger">*</span></label>
                </div>
                <button type="submit" class="btn btn-primary btn-lg">Register</button>
              </form>
            </div>
            <div class="px-lg-5 py-lg-4 card-footer">
              <div class="text-sm text-muted">
                Already have an account? <a href="/login">Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
  name: 'RegisterForm',
  setup() {
    const router = useRouter();
    const formData = ref({  // Define formData using ref
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      address: '',
      city: '',
      zipCode: '',
      agree: false
    });

    const submitForm = () => {
      console.log('Form submitted!');
      console.log('Form Data:', formData.value); // Access formData using .value
      // You can make API calls or perform other actions here

      // Redirect to the login page after form submission
      router.push({ name: 'LoginForm' });
    };

    return {
      formData,
      submitForm
    };
  }
}
</script>




<style scoped>
* {
  box-sizing: border-box;
  margin: auto;
}

.mb-4 {
  margin-bottom: 1.5rem !important;
  margin-left: 0;
}

.h3,
h3 {
  font-size: calc(1.2825rem + .39vw);
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
}

.container {
  width: 100%;
  padding-right: var(--bs-gutter-x, 1rem);
  padding-left: var(--bs-gutter-x, 1rem);
  position: relative;

}
label{
  display: inline-block;
    cursor: default;
    float: inherit
}
.error-msg {
  color: rgb(238, 0, 0);
}

.text-sm {
  font-size: .7875rem !important;
}

.text-muted {
  --bs-text-opacity: 1;
  color: #6c757d !important;
}

.fa-eye {
  float: right;
}

.mb-5 {
  margin-bottom: 3rem !important;
  margin-left: 0;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
}

.page-holder {
  display: flex;
  overflow-x: hidden;
  width: 100%;
  min-height: calc(100vh - 72px);
}

.bg-gray-100 {
  background-color: #f8f9fa !important;
}

.py-4 {
  padding-top: 2.5rem !important;
  padding-bottom: 2.5rem !important;
}

.align-items-center {
  align-items: center !important;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(var(--bs-gutter-y) * -1);
  margin-right: calc(var(--bs-gutter-x) * -.5);
  margin-left: calc(var(--bs-gutter-x) * -.5);
}

.vh-100 {
  height: 100vh !important;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border-radius: 1rem;
  border: none;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  margin-top: 5%;
  margin-bottom: 5%;
}

.card-header:first-child {
  border-radius: calc(1rem - 1px) calc(1rem - 1px) 0 0;
}

.card-header {
  position: relative;
  padding: 2rem;
  border-bottom: none;
  background-color: #fff;
  box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%);
  z-index: 2;
}

.card-heading {
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 540;
  text-transform: uppercase;
  letter-spacing: .2em;
}

.text-primary {
  color: #4650dd !important;
  --bs-text-opacity: 1;
}

.card-body {
  flex: 1 1 auto;
}

h3 {
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 30px;
}

.mb-3 {
  margin-bottom: 1rem !important;
}

.form-floating {
  position: relative;
}

.form-control {
  display: inline;
  width: 100%;
  font-size: .9rem;
  font-weight: 400;
  color: #343a40;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  appearance: none;
  border-radius: .25rem;
  padding: 25px;
}

.form-check {
  display: block;
  min-height: 1.35rem;
}

.form-check .form-check-input {
  float: left;
}

.form-check-input {
  width: 1em;
  height: 1em;
  margin-top: .25em;
  vertical-align: top;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
  border: 1px solid rgba(0, 0, 0, .25);
}

.form-label {
  padding-left: 8%;
}

.form-check-label {
  padding-left: 2%;
}

.btn-primary {
  color: #fff;
  background-color: #4650dd;
  border-color: #4650dd;
}

.btn-lg {
  padding: .5rem 1rem;
  font-size: 1.125rem;
  border-radius: .4rem;
}

a {
  color: #4650dd;
}

.text-center {
  text-align: center !important;
}
</style>