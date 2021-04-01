<template>
  <header>
    <v-app-bar
      clipped-right
      color="tranceparent"
      src="@/assets/triangle-mosaic.png"
      hide-on-scroll
      >
      <v-toolbar-title>jack</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click = "drawer = true"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      right
      temporary
      clipped
      absolute
      >
      <v-list-item>
        <v-list-item-title class="listtitle">
           Application
        </v-list-item-title>
        <v-btn icon @click = "drawer = false">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-list
        nav
        >
        <v-list-item-group>
          <v-list-item
            v-for="menuItem in menuItems"
            :key="menuItem.id"
            >
            <v-list-item-title v-scroll-to="menuItem.id" @click = "drawer = false">{{ menuItem.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
export default {
  data:() => ({
    drawer: false,
    menuItems: [
      {
        id:'#can',
        name:"jackでできること"
      },{
        id:'#activity',
        name:"活動内容"
      },{
        id:'#products',
        name:"プロダクト一覧"
      },{
        id:'#schedule',
        name:"活動予定"
      },{
        id:'#welcometour',
        name:"見学したい方"
      },{
        id:'#FAQ',
        name:"よくある質問"
      },
    ]
  })
}
</script>

<style scoped>

</style>
