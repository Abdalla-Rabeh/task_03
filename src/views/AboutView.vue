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
      <input
        class="form-control"
        type="text"
        v-model="formData.file"
        placeholder="اكتب مسار الصوره "
        
      />
      <button class="btn btn-primary" style="margin: 10px auto">اضافه</button>
    </form>
    <b-table responsive="lg" :items="items" :fields="fields">
      <template #cell(file)="data">
        <img :src="data.item.file" />
      </template>
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
  name: "AboutView",
  data() {
    return {
      formData: {
        name: null,
        phone: null,
        file: null,
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
          key: "file",
          label: "الصوره",
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
      axios.post("http://localhost:3001/file", this.formData).then((res) => {
          this.items.push(res.data);
          this.formData = {}
        });
    },
    showAll() {
      axios.get("http://localhost:3001/file").then((res) => {
        this.items = res.data;
      });
    },
    del(data, index) {
      if (confirm("Do you really want to delete?")) {
        axios.delete(`http://localhost:3001/file/${data.item.id}`).then(() => {
          console.log(data.item.id);
          this.items.splice(index, 1);
        });
      }
    },
    edit(id) {
      this.$router.push({ name: "file", params: { id: id.id } });
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
img{
  width: 100px;
}
</style>
