# Creacion de build de react
FROM node:latest as react-build
WORKDIR /app
COPY . ./
ENV NODE_ENV production
RUN npm install
RUN npm run build

# Deploy en nginx
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]