<template>
    <div>
        <h1>Task list</h1>
        <ul>
            <li v-for="task in tasks" :key="task.id">
                {{ task.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tasks: [
                { id: 1, name: 'Task 1' },
                { id: 2, name: 'Task 2' },
                { id: 3, name: 'Task 3' },
            ]
        }
    },
/*     mounted() {
        axios.get('/api/tasks')
            .then(response => {
                this.tasks = response.data
            })
    }, */
}
</script>
