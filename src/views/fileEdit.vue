<template>
    <div class="home container">
      <form @submit.prevent="editOne">
      <input
        type="text"
        v-model="formData.name"
        class="form-control"
        placeholder="الاسم"
      />
      <input
        type="text"
        v-model="formData.phone"
        class="form-control"
        placeholder="رقم الهاتف"
      />
      <input
        class="form-control"
        type="text"
        v-model="formData.file"
        placeholder="اكتب مسار الصوره "
        
      />
      <button class="btn btn-primary" style="margin: 10px auto">تعديل</button>
    </form>
      
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import axios from "axios";
  export default {
    name: "fileEdit",
    data() {
      return {
        formData: {
          name: null,
          phone: null,
          file: null,
        },
       
      };
    },
    methods: {
      
      editOne() {
        axios.put(`http://localhost:3001/file/${this.$route.params.id}` , this.formData).then(res => {
          console.log(res.data)
          this.$router.push("/about")
        })
      },
      showOne(){
        axios.get(`http://localhost:3001/file/${this.$route.params.id}`).then((res) => {
           this.formData.name = res.data.name
           this.formData.phone = res.data.phone
           this.formData.file = res.data.file
        })
      }
        
        
        
    },
    mounted() {
      this.showOne();
    },
  };
  </script>
  <style>
  input,
  select {
    margin: 10px auto !important;
  }
  body {
    direction: rtl;
  }
  table button {
    background: #1791c9;
    text-align: center;
    padding: 10px;
    color: #ebeef5;
    font-weight: bold;
    border-radius: 10px;
    margin-left: 10px;
    border: none;
    width: 100px;
  }
  table button:last-of-type {
    background: #e74c3c;
  }
  </style>
  