## Branch *go-backend* is the most up-to-date version of this project.

This project is a web app for managing SMS updates to changes in cryptocurrency prices. *To run this project locally, you must also run the backend server.*
The most updated server is written using golang. It can be found here https://github.com/jgpasch/crypto-go.

In the app, you create subscriptions to different cryptocurrencies, on which you set the percent of change upon which you wish to be notified for each currency.

You can also set a minimum value, and maximum value for each currency, that will make an SMS message be sent out if the currency reaches either the high or the low.

The backend for this project, one version in golang and another in node, are really tailored for personal use, as you need to have a nexmo account with funds, in order
for SMS messages to be sent out. Please see the backend github page in order to see how to change the details for your personal nexmo account. https://github.com/jgpasch/crypto-go

Steps to run:

### 1. Clone project
### 2. npm install
### 3. make sure that the port in */src/app/config/server.ts* matches the port that you set for the golang backend server. Find link above.
### 4. ng serve

