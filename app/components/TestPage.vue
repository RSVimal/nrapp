<template>
    <Page>
        <ActionBar style="background-color:rgb(2, 9, 65)" class="action-bar"> 
            <NavigationButton ios:visibility="collapsed" icon="res://menu" @tap="onToggleDrawerTap"></NavigationButton>
            <Label class="action-bar-title" style="color:white;" text="Test"></Label>
        </ActionBar>
<ScrollView orientation="vertical">
      <StackLayout style="border-color: indigo;" class="cardContent">
        <StackLayout class="cardheading">
          <Label text="Test-1 Details"></Label>
        </StackLayout>
        <Label  class="cardtext" textWrap="true" :text="testdetails1">
          </Label>
          <Button  style="background-color:rgb(2, 141, 2); color:white;border-radius:20 20 20 20;"  text="Take Test" @tap="passwordprompt" width="100"></Button>
        <StackLayout class="cardheading">
          <Label text="Test-1 Details"></Label>
        </StackLayout>
        <Label  class="cardtext" textWrap="true" :text="testdetails2">
          </Label>
          <Button  style="background-color:rgb(2, 141, 2); color:white;border-radius:20 20 20 20;"  text="Take Test" @tap="passwordprompt" width="100"></Button>
  <StackLayout class="cardheading">
          <Label text="Test-1 Details"></Label>
        </StackLayout>
        <Label  class="cardtext" textWrap="true" :text="testdetails3">
          </Label>
          <Button  style="background-color:rgb(2, 141, 2); color:white;border-radius:20 20 20 20;"  text="Take Test" @tap="passwordprompt" width="100"></Button>

      </StackLayout>



</ScrollView>


    </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import { inputType } from 'tns-core-modules/ui/dialogs/dialogs';

export default {
  data()
  {
return{
  testdetails1:"Title: 11th economics new book chap - 8 Date: 2020-05-2 Available from: 09:00 Available until: 10:00 Duration: 60 mins",
  testdetails2:"Title: 11th economics new book chap - 8 Date: 2020-05-2 Available from: 09:00 Available until: 10:00 Duration: 60 mins",
  testdetails3:"Title: 11th economics new book chap - 8 Date: 2020-05-2 Available from: 09:00 Available until: 10:00 Duration: 60 mins"
}
  },
     methods: {
            onToggleDrawerTap() {
                utils.showDrawer();
            }
        },
         passwordprompt()
            {
            const dialogs = require('tns-core-modules/ui/dialogs')
            prompt({
            title: "Password:",
            message: "Provide your password",
            okButtonText: "OK",
            cancelButtonText: "Cancel",
            inputType: dialogs.inputType.password
}).then(result => {

        this.$navigateTo(TestQuestions);

  console.log(`Dialog result: ${result.result}, text: ${result.text}`)
});
            }
};
</script>
<style scoped>
    .cardtext
    {
        font-size:15;
        text-align:center;
    }
    .card{

padding: 10;
}
.cardheading
{
    padding:10;
    background-color: rgb(2, 9, 65);
    color:white;
    font-size:30;
    font-weight: bold;
    text-align: center;

}
.cardContent
{   padding-top: 20l;
    width:300;
    font-weight: bold;
    font-size: 10;
    color:black;

}

</style>