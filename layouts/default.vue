<template>
	<div id="wrapper">
    <app-navbar v-if="isAuth"></app-navbar>
		<div id="content-wrapper" class="d-flex flex-column">
			<div id="content">
        <app-sidebar v-if="isAuth"></app-sidebar>
				<nuxt/>
			</div>
		</div>
	</div>
</template>

<script>
	import Sidebar from '@/components/Sidebar.vue'
	import Navbar from '@/components/Navbar.vue'
	import {mapState } from 'vuex'

	export default {
		data() {
			return {
				// isAuth: false 
			}
		},
		computed: {
			...mapState(['isAuth']),
		},
		components: {
			'app-sidebar': Sidebar,
			'app-navbar': Navbar
		}
	}
</script>