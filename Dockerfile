# build environment
FROM node:16-alpine as build
WORKDIR /app

ARG REACT_APP_PUBLIC_URL
ARG REACT_APP_API_HOST
ARG REACT_APP_API_PORT
ARG REACT_APP_AUTH_URL
ARG REACT_APP_IDENTITY_CLIENT_ID
ARG REACT_APP_REDIRECT_URL
ARG REACT_APP_SILENT_REDIRECT_URL
ARG REACT_APP_LOGOFF_REDIRECT_URL

ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json

RUN npm install -g npm@8.6.0
RUN npm config set legacy-peer-deps true
RUN npm install
RUN npm install react-scripts@5.0.0 -g 
COPY . /app
ENV REACT_APP_PUBLIC_URL $REACT_APP_PUBLIC_URL
ENV REACT_APP_API_PORT $REACT_APP_API_PORT
ENV REACT_APP_API_HOST $REACT_APP_API_HOST
ENV REACT_APP_AUTH_URL $REACT_APP_AUTH_URL
ENV REACT_APP_IDENTITY_CLIENT_ID $REACT_APP_IDENTITY_CLIENT_ID
ENV REACT_APP_REDIRECT_URL $REACT_APP_REDIRECT_URL
ENV REACT_APP_SILENT_REDIRECT_URL $REACT_APP_SILENT_REDIRECT_URL
ENV REACT_APP_LOGOFF_REDIRECT_URL $REACT_APP_LOGOFF_REDIRECT_URL

RUN npm run build

# production environment
FROM nginx
COPY --from=build /app/build /var/www
RUN mkdir -p /etc/nginx/ssl/private/ && mkdir -p /etc/nginx/ssl/cert/
RUN openssl req -x509 -new -newkey rsa:4096 -sha256 -days 3650 -nodes  -keyout /etc/nginx/ssl/private/cert.key -out /etc/nginx/ssl/cert/cert.crt -subj "/CN=localhost" -addext "subjectAltName=DNS:localhost,IP:10.21.0.126"
COPY nginx.conf /etc/nginx/nginx.conf
#EXPOSE 3000
ENTRYPOINT ["nginx","-g","daemon off;"]