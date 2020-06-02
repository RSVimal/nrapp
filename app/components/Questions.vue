<template>
    <page>
        <ActionBar style="background-color:rgb(2, 9, 65)" class="action-bar">
              <NavigationButton ios:visibility="collapsed" icon="res://menu" @tap="onToggleDrawerTap"></NavigationButton>
              <Label class="action-bar-title" style="color:white;" text="Questions"></Label>
        </ActionBar>
        <StackLayout>
            <DatePickerField @dateChange="emit" verticalAlignment="top" style="font-size:25;" hint="select date"></DatePickerField>
            <Label :text="htmlcode"></Label>
        </StackLayout>
    </page>
</template>

<script>
import * as utils from "~/shared/utils";
export default {
     methods: {
            onToggleDrawerTap() {
                utils.showDrawer();
            },
            emit()
            {
                alert("Date Selected");
            }
            
            },
            data()
            {
             return{
            
             }
            }
        }

</script>