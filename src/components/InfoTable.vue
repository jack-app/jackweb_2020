<template>
    <table class="table table-2col">
        <tbody>
        <tr>
            <th>サークル・団体名</th>
            <td>jack</td>
        </tr>
        <tr>
            <th>人数</th>
            <td>?人</td>
        </tr>
        <tr>
            <th>活動場所</th>
            <td>名古屋大学</td>
        </tr>
        <tr>
            <th>活動内容</th>
            <td>
            <ul>
                <li>Android・iOSアプリケーション製作</li>
                <li>パソコン用ソフトウェア製作</li>
                <li>サービス・ゲーム企画の構想及び運営</li>
                <li>Webコンテンツ製作・提供</li>
                <li>各種ハッカソン・ITイベントへの参加等</li>
            </ul>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<style scoped>
table{
  width: 100%;
  border-collapse: collapse;
  color: #4c4c4c;
}

table tr{
  border-bottom: solid 2px white;
}

table tr:last-child{
  border-bottom: none;
}

table th{
  position: relative;
  text-align: left;
  width: 30%;
  background-color: #FFB300;
  color: white;
  text-align: center;
  padding: 10px 0;
}

table th:after{
  display: block;
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  top:calc(50% - 10px);
  right:-10px;
  border-left: 10px solid #FFB300;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
}

table td{
  text-align: left;
  width: 70%;
  text-align: center;
  background-color: #eee;
  padding: 10px 0;
}

ul{
  list-style: none;
  padding-left: 0;
}
</style>