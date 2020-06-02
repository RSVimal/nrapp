<template lang="html">
<RadSideDrawer ref="drawer" drawerLocation="Left" gesturesEnabled="true" :drawerTransition="transition">
    <StackLayout ~drawerContent backgroundColor="#ffffff">
      <DrawerContent />
    </StackLayout>
    <Page ~mainContent ref="drawerMainContent">
      <Navigator :defaultRoute="isLoggedIn ? '/home' : '/login'"/>
    </Page>
  </RadSideDrawer>
</template>

<script >
import DrawerContent from './DrawerContent';
 import { SlideInOnTopTransition } from 'nativescript-ui-sidedrawer';

  export default {
    data: () => ({
      isLoggedIn: false,
      msg: 'Hello!',
      transition: new SlideInOnTopTransition()
    }),
    methods: {
      login() {
            this.$navigator.navigate('/home', { clearHistory: true })
        }
    },
    components: {
      DrawerContent
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
