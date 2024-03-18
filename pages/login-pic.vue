<template>
  <div class="mt-8">
      <LoginForm @login="handleLogin"/>
  </div>
</template>

<script>
import LoginForm from '~/components/LoginForm';

export default {
layout: 'default',
components: { LoginForm },
methods: {
  async handleLogin(loginData) {
    try {
      const tokenResponse = await this.$axios.$get('/api/auth/pic/login');
      const token = tokenResponse.data.token;
      const res = await this.$auth.loginWith('localPIC', {
        data: {
          ...loginData,
          token: token,
        },
      });

      if (res.success) {
        this.$router.push('/pic');
      } else {
          console.error("Login failed");
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  },
},
};
</script>