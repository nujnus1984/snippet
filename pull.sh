#!/bin/sh
git stash      #临时保存 当前未提交的或保存的
git pull origin master
git stash pop  #弹出之前未保存的内容

