FROM nginx:1.15.2-alpine
COPY ./build /var/www
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 3000
ENTRYPOINT ["nginx","-g","daemon off;"]