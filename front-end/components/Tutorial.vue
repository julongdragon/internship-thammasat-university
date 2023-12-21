<template>
  <div>
    <h2>hello students</h2>
    <p>ข้อความที่พิมพ์ : {{ form.name }}</p>
    <p>ชื่อ <input v-model="form.name" type="text" /></p>
    <p><button @click="sendData">click me!</button></p>
    <p v-if="responseFromServer !== undefined">{{ responseFromServer }}</p>
  </div>
</template>
<script>
export default {
  name: 'ApiTestComponent',
  data() {
    return {
      form: {
        name: '',
      },
      responseFromServer: undefined,
    }
  },
  methods: {
    sendData() {
      this.$axios({
        url: 'http://localhost:8888/api/test',
        method: 'post',
        data: this.form,
      }).then((res) => {
        console.log(res.data) // log ข้อมูล
        this.responseFromServer = res.data
      })
    },
  },
}
</script>

<style  scoped>
button {
  border-radius: 10px;
  padding: 10px 10px;
  border: 1px solid green;
}
input {
  border-radius: 10px;
  border: 1px solid red;
}
h2,
p {
  margin-left: 23px;
  margin-top: 15px;
}
</style>