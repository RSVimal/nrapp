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
            <Label class="action-bar-title" style="color:white;" text="Live"></Label>
        </ActionBar>
        <StackLayout class="home-panel">
				<VideoPlayer ref="player" src="https://live.nronlineclass.in/vod/280520/file.m3u8" autoplay="true" height="300" />

				<!-- <Button class="btn btn-primary" text="Play" @tap="$refs.player.nativeView.play()" />
				<Button class="btn btn-primary" text="Pause" @tap="$refs.player.nativeView.pause()" />
				<Button class="btn btn-primary" text="Go To 30 seconds" @tap="$refs.player.nativeView.seekToTime(30000)" /> -->
			</StackLayout>
    </Page>
</template>

<script>
import * as utils from "~/shared/utils";
export default {
    
    methods: {
        onToggleDrawerTap() {
            utils.showDrawer();
        }
    }
}
</script>