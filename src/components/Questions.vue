<template>
<div class='faq-container'>
  <v-expansion-panels accordion>
        <v-expansion-panel
          v-for="content in contents"
          :key="content.asktext"
        >
          <v-expansion-panel-header>
            <v-avatar color="white" size="30">
            <span class="orange--text headline" color="#FC913A">Q.</span>
            </v-avatar>
            <div>
              {{content.asktext}}
            </div>
            <template v-slot:actions>
              <v-icon color="#FC913A">
                $expand
              </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-avatar class="answer" color="white" size="48">
            <span class="orange--text headline" color="#FC913A">A.</span>
            </v-avatar>
            <div>
              {{content.anstext}}
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
</div>
</template>

<script>
export default {
  data: ()=> ({
    contents:[
      {
        asktext:"未経験でも大丈夫ですか？",
        anstext:"大丈夫です！　多くのjackメンバーが初心者の状態で加入しています。",
      },{
        asktext:"jackに入るのに何か条件はありますか？",
        anstext:"もちろん2年生からでも加入できます！ \r\n 実際、2年生から加入したメンバーもたくさんいます。",
      },{
        asktext:"２年生からでも入れますか？",
        anstext:"もちろん２年生からでも加入できます！",
      },{
        asktext:"兼サー、兼部は可能ですか？",
        anstext:"もちろん可能です。実際に兼サークルしているメンバーもいます。",
      },{
        asktext:"年会費はいくらですか？　何に使いますか？",
        anstext:"年会費は500円です。AppStoreにアプリをリリースするのに使います。",
      },{
        asktext:"どれくらいの頻度で活動に参加する必要がありますか？",
        anstext:"メンバーによって参加頻度はまちまちです。毎週参加する人もいれば、月1程度の人もいれば、年1の発表会だけ参加する人もいます。みんなjackメンバーです。",
      },{
        asktext:"現在jackに何人所属していますか？",
        anstext:"約50人です。",
      },{
        asktext:"男女比はどれくらいですか？",
        anstext:"男子の方が多いですが、女子もいます！",
      },{
        asktext:"名古屋大学以外の学生でもjackに入れますか？",
        anstext:"入れます！　実際に南山大学、愛知工業大学、愛知県立大学、金城学院大学の学生もjackにいます！",
      },{
        asktext:"プログラミングを教えてくれますか？",
        anstext:"講習会などは行っていません。わからないことがあればメンバーに質問すれば解決してくれることもありますが、基本的に自分で調べて作っていきます。",
      },{
        asktext:"どの言語を使って開発してますか？",
        anstext:"各々の作りたいものに合った言語を使用しています。ゲーム開発であればUnity C#, web開発ならHTML, CSS, javascriptなど、各々の好きな言語を使っています。",
      },{
        asktext:"作ってほしいアプリがあるんですが……",
        anstext:"製作依頼は受け付けていません。ただし、メンバーを誘って一緒に作るのは大歓迎です！",
      },
    ]
  }),
}


</script>

<style scoped>
.faq-container div{
  width: 80%;
  margin: 0 auto;
  text-align: left;
}
.v-avatar{
  display:
}
.answer{
  margin: 0;
}
</style>
