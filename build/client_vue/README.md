## 启动容器

```bash
docker run -v /Users/zhusiqing/code/docker/share/dockerTemplate/build/client_vue:/usr/app node:14.17.5 /usr/app/build.sh

```
> build.sh权限问题，要改为可执行 ```chmod 755 build.sh```

## 使用前面生成的容器再次构建

```bash
docker ps -a

docker restart <id>
```

## 销毁使用过的容器

```bash
docker ps -a

docker rm <id>
```

## 删除全部容器

```bash
docker container prune
```
