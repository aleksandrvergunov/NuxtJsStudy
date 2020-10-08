<template>
    <section>
      <h1>{{pageTitle}}</h1>
      <ul>
        <li v-for="user of users" :key="user.id">
          <a href="#" @click.prevent="goTo(user)">User {{user.name}} ({{user.email}})</a>

        </li>
      </ul>
    </section>
</template>

<script>
    export default {
        name: "users",

        // async fetch({store, error}) {
        //     try {
        //         if (store.getters['users/users'].length < 1)
        //             await store.dispatch('users/fetchUsers')
        //     } catch (e) {
        //         error(e)
        //     }
        // },
        // async asyncData({store, error}) {
        //     try {
        //         await store.dispatch('users/fetchUsers')
        //         return {}
        //     } catch (e) {
        //         error(e)
        //     }
        //
        //     // return $axios.$get('https://jsonplaceholder.typicode.com/users')
        //     //     .then(users => {
        //     //         return {
        //     //             users
        //     //         }
        //     //     })
        //     //     .catch(err => {
        //     //         error(err)
        //     //     })
        // },
        data: () => ({
            pageTitle: 'Users page!'
        }),
        computed: {
            users() {
                return this.$store.getters['users/users']
            }
        },
        methods: {
            goTo(user) {
                this.$router.push('/users/'+user.id)
            }
        }
    }
</script>

<style scoped>

</style>
