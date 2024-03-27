<template>
  <section class="mb-5">
    <div class="card card-table mb-4">
      <div class="card-header">
        <div class="card-heading">Data Table - Test Table</div>
      </div>
      <div class="dataTable-wrapper dataTable-loading no-footer sortable fixed-columns">
        <div class="dataTable-top">
          <div class="dataTable-dropdown"><label><select class="dataTable-selector form-select form-select-sm">
                <option value="5">5</option>
                <option value="10" selected="">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
              </select> entries per page</label></div>
        </div>
        <div class="dataTable-container border-0">
          <table class="table table-hover mb-0 dataTable-table" id="datatable2">
            <thead>
              <tr>
                <th data-sortable="" style="width: 13.308%;"><a href="#" class="dataTable-sorter">Name</a></th>
                <th data-sortable="" style="width: 14.1952%;"><a href="#" class="dataTable-sorter">Email</a></th>
                <th data-sortable="" style="width: 33.3333%;"><a href="#" class="dataTable-sorter">Body</a></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(comment, index) in comments" :key="index">
                <td>{{ comment.name }}</td>
                <td>{{ comment.email }}</td>
                <td>{{ comment.body }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="dataTable-bottom">
          <div class="dataTable-info">Showing {{ comments.length }} entries</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ProductsTable',
  data() {
    return {
      comments: [] // To store the fetched comments
    };
  },
  mounted() {
    this.fetchComments(); // Fetch comments when the component is mounted
  },
  methods: {
    fetchComments() {
      axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
        .then(response => {
          this.comments = response.data; // Set the fetched comments to the data property
        })
        .catch(error => {
          console.error('Error fetching comments:', error);
        });
    }
  }
}
</script>

/* eslint-disable */
<style>
div {
  display: block;
}

.container,
.container-fluid,
.container-lg,
.container-md,
.container-sm,
.container-xl,
.container-xxl {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  overflow: hidden;
}

.mb-5 {
  margin-bottom: 3rem !important;
  margin-left: 20%;
  margin-right: 3%;
}

.page-header {
  margin-bottom: 3rem;
  margin-top: 3%;
  margin-left: 0 !important;
}

.error-msg {
  color: rgb(238, 0, 0);
}

.align-items-center {
  align-items: center !important;
}

.justify-content-between {
  justify-content: space-between !important;
}

.d-flex {
  display: flex !important;
}

.page-header {
  margin-bottom: 3rem;
}

.align-items-center {
  align-items: center !important;
}

.justify-content-between {
  justify-content: space-between !important;
}

.d-flex {
  display: flex !important;
}

.page-heading {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 300;
  font-size: 45px;
}

.text-sm {
  font-size: 0.7875rem !important;
}

.list-inline,
.list-unstyled {
  list-style: none;
}

dl,
ol,
ul {
  margin-top: 0;
  margin-bottom: 1rem;
}

.list-inline-item {
  display: inline-block;
}

.text-gray-600 {
  color: #6c757d !important;
}

.text-uppercase {
  text-transform: uppercase !important;
  letter-spacing: 0.2em;
}

.btn-primary {
  color: #fff;
  background-color: #4650dd;
  border-color: #4650dd;
}

.btn {
  display: inline-block;
}

select {
  font-family: "Poppins", sans-serif;
}

.form-modal {
  font-size: 14px;
  padding: 8px;
  color: #6c757d;
}

.mb-4 {
  margin-bottom: 3rem !important;
  overflow: hidden;
  position: relative;
}

.nav {
  margin-left: 0;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  overflow: hidden;
}

.nav-tabs {
  border-bottom: 1px solid #dee2e6;
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  border-bottom-width: 5px;
  margin-bottom: -3px;
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #4650dd;
  background-color: transparent;
  border-color: transparent transparent #4650dd;
}

.nav-link {
  display: block;
  padding: 0.5rem 1rem;
  color: #4650dd;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
}

.nav-tabs .nav-link {
  border-left-width: 0;
  border-right-width: 0;
  background: none;
}

button,
select {
  text-transform: none;
}

button {
  border-radius: 0;
}

[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled),
button:not(:disabled) {
  cursor: pointer;
}

.nav-tabs .nav-link:focus,
.nav-tabs .nav-link:hover {
  isolation: isolate;
}

button:focus:not(:focus-visible) {
  outline: 0;
}

.nav-link:focus,
.nav-link:hover {
  color: #212bb5;
  text-decoration: none;
}

button,
input,
optgroup,
select,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

.card-table {
  margin-left: 0 !important;
}

.card {
  margin-top: 1.5%;
  border: none;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  border-radius: 1rem;
  margin-left: 2%;
}

.card-header:first-child {
  border-radius: calc(1rem - 1px) calc(1rem - 1px) 0 0;
}

.card-header {
  padding: 2rem;
  border-bottom: none;
  background-color: #fff;
  box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%);
  margin-bottom: 0;
}

.card-heading {
  margin-bottom: 0;
  font-size: 0.9rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

h4 {
  display: block;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.dataTable-wrapper {
  background: #f8f9fa;
  overflow-x: auto;
  max-width: 100%;
}

.dataTable-top {
  font-size: 0.7875rem;
  padding: 2rem;
  background: #f8f9fa;
}

.dataTable-dropdown>div:last-child {
  float: right;
}

label {
  cursor: default;
  float: right;
  margin-bottom: 3%;
}

.dataTable-selector {
  display: inline !important;
  width: auto;
}

.form-select-sm {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  font-size: 0.7875rem;
}

.form-select {
  padding: 0.2rem 1.25rem 0.3rem 0.5rem;
  font-weight: 400;
  line-height: 1.5;
  color: #343a40;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 16px 12px;
  border: 1px solid #ced4da;
}

.dataTable-input.form-control-sm {
  padding: 0.25rem 0.5rem;
}

select {
  text-transform: none;
  margin: 0;
  letter-spacing: normal;
  word-spacing: normal;
  display: inline-block;
  text-align: start;
  box-sizing: border-box;
  align-items: center;
  font: 400 13.3333px Arial;
  border-radius: 0px;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
}

.dataTable-container {
  border: 0;
}

.card-table .dataTable-table {
  background: #fff;
}

.dataTable-table {
  width: 100%;
  max-width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}

.align-middle {
  vertical-align: middle !important;
}

.border-0 {
  border: 0 !important;
}

.table>thead {
  vertical-align: bottom;
}

tbody,
td,
tfoot,
th,
thead,
tr {
  border: 0 solid;
  border-color: inherit;
}

.card-table .table tr td:first-child,
.card-table .table tr th:first-child {
  padding-left: 2rem;
}

.table> :not(:last-child)> :last-child> {
  border-bottom-color: currentColor;
}

.card-table thead th {
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #fff;
  background: #343a40;
  font-size: 13px;
}

a.dataTable-sorter {
  color: white;
  text-decoration: none;
}

.card-table .dataTable-bottom {
  padding: 2rem;
  background: #f8f9fa;
  margin-bottom: 2%;
}

.dataTable-bottom>nav:last-child {
  float: right;
}

nav {
  display: block;
}

.dataTable-bottom>div:first-child {
  float: left;
}

.dataTable-info {
  margin: 7px 0;
}

.text-lg {
  font-size: 1.125rem !important;
}

.text-success,
.text-success-hover:hover {
  color: seagreen !important;
}

.me-3 {
  margin-right: 1rem !important;
}

.dataTable-bottom>nav:last-child {
  float: right;
}

nav {
  display: block;
}

.dataTable-pagination ul {
  margin: 0;
  padding-left: 0;
}

ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}

.dataTable-pagination li {
  float: left;
  list-style: none;
}

li {
  display: list-item;
  text-align: -webkit-match-parent;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.dataTable-pagination .active a {
  cursor: default;
  background-color: #d9d9d9;
}

.dataTable-pagination a {
  position: relative;
  float: left;
  margin-left: 2px;
  padding: 6px 12px;
  text-decoration: none;
  color: #333;
  border: 1px solid transparent;
}

a {
  transition: all .3s;
}

@media (min-width: 992px) {
  .px-lg-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
}

@media (min-width: 1200px) {
  .px-xl-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
}
</style>