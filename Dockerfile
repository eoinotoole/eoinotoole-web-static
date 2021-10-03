FROM nginx
COPY ./config/nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
# ADD copies contents of dist folder
ADD dist .