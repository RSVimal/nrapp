<template>
    <Page>
        <ActionBar style="background-color:rgb(2, 9, 65)" class="action-bar"> 
            <!-- <NavigationButton ios:visibility="collapsed" icon="res://menu" @tap="onToggleDrawerTap"></NavigationButton> -->
            <NavigationButton ios:visibility="collapsed" icon="res://menu" @tap="onToggleDrawerTap"></NavigationButton>
           <ActionItem icon="res://menu"
                android:visibility="collapsed"
                @tap="onDrawerButtonTap"
                ios.position="left">
            </ActionItem>
            <Label class="action-bar-title" style="color:white;" text="Home"></Label>
        </ActionBar>
        <StackLayout >
            <TextField v-model="id" hint="Enter Student ID..." />
            <TextField  v-model="password" secure="true" hint="Enter Password..." />
            <Button text="Login" @tap="login" />
        </StackLayout>
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