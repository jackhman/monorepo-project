@echo off

REM 推送到 Gitee
cd /d D:\Wrok Project\green-gis
git push gitee zhao.liu-vue3:dev

set retry_count=0

:retry
REM 推送到 GitHub
git push github zhao.liu-vue3:dev

REM 检查是否推送到 GitHub 成功
if %errorlevel% neq 0 (
    set /a retry_count+=1
    echo 重试次数: %retry_count%
    if %retry_count% lss 10 goto retry
    echo 达到最大重试次数。退出。
    exit /b %errorlevel%
)

