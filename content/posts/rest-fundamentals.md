---
title: REST Fundamentals 
subtitle: The Why, What and How of REST
category:
  - REST
author: Ahmed Abdul-Aziz
date: 2021-02-18T06:45:56.800Z
featureImage: /uploads/rest-fundamentals-hero.jpg
---
REST has been a cornerstone of backend programming for quite a while now. However, a lot of developers seem to have a vague idea of what REST is or confuse it with HTTP. In this post, I will try to shed some light on what exactly constitutes REST and how it compares to HTTP.

## Why use REST?

REST enforces a good separation of concerns between clients and servers. The more our REST endpoints are mature the more we can evolve our client (frontend) or server (backend) with no issues with scalability or coupling.

## What is REST?

REST :
 stands for **RE**presentational **S**tate **T**ransfer, it was first defined by in the year 2000. It is specifically an architectural style to standardize the communication between web services and systems. To actually say we have REST web services we must follow the REST standards (i.e. become RESTful).

REST became wildly popular first as a replacement for SOAP protocols that required a lengthier set of requirements to be used. However, it must be noted that REST ***doesn't dictate what protocol is used to transfer data***. It focuses instead on the architecture of endpoints and how to name, thus it's considered a software architecture/pattern and not a protocol. Nonetheless, HTTP is actually recommended as the go-to protocol to be used to apply REST but you can apply it with other protocols like MQTT for example.

## How to apply REST

This is the part of REST that unfortunately is not fully understood or followed which leads to calling HTTP APIs REST APIs although REST was not followed correctly, just check **Roy T. Fielding** [article](https://roy.gbiv.com/untangled/2008/rest-apis-must-be-hypertext-driven) from 2008 where he rants about how he is *getting frustrated by the number of people calling any HTTP-based interface a REST API*.

I will go over each of the basic fundamentals in the following point that leads to an actual REST endpoint and not just a regular HTTP one.

### Client and Server Separation

In REST the client and server are separated, leading to less coupling between client and server. Thus we gain flexibility and a stateless server.

### Statelessness

REST advocates statelessness, which means that the server doesn't keep the state of the client. So the server doesn't keep track of the user's session. This leads to great scalability as any new instance of the server is not required to keep track of old sessions.

### Caching

If a request is following REST, the request must detail if it's cacheable or not. Applying caching to requests in client side and server side leads to a greatly reduced number of requests. Or even the elimination of requests altogether over a period of time.

### Layers

If a client is connecting to a server and a new layer is introduced (e.g. proxy/load balancer) this must not affect in any way how the client or the server behaves. So we can add proxies, load balancers, firewalls and, more without affecting the system's behavior.

### Uniform Interface

Having a uniform interface is a must in REST architectural style, this enables each part (client/server) to change side over time separately from each other. There are four rules to follow to fully have a uniform interface between clients and servers.

1. **Resource identification in requests**

    Resources (endpoints) should be identified in the request. Such as using URIs. For example for the users resource it should be stated in the HTTP URI that the users are what is required here like this  `https://example.com/users/`.

    The resource for the server side is separate from the representations that are returned to the client. So this user can be endpoint can actually be represented in the backend by a multitude of resources and entities but this is coupled from the client/frontend.

2. **Resource manipulation through representations**

    When a client receives a resource (with headers and other metadata) it has enough information to modify or delete the resource. So if the frontend retrieves users from `https://example.com/users/` it can follow a simple structure to be able to manipulate any user in the list without asking the backend how to request a type of this change.

    In HTTP-based REST endpoints, this is achieved by HTTP verbs such as GET to retrieve, POST to create a new resource, PUT to create/update a whole resource, PATCH to modify a part of a resource, DELETE to delete a resource, and so on. This is accompanied by other data that can help in this like for example returning each user ID.

3. **Self-descriptive messages**

    This means the response message should describe itself with no requirement to go back to the backend to retrieve the meaning of the message. If a file is returned in a binary format, for example, an attribute must be attached to explain the type of the file. If the response is in JSON an attribute must exist to explain it's in JSON.

    In HTTP-based REST APIs, `https://example.com/annual-report/` the response must have a media type header that explains that the returning blob is a pdf like this `Content-Type: application/pdf`.

    Also in HTTP, this means the response should have a status code that describes the state of this response whether it's an error or a success one. Like response 200 (OK) or 400 (BAD REQUEST).

4. **Hypermedia as the engine of application state (HATEOAS)**

   HATEOAS simply requires that when firstly requesting a URI for a REST endpoint, the response should include links provided by the backend to dynamically discover all available resources in the response.

   This leads to the client being completely coupled from the backend endpoints leading to more freedom in changing the backend structure and endpoints.

   ```json
    {
      "id": 1,
      "name": "Ahmed Abdulaziz",
      "email": "ahmed.ehab.abdulaziz@gmail.com",
      "_links": {
          "self": {
              "href": "https://ahmedabdulaziz.com/users/1"
          },
          "report": {
              "href": "https://ahmedabdulaziz.com/users/1/report"
          }
      }
    }
   ```

   HATEOES is a big topic and I might write in the future a post discussing it specifically, to keep this post short I won't be going into HATEOES right here.

## Richardson Maturity Model

This is a maturity model described by Leonard Richardson in 2008, it describes how much an application adheres to REST specifications and puts it in one of four levels.

This model is well suited to show us how much our endpoints are conforming to the REST architectural style, so it can state that our API is not a fully mature REST API but it can still be considered a REST endpoint, though. As with HATEOES earlier, this is a lengthy subject that I will probably write a post about it in the future but not right now to keep this post short.
