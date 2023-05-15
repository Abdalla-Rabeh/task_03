<template>
  <div class="home container">
    <form @submit.prevent="submit">
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
      <button class="btn btn-primary" style="margin: 10px auto">اضافه</button>
    </form>
    <b-table responsive="lg" :items="items" :fields="fields">
      <template #cell(view)="data">
        <div class="d-flex justify-content-center">
          <button @click="edit(data.item, data)">تعديل</button>
          <button class="datlis" @click="del(data, data.index)">حذف</button>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "HomeView",
  data() {
    return {
      formData: {
        name: null,
        phone: null,
        specialty: 0,
      },
      fields: [
        {
          key: "name",
          label: "الاسم",
          thStyle: {
            background: "#42b983",
            color: "#fff",
            border: "1px solid",
            textAlign: "center",
          },
        },
        {
          key: "phone",
          label: "رقم الهاتف",
          thStyle: {
            background: "#42b983",
            textAlign: "center",
            color: "#fff",
            border: "1px solid",
          },
        },
        {
          key: "specialty",
          label: "التخصص",
          thStyle: {
            background: "#42b983",
            textAlign: "center",
            color: "#fff",
            border: "1px solid",
          },
        },
        {
          key: "view",
          label: "اعدادت",
          thStyle: {
            background: "#42b983",
            color: "#fff",

            border: "1px solid",
            textAlign: "center",
          },
        },
      ],
      items: [],
    };
  },
  methods: {
    submit() {
      axios.post("http://localhost:3001/task", this.formData).then((res) => {
        this.formData = {}
        this.items.push(res.data)
       
      });
    },
    showAll() {
    axios.get("http://localhost:3001/task").then((res) => {
        this.items = res.data;
      });
    },
    del(data, index) {
      if (confirm("Do you really want to delete?")) {
        axios.delete(`http://localhost:3001/task/${data.item.id}`).then(() => {
          console.log(data.item.id);
          this.items.splice(index, 1);
        });
      }
    },
    edit(id) {
      this.$router.push({ name: "edit", params: { id: id.id } });
    },

  },
  mounted() {
    this.showAll();
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
