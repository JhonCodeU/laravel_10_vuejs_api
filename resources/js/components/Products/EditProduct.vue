<template>
  <div class="mx-auto max-w-xl">
    <h3 class="text-center">Edit Product</h3>
    <div class="mt-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <form @submit.prevent="updateProduct">
            <div class="mb-4">
              <label class="block mb-2">Name</label>
              <input type="text" class="w-full p-2 rounded border-gray-300" v-model="product.name">
            </div>
            <div class="mb-4">
              <label class="block mb-2">Detail</label>
              <input type="text" class="w-full p-2 rounded border-gray-300" v-model="product.detail">
            </div>
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Update</button>
          </form>
        </div>
      </div>
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
        created() {
            this.axios
                .get(`http://localhost:8000/api/products/${this.$route.params.id}`)
                .then((res) => {
                    this.product = res.data;
                });
        },
        methods: {
            updateProduct() {
                this.axios
                    .patch(`http://localhost:8000/api/products/${this.$route.params.id}`, this.product)
                    .then((res) => {
                        this.$router.push({ name: 'home' });
                    });
            }
        }
    }
</script>
