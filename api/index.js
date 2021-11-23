const app = require("express")();
const { Client } = require("@notionhq/client");
require("dotenv").config();

const notion = new Client({
  auth: process.env.NOTION_SECRET
});

//node api/index.jsでサーバー起動
var server = app.listen(3000, function() {
  console.log("Node.js is listening to PORT:" + server.address().port);
});

//イベントの一覧を取ってくる。（日付で降順、5件）
//戻り値はmessage:{key: int,name: str,tags: [str],date:str}
app.get("/api/events", (req, res, next) => {
  (async () => {
    const data = await notion.databases.query({
      database_id: process.env.DATABASE_EVENTS,
      sorts: [
        {
          property: "Date",
          direction: "descending"
        }
      ], //日付降順でソート
      page_size: 5 //5件取ってくる
    });
    if (data.object != "list") {
      throw new Error("notion api err");
    } else {
      let results = data.results.map((obj, i) => ({
        key: i,
        name: obj.properties.Name.title[0].plain_text,
        tags: obj.properties.Tags.multi_select.map(tag => tag.name),
        date: obj.properties.Date.date
          ? obj.properties.Date.date.start +
            (obj.properties.Date.date.end
              ? "→" + obj.properties.Date.date.end
              : "")
          : ""
      }));
      res.json({
        message: results
      });
    }
  })().catch(next);
});

//実績の一覧を取ってくる。（日付で降順、10件）
//戻り値はmessage:{key: int,name: str,date:str, link:str}
app.get("/api/results", (req, res, next) => {
  (async () => {
    const data = await notion.databases.query({
      database_id: process.env.DATABASE_RESULTS,
      sorts: [
        {
          property: "Date",
          direction: "descending"
        }
      ],
      page_size: 10
    });
    if (data.object != "list") {
      throw new Error("notion api err");
    } else {
      let results = data.results.map((obj, i) => ({
        key: i,
        name: obj.properties.Name.title[0].plain_text,
        link: obj.properties.Link.rich_text.length
          ? obj.properties.Link.rich_text[0].plain_text
          : null,
        date: obj.properties.Date.date ? obj.properties.Date.date.start : null
      }));
      res.json({
        message: results
      });
    }
  })().catch(next);
});

//プロダクトの一覧を取ってくる。（掲載に☑、少なくとも1リンクあり）
//戻り値はmessage:{key: int,icon:url,description:str,name: str, ios:str,android:str,web:str}
app.get("/api/products", (req, res, next) => {
  (async () => {
    const data = await notion.databases.query({
      database_id: process.env.DATABASE_PRODUCTS,
      filter: {
        and: [
          {
            property: "jackWeb掲載",
            checkbox: {
              equals: true
            }
          },
          {
            or: [
              {
                property: "iosリンク",
                text: {
                  is_not_empty: true
                }
              },
              {
                property: "androidリンク",
                text: {
                  is_not_empty: true
                }
              },
              {
                property: "webリンク",
                text: {
                  is_not_empty: true
                }
              }
            ]
          }
        ]
      }
    });
    if (data.object != "list") {
      throw new Error("notion api err");
    } else {
      let results = data.results.map((obj, i) => ({
        key: i,
        description: obj.properties["プロダクト概要"].rich_text.length
          ? obj.properties["プロダクト概要"].rich_text[0].plain_text
          : null,
        icon: obj.cover ? obj.cover.file.url : null,
        name: obj.properties.Name.title[0].plain_text,
        android: obj.properties["androidリンク"].rich_text.length
          ? obj.properties["androidリンク"].rich_text[0].plain_text
          : null,
        ios: obj.properties["iosリンク"].rich_text.length
          ? obj.properties["iosリンク"].rich_text[0].plain_text
          : null,
        web: obj.properties["webリンク"].rich_text.length
          ? obj.properties["webリンク"].rich_text[0].plain_text
          : null
      }));
      res.json({
        message: results
      });
    }
  })().catch(next);
});

module.exports = app;
