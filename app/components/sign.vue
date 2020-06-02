<template>
	<Page class="page">
		<ActionBar style="background-color:rgb(2, 9, 65); color:white;"  class="action-bar">
             <Label class="action-bar-title" style="color:white;" text="Login"></Label>
        </ActionBar>
		<ScrollView>
			<StackLayout class="m-20">
				<FloatLabel v-model="id" placeholder="Username" />
				<FloatLabel  v-model="password" placeholder="Password" secure="true" />
                 <Button style="border-radius:20; width:150; background-color:#02a7bd; color:white;" text="Login" @tap="login" />
                 <Button style="border-radius:20; width:150; background-color:#d11f25; color:white;" text="Forget Password"/>
			</StackLayout>
            
               
		</ScrollView>
	</Page>
</template>

<script>
import * as utils from "~/shared/utils";
const firebaseWebApi = require("nativescript-plugin-firebase/app")
export default {
    data: () => ({
        id: '',
        dialog: '',
        email: '',
        password: '',
    }),
    methods: {
        login() {
            firebaseWebApi.database().ref('students/'+this.id+'/email').once('value')
            .then((data) => {
                if(data.val()){
                    var email = data.val()
                    firebaseWebApi.auth().signInWithEmailAndPassword(email, this.password)
                    .then(() => {
                        console.log("User logged in")
                        this.$navigator.navigate('/home', { clearHistory: true })
                    })
                    .catch(err => console.log("Login error: " + JSON.stringify(err)));
                }
            })
            
        },
        onToggleDrawerTap() {
            utils.showDrawer();
        },
    },
    computed: {
        text () {
            return this.$store.state.testText
        }
    }
}
</script>
