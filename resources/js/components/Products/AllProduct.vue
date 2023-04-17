<template>
  <div>
    <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl font-bold mb-4">Products List</h2>
        <router-link class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" :to="{name: 'create'}">Create Product</router-link>
    </div>
    <table class="w-full border-collapse border-gray-300 table-auto">
      <thead>
        <tr>
          <th class="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider border-b border-gray-300">ID</th>
          <th class="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider border-b border-gray-300">Name</th>
          <th class="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider border-b border-gray-300">Detail</th>
          <th class="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider border-b border-gray-300">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id" class="hover:bg-gray-100">
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{{ product.id }}</td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{{ product.name }}</td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{{ product.detail }}</td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
            <div role="group">
              <router-link class="text-blue-600 hover:underline" :to="{name: 'edit', params: { id: product.id }}">Edit</router-link>
              <button class="text-red-600 hover:underline" @click="deleteProduct(product.id)">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
    export default {
        data() {
            return {
                products: []
            }
        },
        created() {
            this.axios
                .get('http://localhost:8000/api/products/')
                .then(response => {
                    this.products = response.data;
                });
        },
        methods: {
            deleteProduct(id) {
                this.axios
                    .delete(`http://localhost:8000/api/products/${id}`)
                    .then(response => {
                        let i = this.products.map(data => data.id).indexOf(id);
                        this.products.splice(i, 1)
                    });
            }
        }
    }
</script>
