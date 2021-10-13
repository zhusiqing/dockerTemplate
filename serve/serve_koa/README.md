## 根据Dockerfile构建镜像

```bash
docker build -t http:1.0.0 -f ./Dockerfile .
```

## 生成容器并运行

```bash
docker run -d -p 9900:5000 http
```

