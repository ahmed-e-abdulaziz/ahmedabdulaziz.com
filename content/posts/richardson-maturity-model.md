---
title: Richardson Maturity Model
subtitle: How mature is your REST API? RMM answers that!
category:
  - REST
author: Ahmed Abdul-Aziz
date: 2021-02-18T06:45:56.800Z
featureImage: /uploads/richardson-maturity-model-hero.jpg
---

## Are you RESTful?

So, right now everyone and their mother is creating REST APIs. However, are all REST APIs created as equals?
As I said in my [rest fundamentals article](https://ahmedabdulaziz.com/rest-fundamentals), **Roy Fielding** the creator of REST [is *getting frustrated by the number of people calling any HTTP-based interface a REST API*](https://roy.gbiv.com/untangled/2008/rest-apis-must-be-hypertext-driven).
Nonetheless, a black or white scale for whether an API is RESTful can be misleading. Thus, **Leonard Richardson** designed a way to define how much an API conforms to the RESTful standards, therefore creating the Richardson Maturity Model or RMM.

## RMM

RMM aims to describe a specific grade for how much an API conforms to the RESTful standards. Maturity here means conformity to RESTful standards.
It has 4 levels of maturity levels from level 0 to level 3.

The great thing is that it doesn't shun away from any API that is not fully RESTful plus it has some specific measurements that will allow engineers to easily assess how scalable by RESTful standards are their endpoints and what can be improved to reach a higher level.

![RMM Hierarchy](/uploads/RMM.png)

## Level 0 (Swamp of POX)

In this level, a single URI can serve multiple resources and actions, HTTP verbs are not used correctly (mostly only POST is used).

For example, you can have a URI that looks like this `/usersManagement` which will serve to query, update, delete and create users using only `POST` HTTP verb. To differentiate between the various obscure actions that endpoint can do at this level, the body of the request will have to have the specific requirements of the request.

This level is not considered RESTful by RMM and it mostly exists in the SOAP Web Services world where XML is used extensively. That's why it's called the Swamp of POX as POX means Plain Old XML and the level of coupling and obscurity of the endpoints in this level led to it being called a Swamp.

I have experienced integrating with SOAP services and let me tell you that this level is very bad and leads to a lot of confusion and mistakes.

## Level 1 (Resources)

At level 1, we will use different URIs for different resources but still with only using one HTTP verb (generally `POST` as well), leading to better decoupling in the API.

So using the previous example, instead of having one `/usersManagement` endpoint, we will have `/usersCreate`, `/usersUpdate`, `/usersDelete` and `/usersQuery` while using only `POST` HTTP verb for all of them, we won't be using the body to define the action, though.

Although, this is much better than the previous level. This is still not considered RESTful enough by RMM. I have worked at the start of my career on a project that had an API that would mostly reside in this level and it was extremely cumbersome to keep creating and integrating with APIs like this. Furthermore, the whole suffix I used in this example is not standardized, it was basically whatever the developer would think is correct, which of course would differ wildly per developer.

For example, someone would query users with `/usersQuery` but for address querying the endpoint would be `/addressRetrieval` and someone else would retrieve departments using `/getDepartments` leading to an extremely fragmented API.

## Level 2 (HTTP Verbs)

Here we are at a level that is considered RESTful by a lot of RMM advocates. However, Roy Fielding doesn't consider it RESTful enough. I side with the opinion that this level is RESTful and can provide the requirements of a RESTful API.

Anyway, now we will put HTTP verbs to actual use. Let's use the previous example, now the users will have the following endpoint `/users`. Then to retrieve users we will create a request with `GET` HTTP verb to the users endpoint. To delete a user we will use `DELETE` HTTP verb in the request to indicate the action we want to take. To update you can use `PUT` or `PATCH`. We can use `GET`, `POST`, `PUT`, `DELETE`, and more for other endpoints like that of address or departments and so on.

The majority of Web APIs never pass this level and generally we that's not a bad thing, this level can provide almost all of RESTful requirements and the only thing it is lacking is a self-descriptive API, where the client doesn't need to be provided beforehand with how to do different actions on the resource it retrieves. Thus it will require documentation too to define the required endpoints to do various actions on the retrieved entity.

## Level 3 (HATEOAS)

Finally, we arrive at the last level here, in this level the HATEOAS principles are used.
When we get the users from `/users` endpoint with `GET` HTTP verb the response for getting a user would look like the following:

```json
[
  {
    "id": 1,
    "name": "Ahmed Ehab Abdulaziz",
    "email": "ahmed.ehab5010@gmail.com",
    "links": {
      "self": {
        "href": "https://ahmedehab.com/user/1"
      },
      "update": {
        "href": "https://ahmedehab.com/user/1"
      },
      "delete": {
        "href": "https://ahmedehab.com/user/1"
      },
      "report": {
        "href": "https://ahmedehab.com/user/1/report/default"
      },
      "tax-report": {
        "href": "https://ahmedehab.com/user/1/report/tax"
      }
    }
  }
]
```

As you can see, we don't need to have the update, delete, report or tax-report actions to be hardcoded in our code.
When we get the users array, we will be getting the API to do the various actions with the endpoint per user through the response as in the example.

I don't want to go over HATEOAS a lot as it deserves its article so you can find more about it in [my article here](https://ahmedehab.com/hateoas).

Lastly, this level is of course considered to be RESTful by everyone including **Roy Fielding**, [who consider it as a prerequisite to having a RESTful API](https://roy.gbiv.com/untangled/2008/rest-apis-must-be-hypertext-driven).

## Which level should I develop for?

**Level 0 and 1** are still in use today and a lot of web applications are being developed with only Level 0 or 1. However, I would say for almost every greenfield web API today, at least **level 2** should be followed, regardless of calling it a RESTful API or not, it leads to a cleaner API and it is not putting overhead on the developers or the API architect.

As for level 3, I believe you need to consider the bandwidth of the users. Also, the main purpose of HATEOAS is to deal with changes in the API easily, for internal applications this has never been an issue and generally, the new APIs are adapted to the old APIs, the other way around is much harder to happen for this type of projects. Besides, I have seen that a lot of developers don't really understand or even know what HATEOAS is, so some training might be required to onboard them.
However for SaaS-based projects or other projects with an external API that's exposed to a plethora of different systems, HATEOAS and Level 3 can be of immense practicality, you can easily swap out old APIs with new APIs without having to change a line of code in the integrating services.

P.S. You should totally read **Roy Fielding** article that mentions that REST APIs must be hypertext, the discussions there are extremely interesting. You can visit it from [here](https://roy.gbiv.com/untangled/2008/rest-apis-must-be-hypertext-driven).
