# Datadog-Winston-Logger
Datadog winston transporter

Logging is a crucial aspect of application development and maintenance. It helps in monitoring, debugging, and understanding the behavior of our applications. In this tutorial, we will explore how to send logs from a Node.js application to Datadog, a popular cloud monitoring platform, using the Winston logging library. By integrating Winston with Datadog, we can gain valuable insights into our application's performance and troubleshoot issues effectively. Let's dive in and learn how to set up this powerful logging system. You can find medium post here : https://medium.com/@ddiscua/sending-logs-from-nodejs-to-datadog-using-winston-4c1f07874d8e

# How to Run

Use the following command to start the project

``` npm run dev ```

# Env configuration

Follow the .env-example file

- ENV=DEV
- DATADOG_ENABLED_LOGS:  To active the logs and send to DataDog
- APPLICATION_NAME: Name of your application
- DATADOG_API_KEY_DEV: Your application API KEY
- DATADOG_APP_KEY_DEV: Leave blank 

