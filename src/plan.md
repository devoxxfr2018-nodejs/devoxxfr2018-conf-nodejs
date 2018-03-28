* NodeJS pour les devs Java
	* 0. Intro
		* Strory départ SG, le t-shirt
		* Les réticences
			* c'est lent le JS
			* Un thread, c'est lent
			* Le js un language de merde
			* Je peux tout faire en java
		* Contexte FLUO
		* JS bashing
			* tweets
			* good parts / bad parts
	* 1. NodeJS getting started
		* NodeJS est de plus en plus populaire et répandu
			* NodeJS fondation
			* Netflix, java et Nodejs
			* AirBNB, Uber, la Nasa...
		* La doc de référence, les APIS
        * Un serveur, un proxy, en 5 minutes
	* 2. NodeJS under the cover
		* NodeJS, qualités intrinsèques
			* Pourquoi ça s'appel NodeJS
				* Clustering built in
				* hot deploy
				* pas de multithreading mais simple de forker/spawner
			* Ca démarre super vite
				* TODO bench startup
			* emprunte mémoire
				* TODO mesurer
			* Faire une brique réseau c'est super simple
				* Exemple statsd
		* L'architecture NodeJS, eventloop, event queue
			* todo schema
			* autre technos event loop
				* nginx
				* redis
				* lmax disruptor
    * 3. Le JS c'est si pourri que ça ?
		* Ce qui ressemble à Java (avec Typescript)
		* Ce qui ne ressemble pas, ou plutot ce qui ressemble à Kotlin
	* 4. l'écosysteme
		* env de dev
			* npm, npx et yarn
			* prettier
			* sonarqube
		* fwk web
			* nest, koa, ...
		* prod ready?
			* serverless
			* docker
			* paas
			* instrumentation
		* react
			* SSR
			* react native
		* integration
			* DB
			* RabbitMQ
			* Redis, Hazelcast
			* Node-gypt
			* graphql
    * 5. Conclusion
		* Sandro, la techno c'est juste un outil
		* Pas de silver bullet
		* ouverture d'esprit


    * Les bonnes raisons
			* A disséminer pendant la prez mais ne constituent pas forcément des chapitres
				* Simplicité
				* Léger (performant)
				* écosystem riche et vivant
				* la promesse run anywhere, tenue avec le JS
				* Le JS avec Flow / TypesScript le meilleur des 2 mondes
	* ressources
		* [https://gi-no.github.io/kotlin-is-like-typescript/](https://gi-no.github.io/kotlin-is-like-typescript/)

== Répartition des slides restants par speaker ==

* Thierry
	* Intro: revoir l'intro Fluo (ajouter notamment logo). 1 slide max.
	* Ecosystem: 2 Slide driver db: DONE
	* logo db driver DONE
	* mysql perf DONE
	* 2/3 Slides js everywhere (Fluo): Build One Run Everywhere. React / React Native PENDING
	* js: async/await
* Alexandre
	* js: java springboot vs typescrypt
	* js: typage structurel
	* js: inference type (Java 10)
	* ecosystem: prettier, npx
	* node: statsd
  * Temps de démarrage de Node (lambda): voir article existant
