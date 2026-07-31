# jr-east-geojson

JR東日本の路線を運行形態別（快速・各駅停車・直通運転区間など）に分けたGeoJSONデータです。国土交通省などが公開しているGeoJSONは正式路線単位のものしかなく、運行形態別のデータが存在しなかったため作成しました。

## 使い方

`index.html` をブラウザで開くと、地図プレビューと路線一覧が表示され、各路線の GeoJSON ファイルをダウンロードできます。

```bash
npx serve .
```

## ファイル構成

- `geojson/` — 路線ごとのGeoJSONファイル。
- `railway-lines.json` — 路線データ。[nagix/mini-tokyo-3d](https://github.com/nagix/mini-tokyo-3d) より
- `index.html` — ダウンローダー

## ライセンス

MPL-2.0