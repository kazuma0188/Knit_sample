## 開発環境
フレームワーク：Django
バージョン：3.1.3

実行環境：Pyhton
バージョン：3.8.10

Djangoの動作には、Pythonが必須。DjangoのバージョンとPythonの対応表は以下の通り

>Django 1.11 → Python 2.7、3.4、3.5、3.6、3.7

>Django 2.2 → Python 3.5、3.6、3.7、3.8

>Django 3.0 → Python 3.6、3.7、3.8

>Django 4.0 → Python 3.8、3.9、3.10

>Django 4.1 → Python 3.8、3.9、3.10、3.11

## PythonでDjango使えるか確認
`python -m django --version`

バージョンが表示されたらインストール済み。
インストールされていないなら djangoをインストールする

***** インストール方法 *****

[公式サイト](https://docs.djangoproject.com/ja/4.2/intro/install/)を参考にする

## djangoのアプリディレクトリを作成する
1. powershellを起動する
2. `mkdir [プロジェクトディレクトリ名]` //プロジェクトディレクトリを作成する
3. ` cd [プロジェクトディレクトリ名] `
4. `django-admin startproject [アプリディレクトリ名] .`

## アプリに機能をつけたい場合
1. `cd [プロジェクトディレクトリ名]`
2. `python manage.py startapp [ディレクトリ名]` // [ディレクトリ名] = [機能名]

## サーバーを起動する
1. `cd [プロジェクトディレクトリ]`
2. `python manage.py runserver`
3. `http://127.0.0.1:8000/`にアクセスし、djangoのWebサイト出てきたら成功

*サーバ起動時にコマンドラインに表示される`You have 13 unapplied...`というmigrationsに関するエラーを消すには**サーバを終了してから`python manage.py migrate`** で消す*

aaaaa
