<template>
  <header>
    <v-app-bar
      clipped-right
      color="#FC913A"
      hide-on-scroll
      fixed
      dark
      >
      <v-btn icon size="1">
        <img src="@/assets/jack-logo.png">
      </v-btn>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click = "drawer = true"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      right
      temporary
      clipped
      fixed
      >
      <div class="listicon">
        <v-btn icon @click = "drawer = false">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </div>
      <v-list
        nav
        flat
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
        name:"新歓2021"
      },{
        id:'#FAQ',
        name:"よくある質問"
      },
    ]
  })
}
</script>

<style scoped>
.listicon{
  text-align: right;
  padding-right: 10%;
  padding-top: 5%
}

</style>
