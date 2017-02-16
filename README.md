
# / the_hack >

###### (a) In Development
Implementation of an SPA (single-page application) built for a bicycle cooperative at the University of Massachusetts Amherst and designed with ReactJS, NodeJS and the principles of Material Design.


###### (b.1) API
component | type | description
--- | --- | ---
&lt;Hozier/&gt; | img | renders author's image as subclassed Avatar
&lt;AppBarIcon/&gt; | navigation | renders app bar and application navigation
&lt;Fingerprint/&gt; | svg | renders a customized fingerprint to view
&lt;OctoCat/&gt; | svg | renders GitHub's OctoCat to view
&lt;App/&gt; | spa core | brings together the core rendering logic of the single-page app
&lt;HomePage/&gt; | spa core | implements the underlying media content for the homepage
&lt;MonologuesPage/&gt; | spa core | implemented as a template engine rendering to view blog content based on N rows retrieved from datastore
&lt;ProjectsPage/&gt; | spa core | implemented as a template engine rendering to view project content based on N rows retrieved from datastore
&lt;Playground/&gt; | spa util | leverages an internal component to render minimally styled, yet elegant components or text to view
&lt;lockerbox/&gt; | interface | defines an interface through which bulk imports can be made  

###### (b.2) API Footnotes
      spa core: a core component built to support the single-page application views
      spa util: a utility component built for extensive internal reuse within larger components of the single-page application  
      interface: handles the shortening of long imports by providing an intermediary space to define full paths. imports from this shared intermediary space are known as imports from the interface.

###### (c) Run
From the root directory, do:

`npm install`

`npm start`

###### (d) Open-source dependencies
###### < > with ♥ using NodeJS, ReactJS and Material-UI


###### Author: Philron Hozier
