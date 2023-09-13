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


## 追記 2023/07/31

## Pythonのバージョンを切り替える方法
`pyenv`というPythonのバージョン管理ツールを使用する
### pyenvをインストールする
1. powershellを起動し、以下のコマンドを実行する
2. `Invoke-WebRequest -UseBasicParsing -Uri "https://raw.githubusercontent.com/pyenv-win/pyenv-win/master/pyenv-win/install-pyenv-win.ps1" -OutFile "./install-pyenv-win.ps1"; &”./install-pyenv-win.ps1"`
3. インストールが完了したら以下のようにコマンドを実行して環境変数を行う
    1. `[System.Environment]::SetEnvironmentVariable('PYENV',$env:USERPROFILE + "\.pyenv\pyenv-win\","User")` → (環境変数に[PYENVを追加する])

    2. `[System.Environment]::SetEnvironmentVariable('PYENV_HOME',$env:USERPROFILE + “\.pyenv\pyenv-win\","User")` → (環境変数に[PYENV_HOMEを追加する])

    3. `[System.Environment]::SetEnvironmentVariable('path', $env:USERPROFILE + "\.pyenv\pyenv-win\bin;" + $env:USERPROFILE + "\.pyenv\pyenv-win\shims;" + [System.Environment]::GetEnvironmentVariable('path', "User"),"User")` → (環境変数pathにpyenvを追加する)

<span style="color: red;">※環境変数設定後、PowerShellまたはコマンドプロンプトを再起動する必要がある</span>

### pyenvで任意バージョンのPythonをインストールする
1. インストール可能なPythonバージョンを調べ、インストールする
   1. `pyenv install --list`
   2. `pyenv install 【任意のバージョン】`

### 特定のディレクトリのみで使用するPythonバージョンを設定する方法
1. `cd <ディレクトリ名>`
2. `pyenv local 【インストール済みのバージョン】`

## Djangoの3.1.3バージョンを指定してインストール
`pip install django==3.1.3` 

※表示メッセジーの最終行に「Successfully installed django-3.1.3」と表示されていれば成功

　
## 追記2023/09/11
テスト

## 追記2023/09/13
テスト２