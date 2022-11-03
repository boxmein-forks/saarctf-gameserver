FROM node:16 as builder
COPY . /app
WORKDIR /app
RUN npm install
RUN npm install -g @angular/cli@7.3.9
RUN  ng build --configuration production

FROM node:16 as develop
CMD ng serve --host 0.0.0.0

FROM nginx:1.23-alpine
ENV BACKEND_URL=http://gameserver-web
ADD nginx.conf.template /
RUN echo -e "#"'!'"/bin/sh\nenvsubst '\${BACKEND_URL}' < /nginx.conf.template > /etc/nginx/nginx.conf" > /docker-entrypoint.d/50-envsubst.sh && chmod +x /docker-entrypoint.d/50-envsubst.sh
COPY --from=builder /app/dist/scoreboard /usr/share/nginx/html

