<template>
    <section>
      <h1>{{user.name}}</h1>
      <hr />
      {{user.email}}
    </section>
</template>

<script>
    export default {
        validate({params}) {
            return /^\d+$/.test(params.id)
        },
       async asyncData({store, error, params}) {
            try {
                const user = await store.dispatch('users/fetchUserById', params.id)
                return {user}
            } catch (e) {
                error(e)
            }
       }
        // asyncData({$axios, error, params}) {
        //   return  $axios.$get('https://jsonplaceholder.typicode.com/users/' + params.id)
        //       .then(user => {
        //           return {user}
        //       })
        //       .catch(err => {
        //           error(err)
        //       })
        // },
        // asyncData({params, error}) {
        //     return new Promise((resolve, reject) => {
        //         setTimeout(() => {
        //             reject(error(new Error('User not found')))
        //             // resolve({
        //             //     user: {
        //             //         name: `Test user ${params.id}`
        //             //     }
        //             // })
        //         }, 1500)
        //     } )
        // }
    }
</script>

<style scoped>

</style>
