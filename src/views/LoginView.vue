<template>
  <div class="container">
    <form @submit.prevent="submit">
      <input
        type="text"
        v-model="formData.username"
        class="form-control"
        placeholder="اسم المستخدم"
      />
      <input
        type="password"
        v-model="formData.password"
        class="form-control"
        placeholder="كلمة المرور"
      />
      <button class="btn btn-primary" style="margin: 10px auto">تسجيل الدخول</button>
    </form>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data(){
    return{
      formData:{
        username:"",
        password:"",
      }
    }
  },
  methods: {
    submit() {
      if (!this.formData.username || !this.formData.password) {
        alert('Please enter both username and password.');
        return;
      }
      
      axios.get("http://localhost:3001/login", { 
        params: {
          username: this.formData.username,
          password: this.formData.password
        }
      })
      .then(response => {
          const user = response.data[0];
          if (user) {
            // Login successful
            alert('Login successful!');
            this.formData = {}
        localStorage.setItem("token", JSON.stringify(response.data))
        this.$router.push({ path: "/task"});
          } else {
            // Login failed
            alert('Invalid username or password.');
          }
        })
      // .then((res) => {
        
      // });
    },
    

  },
 
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
button {
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

</style>