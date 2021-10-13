# dockerTemplate
docker分享模板

用例存放一些示例

### Dockerfile

1. FROM 创建镜像
2. MAINTAINER 维护者信息
3. RUN 执行命令
4. CMD 容器启动时执行的命令，在用户未指定运行命令时生效
5. EXPOSE 容器暴露的端口
6. ENV 环境变量
7. ADD 复制文件，地址到容器中
8. COPY 复制文件到容器中
9. ENTRYPOINT 容器启动时执行的命令，不可被用户指定运行命令生效
10. VOLUME 挂载数据卷
11. USER 运行容器时的用户名
12. WORKDIR 工作目录，为后续命令提供相对地址
13. ONBUILD 当该镜像为其他镜像的依赖镜像时，执行

[docker中文文档](https://dockerdocs.cn/index.html)

[docker hub](https://hub.docker.com/)
