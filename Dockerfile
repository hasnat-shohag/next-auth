FROM node:18-alpine

WORKDIR /next-auth
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 80
CMD ["yarn", "dev"]