# Static site served by nginx. Build: docker build -t portfolio .  Run: docker run -p 8080:80 portfolio
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html styles.css script.js favicon.svg Harshvardhan-Kumbharkar-Resume.pdf /usr/share/nginx/html/
EXPOSE 80
