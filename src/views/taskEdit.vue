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
        <select class="form-select" v-model="formData.specialty">
        <option selected value="0" hidden disabled>التخصص</option>
        <option selected value="رمد">رمد</option>
        <option selected value="اسنان">اسنان</option>
        <option selected value="اطفال">اطفال</option>
        <option selected value="باطنه">باطنه</option>
        <option selected value="عظام">عظام</option>
        <option selected value="انف واذن">انف واذن</option>
      </select>
        <button class="btn btn-primary" style="margin: 10px auto;">تعديل</button>
      </form>
      
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import axios from "axios"
  export default {
    name: "taskEdit",
    data() {
      return {
        formData: {
          name: null,
          phone: null,
          specialty: 0,
        },
       
      };
    },
    methods: {
      editOne() {
        axios.put(`http://localhost:3001/task/${this.$route.params.id}` , this.formData).then(res => {
          console.log(res.data)
          this.$router.push("/")
        })
      },
      showOne(){
        axios.get(`http://localhost:3001/task/${this.$route.params.id}`).then((res) => {
           this.formData.name = res.data.name
           this.formData.phone = res.data.phone
           this.formData.specialty = res.data.specialty
        })
      }

  },
  mounted(){
    this.showOne()
  }
  }
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
  table button:last-of-type{
    background: #e74c3c;
  }
  </style>
  