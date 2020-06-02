<template lang="html">
<GridLayout rows="auto, *" class="nt-drawer__content">
            <StackLayout row="0" class="nt-drawer__header">
                <Label class="nt-drawer__header-brand" text="User Name"></Label>
                <Label class="nt-drawer__header-footnote" text="username@mail.com"></Label>
            </StackLayout>
        
            <ScrollView row="1" class="nt-drawer__body">
                <StackLayout style="background-color:rgb(2, 9, 65)">
                    <GridLayout  columns="auto, *"  @tap="onNavigationItemTap('/home')">
                        <Label col="0" text.decode="&#xf015;" class="nt-icon fas"></Label>
                        <Label style="color:white; font-size:15" col="1" text="Dashboard" class="p-r-10"></Label>
                    </GridLayout>
                    
                     <StackLayout class="hr"></StackLayout>


                    <GridLayout columns="auto, *" @tap="onNavigationItemTap('/live')">
                        <Label col="0" text.decode="&#xf1ea;" class="nt-icon far"></Label>
                        <Label style="color:white; font-size:15" col="1" text="Live" class="p-r-10"></Label>
                    </GridLayout>
                    
                    <StackLayout class="hr"></StackLayout>

                    <GridLayout columns="auto, *" @tap="onNavigationItemTap('/testpage')">
                        <Label col="0" text.decode="&#xf002;" class="nt-icon fas"></Label>
                        <Label style="color:white; font-size:15" col="1" text="Test" class="p-r-10"></Label>
                    </GridLayout>
                    
                    <StackLayout class="hr"></StackLayout>

                    <GridLayout columns="auto, *" @tap="onNavigationItemTap('/questions')">
                        <Label col="0" text.decode="&#xf005;" class="nt-icon fas"></Label>
                        <Label style="color:white; font-size:15" col="1" text="Questions" class="p-r-10"></Label>
                    </GridLayout>
        
                    <StackLayout class="hr"></StackLayout>

                    <GridLayout columns="auto, *" @tap="onNavigationItemTap('/materials')">
                        <Label col="0" text.decode="&#xf013;" class="nt-icon fas"></Label>
                        <Label style="color:white; font-size:15" col="1" text="Materials" class="p-r-10"></Label>
                    </GridLayout>

                    <StackLayout class="hr"></StackLayout>
                    
                    
                    <GridLayout columns="auto, *" @tap="onNavigationItemTap('/sign')">
                        <Label col="0" text.decode="&#xf013;" class="nt-icon fas"></Label>
                        <Label style="color:white; font-size:15" col="1" text="Logout" class="p-r-10"></Label>
                    </GridLayout>
                    
                     <StackLayout class="hr"></StackLayout>
                    

                </StackLayout>
            </ScrollView>
        </GridLayout>
</template>

<script>
import * as utils from "~/shared/utils";

export default {
    
    methods: {
        onNavigationItemTap(route) {
            this.$navigator.navigate(route)
            utils.closeDrawer();
        }
    }
}
</script>

<style lang="scss">
.sidebar
{
    font-size: 30;
}
</style>