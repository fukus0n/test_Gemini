# Playwright セットアップ

## 1) 依存関係インストール
```bash
npm install
```

## 2) Chromium インストール
```bash
npm run pw:install
```

## 3) プレビュー画像生成
```bash
npm run preview:screenshot
```

成功すると `preview.png` が生成されます。

必要に応じて任意ファイルも指定できます。
```bash
node scripts/preview.js morimori.html /tmp/morimori_preview.png
```
