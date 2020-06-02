<template>
    <Page>
         <ActionBar style="background-color:rgb(2, 9, 65)" class="action-bar"> 
            <!-- <NavigationButton ios:visibility="collapsed" icon="res://menu" @tap="onToggleDrawerTap"></NavigationButton> -->
            <NavigationButton ios:visibility="collapsed" icon="res://menu" @tap="onToggleDrawerTap"></NavigationButton>
           <ActionItem icon="res://menu"
                android:visibility="collapsed"
                @tap="onToggleDrawerTap"
                ios.position="left">
            </ActionItem>
            <Label class="action-bar-title" style="color:white;" text="Dashboard"></Label>
        </ActionBar>
        <StackLayout>
    <Button @tap="$navigateTo(TestPage)" text="Start Test" horizontalAlign="top" style="border-radius:30 30 30 30; width:200; color:whitesmoke; background-color:rgb(2, 146, 50);" ></Button>
   </StackLayout>
    </Page>
</template>
<script>
    import TestPage from './TestPage';
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";

    export default {
    
        methods: {
            onToggleDrawerTap() {
                utils.showDrawer();
            }
        },
        data()
        {
            return{
                  TestPage:TestPage
            }
        },
        components:
        {
            TestPage
        }
    };
</script>
