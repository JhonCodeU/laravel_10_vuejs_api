<template>
  <div class="flex flex-col items-center">
    <h3 class="text-center">Create Product</h3>
    <div class="w-full max-w-md">
      <form @submit.prevent="addProduct" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="name">
            Name
          </label>
          <input
            v-model="product.name"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="detail">
            Detail
          </label>
          <input
            v-model="product.detail"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="detail"
            type="text"
            placeholder="Detail"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                product: {}
            }
        },
        methods: {
            addProduct() {
                this.axios
                    .post('http://localhost:8000/api/products', this.product)
                    .then(response => (
                        this.$router.push({ name: 'home' })
                    ))
                    .catch(err => console.log(err))
                    .finally(() => this.loading = false)
            }
        }
    }
</script>
