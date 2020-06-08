# 设置基础镜像 
FROM nginx
# 定义作者
MAINTAINER song, pengcheng <smth_spc@hotmail.com>
# 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面
COPY dist/ /usr/share/nginx/html/