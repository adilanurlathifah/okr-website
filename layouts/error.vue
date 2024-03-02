<template>
    <div>
        <div>
            <div class="flex flex-col justify-center p-6" v-if="error.statusCode === 404">
                <!-- <img
                    src="~/assets/img/error/404.png"
                    class="mb-4 w-[450px] h-full"
                > -->
                <p class="mb-1 text-center text-semibold text-lg">
                    Sorry, something wrong happens. 
                </p>
                <div class="flex flex-row justify-center">
                    <nuxt-link 
                        v-if="$auth.loggedIn"
                        :to="link"
                        class="px-4 py-2 rounded-md bg-black text-white"
                    >
                        Back to Dashboard
                    </nuxt-link>
                    <nuxt-link 
                        v-else
                        to="/"
                        class="px-4 py-2 text-center rounded-md bg-black text-white"
                    >
                        Back to Home Page
                    </nuxt-link>
                </div>
            </div>
            <div class="flex flex-col justify-center p-6" v-else-if="error.statusCode === 500">
                <!-- <img
                    src="~/assets/img/error/500.png"
                    class="mb-4 w-[450px] h-full"
                > -->
                <p class="mb-1 text-center text-semibold text-lg">
                     Sorry, something wrong happens. 
                </p>
                <p class="mb-1 text-center text-semibold text-sm">
                    We're fixing.. Please comeback later 
                </p>
                <div class="flex flex-row justify-center">
                    <nuxt-link 
                        v-if="$auth.loggedIn"
                        :to="link"
                        class="px-4 py-2 rounded-md bg-black text-white"
                    >
                        Back to Dashboard
                    </nuxt-link>
                    <nuxt-link 
                        v-else
                        to="/"
                        class="px-4 py-2 rounded-md bg-black text-white"
                    >
                        Back to Home Page
                    </nuxt-link>
                </div>
            </div>
            <div class="flex flex-col justify-center p-6" v-else>
                <!-- <img
                    src="~/assets/img/error/404.png"
                    class="mb-4 w-[450px] h-full"
                > -->
                <p class="text-center mb-1 text-semibold text-lg">
                    {{ error.message }} 
                </p>
                <div class="flex flex-row justify-center">
                    <nuxt-link 
                        v-if="$auth.loggedIn"
                        :to="link"
                        class="px-4 py-2 rounded-md bg-black text-white"
                    >
                        Back to Dashboard
                    </nuxt-link>
                    <nuxt-link 
                        v-else
                        to="/"
                        class="px-4 py-2 rounded-md bg-black text-white"
                    >
                        Back to Home Page
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        layout: 'error',
        props: {
            error: {
                type: Object,
                default: () => {
                    return {
                        statusCode: null,
                        message: null
                    }
                }
            }
        },
        computed: {
            link() {
                if (this.$auth && this.$auth.loggedIn && process.client) {
                    const roleId = this.$auth.user.id_role
                    if (roleId === 1) return '/member'
                    if (roleId === 2) return '/pic'
                    if (roleId === 3) return '/admin'
                }
                return '/'
            }
        }
    }
</script>
