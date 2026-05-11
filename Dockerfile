FROM node:18

WORKDIR /app
COPY app/ .

RUN npm install

ENV PORT=3000
ENV VERSION=v1
ENV DATA_SOURCE=staging

EXPOSE 3000

CMD ["npm", "start"]
