---
created: 2025-10-16T10:00:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SI-5 NI-ADP

> NI-SI-5 (NI-ADP)
> Architektonické vzory (MVC, MVP, MVVM, Client-Server, Microservices vs monolithic server, Asynchronous messaging, Blackboard architecture, Rule-based architecture, Publish-subscribe).

START
NI-SZZ

Co je **MVC** architektura?

Back:

**Model - View - Controller:**

- **Model** - stará se o data a byznys logiku aplikace
- **Controller** - zpracovává vstup uživatele a updatuje model
- **View** - zobrazuje data, typicky GUI nebo API

![](../../Assets/Pasted%20image%2020250130115027.png)

<!-- ExplanationStart -->

Nowadays it’s hard to find out, which implementation of this design pattern/architecture is correct because everyone all over the world is “bending” it to his/her needs. No matter what, the idea stays the same and that is [Separation of Concerns](https://courses.fit.cvut.cz/NI-ADP/materials/design-principles/soc.html), loose coupling and high cohesion, etc.

![](../../Assets/Pasted%20image%2020250130115054.png)

**Model**

Model handles business part of application. It verifies data if they doesn’t break any rule (if they are valid). Model contains main logic so if we make changes in GUI part of application, it won’t affect business logic hence it won’t break core functionality.

**Controller**

Controller’s responsibility is handling user input and updating **Model**.

This part of application is responsible for handling user’s input and updating model.

**View**

This layer contains displaying logic. Typically it’s GUI but it doesn’t have to be. It could be just some interface user can communicate with.

<!-- ExplanationEnd -->

END

---

START
NI-SZZ

Jaká je struktura **MVC** architektury? (2 možnosti)

Back:

**Možnost 1:**
**Controller** zavolá update na **View**, když byly provedeny změny v modelu.
![](../../Assets/Pasted%20image%2020250130115125.png)

**Možnost 2:**
**Model** zavolá update na **View**, když se změní. Toto používá typicky Observer pattern, kdy View observuje změny v Modelu.
![](../../Assets/Pasted%20image%2020250130115146.png)

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **MVC** architektury? (3 + 1)

Back:

✅ Application is structured, so it is easier to read and maintain code.

✅ Business logic is separated from view logic. That allows us to change view logic without interfering/breaking core logic of application.

✅ We can have multiple **Views** for one **Model** and **Controller**.

❌ Tight coupling of **View** and **Controller**. That makes testing harder.

END

---

START
NI-SZZ

Co je **MVP** architektura?

Back:

**Model - View - Presenter**:

- **Model** - stará se o data a byznys logiku aplikace
- **Presenter** - prostředník mezi View a Modelem
- **View** - volá funkce z presentera, je velice jednoduchý

The typical interactions taking place in MVP architecture can be understood through the following:
![](../../Assets/Pasted%20image%2020250130115225.png)

<!-- ExplanationStart -->

**Model**
The model is an interface defining the data to be displayed or otherwise acted upon in the user interface. Model is the data layer which is responsible for handling the business logic and for the communication with the network and database layers. Model’s responsibilities include using APIs, caching data, managing databases and so on.

**Presenter**
The Presenter is responsible to act as the middleman between View and Model. It retrieves data from the Model and returns it formatted to the View. But unlike the typical MVC, it also decides what happens when you interact with the View. Due to this, the view and presenter work closely together, they need to have a reference to one another. Thus, the relationship between the Presenter and its corresponding View is defined in an interface. The Presenter is also decoupled directly from the View and talks to it through this interface. This is to allow mocking of the View and Presenter in a unit test.

**View**
The only thing that the view will do is to call a method from the Presenter every time there is an interface action. It is only responsible for presenting data in a way decided by the presenter. The functionality of view is typically reduced to a minimum such as simple validation, and it’s made as a passive component, by moving the business logic to the presenter. The view is also shielded from the model by delegating all the interaction to happen through the middleman presenter.

<!-- ExplanationEnd -->

END

---

START
NI-SZZ

Jaké jsou výhody **MVP** architektury? (3)

Back:

- **Lepší seperation of concerns**
- **Modularita** - můžu prohazovat různé implementace view
- **Lehčí testování** - tím, že jsou jasně definované meze mezi komponenty, můžu je jednoduše mockovat a testovat

![](../../Assets/Pasted%20image%2020250130115309.png)
![](../../Assets/Pasted%20image%2020250130115313.png)

END

---

START
NI-SZZ

K čemu slouží **MVVM** architektura?

Back:

**Model - View - ViewModel**:

- **Model** - byznys logika a data
- **ViewModel** - něco jako presenter, ale neví nic o view, jen poskytuje data. View může subscribnout do ViewModelu, aby vědělo, kdy se data updatnula
- **View** - zobrazuje data, sám se přerenderovává

Oproti MVP je View "chytřejší" protože se samo updatuje a observuje změny v ViewModelu.

![](../../Assets/Pasted%20image%2020250130115455.png)

END

---

START
NI-SZZ

Jaká je struktura **MVVM** architektury?

Back:

For these regular updates are usually used:

- Reactive programming
- Data Binding

![](../../Assets/Pasted%20image%2020250130115516.png)

<!-- ExampleStart -->

This is example of **MVVM** how it is used in android programming.
![](../../Assets/Pasted%20image%2020250130115556.png)

<!-- ExampleEnd -->

END

---

START
NI-SZZ

K čemu slouží **Client-server** architektura?

Back:

In client-server architecture, the client and the server are typically connected over a network, such as the internet. The client initiates a request to the server, which can be a request for data or a request to perform an action. The server receives the request, processes it, and sends back a response.

![](../../Assets/Pasted%20image%2020250130115951.png)

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Client-server** architektury? (2 + 1)

Back:

**Výhody**:
There are several benefits to using client-server architecture. One benefit is that it allows for a separation of concerns, with the client responsible for the user interface and the server responsible for the business logic and data storage. This makes it easier to develop and maintain the application, as changes to one side of the application do not affect the other.

Another benefit is that it allows for scalability. If the server is designed to handle multiple clients concurrently, it can handle an increased load by adding more hardware or by distributing the load across multiple servers.

**Nevýhody:**
There are also some challenges to using client-server architecture. One challenge is that it requires a network connection between the client and the server, which can introduce latency and other issues. Another challenge is that the server may be a single point of failure, meaning that if the server goes down, the entire application may become unavailable.

END

---

START
NI-SZZ

Kdy se používá **Client-Server architektura**? (4)

Back:

- **Web Applications**: Most modern web applications use client-server architecture. In this case, the client is typically a web browser, and the server is a web server that serves up HTML, CSS, and JavaScript to the client. The client sends requests to the server to retrieve data or perform actions, and the server responds with the appropriate data or result.
- **Desktop Applications**: In this case, the client is the desktop application running on the user’s computer, and the server is a remote server that stores data and performs backend tasks. The desktop application sends requests to the server to retrieve data or perform actions, and the server responds with the appropriate data or result.
- **Mobile Apps**: Same as desktop applications, only the client is the mobile app running on the user’s device.
- **Online Games**: Online games often use client-server architecture to support multiplayer gameplay. In this case, the client is the game running on the user’s device, and the server is a game server that manages the game world and handles communication between players.

END

---

START
NI-SZZ

K čemu slouží **Asynchronous messaging** architektura?

Back:

A layer that allows heterogenous components to asynchronously communicate despite their differences

- Usually realized by a Message-oriented middleware (MOM)
- A message is an item of data that is sent to a specific destination
- A message-driven system concentrates on addressable recipients

Tight coupling with Publish-subscribe architecture

![](../../Assets/Pasted%20image%2020250130124045.png)

<!-- ExampleStart -->

- **Java Messaging Service (JMS)**
  - Standard messaging API for JAVA platform
  - Interoperability is only within Java and JVM languages like Scala, Groovy
  - Does not worry about wire level protocol
  - Supports messaging models with queues and topics
  - Supports transactions
  - Defines the message format (headers, properties and body)
- **.Net Messaging Service**
  - MS alternative to support their platform and programming languages

![](../../Assets/Pasted%20image%2020250130124107.png)

<!-- ExampleEnd -->

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Asynchronous messaging** architektury? (3 + 2)

Back:

**Pros**

- ability to store (buffer), route, or transform messages while conveying them from senders to receivers
- by adding an administrative interface, you can monitor and tune performance => the messaging system, not components, resolves issues like interoperability, reliability, security, scalability and performance
- messages storing solves intermittent connectivity and sender/receiver failure problems

**Cons**

- Bus/Broker maintenance
- Many inter-application communications have an intrinsically synchronous aspect => a need for facilities to group a request and a response as a single pseudo-synchronous transaction

END

---

START
NI-SZZ

K čemu slouží **Blackboard architecture**?

Back:

How to design a system that integrates large and diverse specialized modules, and implements complex, non-deterministic control strategy.

- Blackboard
  - a structured global memory containing objects from the solution space
- Knowledge sources (agents)
  - specialized modules with their own representation
- Control component
  - selects, configures and executes modules

<!-- ExampleStart -->

- Useful for problems for which NO deterministic solution strategies are known
- Several specialised sub-systems assemble their knowledge to build a possibly partial or approximate solution
- Domains:
  - speech recognition
  - OCR
  - protein structure identification
  - sonar signals interpretation

**StackOverflow**
_StackOverflow is pretty much a Blackboard system, with developers as agents, sharing their expert knowledge about the undetermined problems set on the board._

**Speech recognition**

- Procedures (knowledge sources)
  - A procedure divides the waveform into segments (phones)
  - Another procedure checks the syntax of candidate phrases
  - …
- There is no consistent algorithm that combines all the necessary procedures for recognising speech
- Problem = ambiguities of spoken language: - noisy data - peculiarities of speakers - vocabulary - pronunciation - syntax
  ![](../../Assets/Pasted%20image%2020250130124453.png)

<!-- ExampleEnd -->

END

---

START
NI-SZZ

Používá se **Blackboard architecture**?

Back:

Ne, už se to nepoužívá, protože to bylo špatně škálovatelné na tehdejších počítačích.

<!-- DetailInfoStart -->

- solution for designing and implementing complex systems where heterogeneous modules have to be dynamically combined to solve a complex problem
- offers non-functional properties such as: reusability, changeability, robustness.
- allows multiple agents to work closer together on separate threads, polling and reacting when necessary
- The pattern was abandoned in past because: - Did not scale well to real problems on the available computers of the time - Most problems using blackboards are inherently NP-hard, so resist tractable solution by any algorithm in the large size limit - Blackboard was outperformed by statistical pattern recognition techniques, most notably by simple Hidden Markov Models
  <!-- DetailInfoEnd -->
END

---

START
NI-SZZ

K čemu slouží **Rule-based architecture** architektura?

Back:

Rule-based architectures provide a means of codifying the problem-solving knowhow of human experts.

- The basic features of a rule-based architecture are essentially the features of a table-driven interpreter:
  - The pseudo-code to be executed, in this case the knowledge base
  - The interpretation engine, in this case the rule interpreter, the heart of the inference engine
  - The control state of the interpretation engine, in this case the rule and data element selector
  - The current state of the program running on the virtual machine, in this case the working memory.

![](../../Assets/Pasted%20image%2020250130124714.png)

<!-- ExampleStart -->

**Biochemical models of living organisms**

- Groups of mutually corresponding substances are subject to mutually corresponding interactions.
- BioNetGen, a widely used tool for rule-based modeling of biochemical reactions. It includes a language to describe chemical substances, including the states they can assume and the bindings they can undergo. These rules can be used to create a reaction model or to perform computer simulations directly on the rule set.
- The biochemical modeling framework Virtual Cell includes a BioNetGen interpreter.

![](../../Assets/Pasted%20image%2020250130124758.png)

<!-- ExampleEnd -->

END

---

START
NI-SZZ

Jaká je struktura **Rule-based architecture** architektury?

Back:

- Knowledge is stored as rules in the rule-base (also known as the knowledge base).
  - Rules are of the form: `IF condition THEN action`.
- The condition tests working memory, e.g. for the presence of certain symbols or patterns of symbols.
  - conditions are expressed logically as conjunctions (occasionally, disjunctions) of predicates, in some systems, some conditions correspond to sensor data
- The action can be a change in working memory or an external operation supported by the interpreter.
- Interpreter performs the **match-resolve-act** cycle: - **Match**: In this first phase, the left-hand sides of all rules are matched against the contents of working memory. As a result a conflict set is obtained, which consists of instantiations of all satisfied rules. - An instantiation of a rule is an ordered list of working megnory elements that satisfies the left-hand side of the production. - **Conflict-Resolution**: In this second phase, one of the rule instantiations in the conflict set is chosen for execution. If no rules are satisfied, the interpreter halts. - **Act**: In this third phase, the actions of the rule selected in the conflict-resolution phase are executed. These actions may change the contents o% working memory. At the end of this phase, execution returns to the first phase.

END

---

START
NI-SZZ

K čemu slouží **Publish-subscribe** architektura?

Back:

- **Publisher** - odesílá zprávy určitého typu
- **Middleware** - má u sebe seznam subscribers a rozesílá zprávy podle typu
- **Subscriber** - může se u middlewaru zaregistrovat tak, aby přijímal určité typy zpráv

![](../../Assets/Pasted%20image%2020250130124958.png)

END

---

START
NI-SZZ

Jaké jsou 2 topologie **Publish-subscribe** architektury?

Back:

**Bus/Broker**

- publishers odesílají zprávy do message brokeru nebo event busu
- subscribers se zaregistrují v daném brokeru
- broker provádí filtraci a routing zpráv (příp. prioritizaci)

**Data Distribution Service (DDS)**

- Každý publisher a subscriber o sobě sdílí meta-data přes IP multicast (tzn. všichni o sobě vědí), tyto informace si každý publisher/subscriber cachuje
- Podle meta-dat publisher rovnou posílá informace subscriberovi

END

---

START
NI-SZZ

Jaká je struktura **Publish-subscribe** architektury? (todo smazat tuhle kartičku)

Back:

**Filtering forms**

- Topic-based
  - Messages are published to “topics” or named logical channels. The publisher is responsible for defining that.
  - Subscribers receive all messages published to the topics to which they subscribe.
  - All subscribers to a topic will receive the same messages.
- Content-based
  - Messages are only delivered to a subscriber if the attributes or content of those messages match constraints defined by the subscriber.
  - The subscriber is responsible for classifying the messages.
- Hybrid
  - Some systems support a hybrid of the two; publishers post messages to a topic while subscribers register content-based subscriptions. to one or more topics.

**Registration time**

- Build time
  - For example: in GUI systems, subscribers can be coded to handle user commands (e.g., click of a button)
- Initialization time
  - For example: there are frameworks and software products using XML configuration files to register subscribers during system initialization
- Runtime - For example: database triggers, mailing lists, and RSS

END

---

START
NI-SZZ

Jaké jsou nevýhody **publish-subscribe** architektury? (2)

Back:

- **Message delivery issues**
  - Publishing recipes by subscribers
- **Limited maximum scalability of a pub/sub network** - Load surges: periods when subscriber requests saturate network throughput followed by periods of low message volume (underutilized network bandwidth) - Slowdowns: as more and more applications use the system (even if they are communicating on separate pub/sub channels) the message volume flow to an individual subscriber will slow

END

---
