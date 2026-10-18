
I am describing my experience in the previous companies in great detail. 
Section 1: athenahealth

1. QR login: this is already there, so ignore this point
2. JSP to React: this point is also there. 
Rebranding: This is an extension to GSB to React, but other than the technical part, we took care of rebranding also. The old legacy design was a 25-plus-year-old design, and we were supposed to implement new styles. And this led to more user traction because the website, you can feel, was new. 
3. One repo can't have all the tabs. We decided to split the pages across different repos so that we can separate the frontend from the backend, not have one big chunky repo. For that, module federation was one option, but it wouldn't have worked because the backend was not going very well with the server-side rendering. We decided to do it with a gateway approach. A different gateway URL will redirect to a different app internally. That would be internal. There were some challenges at that. 
4. Now, for some services, we had legacy data across the main app. It was through XML and stuff. We had to migrate to APIs, so there was a Kafka queue already present. We need to make sure that that Kafka queue would be processed and it would be put into the document DB. That document DB will then be accessed by the APIs and the pages. The apps can read those APIs and get the data. 
5. As a recent thing, we are working on setting up the agent AI to make sure that the implementation and the code reviews are streamlined with, of course, a human-in-the-middle approach. 


Section 2: Cricbuzz

1. The search feature that helped a lot in getting user traction was developed. The frontend was developed end-to-end by me. 
2. This is not a user-level enhancement, but it's more like tech depth. Some of the data we needed to streamline, and we were migrating the APIs to Scala. 


Section 3: Minewhat

1. I extensively worked on converting the UI mockups to the final product. 
2. Initially, the codebase was using Backbone with Marionette and some jQuery as well, but we had to migrate to React to make it faster. There was at least a 20% reduction in the load time. 
Gulp to Webpack was another enhancement that also led to around 10% less code as compared to the Gulp setup. 


3. Choice AI - Choice AI was another product by MineWhat that involved putting our code into the customers' website. We would publish a snippet, and they could include the snippet in the website.

This is for the user-facing side. On top of their user analytics, we can annotate whatever is visible on the website and give the user more insights. This is an enhancement product that we provide. Technically, this was just in-browser code without any plugins because the code had to be light. 
And it had the features also for the user to select the theme color, select the color scheme, the logo, or another thing. When the user would submit it, that same would be reflected in the snippet that was included in the website. It would reflect that immediately. 
