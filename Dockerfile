FROM node:16.15

# Set timezone to Europe/Helsinki
RUN echo "Europe/Helsinki" > /etc/timezone
RUN dpkg-reconfigure -f noninteractive tzdata

ARG BASE_PATH
ENV BASE_PATH=$BASE_PATH

# Setup
WORKDIR /usr/src/app
COPY . .

RUN npm ci --only=production

RUN npm run build

CMD ["npm", "run", "start"]