---
created: 2025-10-16T10:00:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SI-4 NI-ADP

> NI-SI-4 (NI-ADP)
> Vzory pro chování objektů (Chain of Responsibility, Command, Interpreter, Iterator, Mediator, Memento, Observer, State, Strategy, Template method, Visitor).

START
NI-SZZ

Jaké jsou **vzory pro chování objektů**? (11)

Back:

- **Command**
- **Chain of Responsibility**
- **Interpreter**
- **Iterator**
- **Mediator**
- **Memento**
- **Observer**
- **State**
- **Strategy**
- **Template Method**
- **Visitor**

END

---

### Command

START
FIT-Card

K čemu slouží **Command** design pattern?

Back:

Pro nějakou akci/request/příkaz vytvoří samostatnou třídu, která obsahuje relevantní informace o dané akci. Díky tomu je možné akce například dávat do fronty, lze je ukládat a předávat si je v rámci programu.

![](../../Assets/Pasted%20image%2020250130111117.png)

<!-- ExplanationStart -->

**PROBLEM:**
Imagine that you’re working on a new text-editor app. Your current task is to create a toolbar with a bunch of buttons for various operations of the editor. You created a very neat `Button` class that can be used for buttons on the toolbar, as well as for generic buttons in various dialogs.

![](../../Assets/Pasted%20image%2020250130111134.png)

While all of these buttons look similar, they’re all supposed to do different things. Where would you put the code for the various click handlers of these buttons? The simplest solution is to create tons of subclasses for each place where the button is used. These subclasses would contain the code that would have to be executed on a button click.

![](../../Assets/Pasted%20image%2020250130111140.png)

Before long, you realize that this approach is deeply flawed. First, you have an enormous number of subclasses, and that would be okay if you weren’t risking breaking the code in these subclasses each time you modify the base `Button` class. Put simply, your GUI code has become awkwardly dependent on the volatile code of the business logic.

![](../../Assets/Pasted%20image%2020250130111144.png)

And here’s the ugliest part. Some operations, such as copying/pasting text, would need to be invoked from multiple places. For example, a user could click a small “Copy” button on the toolbar, or copy something via the context menu, or just hit `Ctrl+C` on the keyboard.

Initially, when our app only had the toolbar, it was okay to place the implementation of various operations into the button subclasses. In other words, having the code for copying text inside the `CopyButton` subclass was fine. But then, when you implement context menus, shortcuts, and other stuff, you have to either duplicate the operation’s code in many classes or make menus dependent on buttons, which is an even worse option.

**SOLUTION:**
Good software design is often based on the *principle of separation of concerns*, which usually results in breaking an app into layers. The most common example: a layer for the graphical user interface and another layer for the business logic. The GUI layer is responsible for rendering a beautiful picture on the screen, capturing any input and showing results of what the user and the app are doing. However, when it comes to doing something important, like calculating the trajectory of the moon or composing an annual report, the GUI layer delegates the work to the underlying layer of business logic.

In the code it might look like this: a GUI object calls a method of a business logic object, passing it some arguments. This process is usually described as one object sending another a *request*.

![](../../Assets/Pasted%20image%2020250130111158.png)

The Command pattern suggests that GUI objects shouldn’t send these requests directly. Instead, you should extract all of the request details, such as the object being called, the name of the method and the list of arguments into a separate _ command_ class with a single method that triggers this request.

Command objects serve as links between various GUI and business logic objects. From now on, the GUI object doesn’t need to know what business logic object will receive the request and how it’ll be processed. The GUI object just triggers the command, which handles all the details.

![](../../Assets/Pasted%20image%2020250130111202.png)

The next step is to make your commands implement the same interface. Usually it has just a single execution method that takes no parameters. This interface lets you use various commands with the same request sender, without coupling it to concrete classes of commands. As a bonus, now you can switch command objects linked to the sender, effectively changing the sender’s behavior at runtime.

You might have noticed one missing piece of the puzzle, which is the request parameters. A GUI object might have supplied the business-layer object with some parameters. Since the command execution method doesn’t have any parameters, how would we pass the request details to the receiver? It turns out the command should be either pre-configured with this data, or capable of getting it on its own.

![](../../Assets/Pasted%20image%2020250130111207.png)

Let’s get back to our text editor. After we apply the Command pattern, we no longer need all those button subclasses to implement various click behaviors. It’s enough to put a single field into the base `Button` class that stores a reference to a command object and make the button execute that command on a click.

You’ll implement a bunch of command classes for every possible operation and link them with particular buttons, depending on the buttons’ intended behavior.

Other GUI elements, such as menus, shortcuts or entire dialogs, can be implemented in the same way. They’ll be linked to a command which gets executed when a user interacts with the GUI element. As you’ve probably guessed by now, the elements related to the same operations will be linked to the same commands, preventing any code duplication.

As a result, commands become a convenient middle layer that reduces coupling between the GUI and business logic layers. And that’s only a fraction of the benefits that the Command pattern can offer!

<!-- ExplanationEnd -->
<!--ID: 1760611700474-->
END

---

START
NI-SZZ

Jaká je struktura **Command** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130111213.png)

1. The **Sender** class (aka *invoker*) is responsible for initiating requests. This class must have a field for storing a reference to a command object. The sender triggers that command instead of sending the request directly to the receiver. Note that the sender isn’t responsible for creating the command object. Usually, it gets a pre-created command from the client via the constructor.
2. The **Command** interface usually declares just a single method for executing the command.
3. **Concrete Commands** implement various kinds of requests. A concrete command isn’t supposed to perform the work on its own, but rather to pass the call to one of the business logic objects. However, for the sake of simplifying the code, these classes can be merged.
   - Parameters required to execute a method on a receiving object can be declared as fields in the concrete command. You can make command objects immutable by only allowing the initialization of these fields via the constructor.
4. The **Receiver** class contains some business logic. Almost any object may act as a receiver. Most commands only handle the details of how a request is passed to the receiver, while the receiver itself does the actual work.
5. The **Client** creates and configures concrete command objects. The client must pass all of the request parameters, including a receiver instance, into the command’s constructor. After that, the resulting command may be associated with one or multiple senders.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250130111234.png)

<!-- ExampleEnd -->

Tags: diagram

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Command** design patternu? (5 + 1)

Back:

✅ *Single Responsibility Principle*. You can decouple classes that invoke operations from classes that perform these operations.

✅ *Open/Closed Principle*. You can introduce new commands into the app without breaking existing client code.

✅ You can implement undo/redo.

✅ You can implement deferred execution of operations.

✅ You can assemble a set of simple commands into a complex one.

❌ The code may become more complicated since you’re introducing a whole new layer between senders and receivers.

END

---

START
NI-SZZ

K čemu slouží **Chain of Responsibility** design pattern?

Back:

Umožňuje vytvořit řetězec handlerů, kterým se pošle nějaký request. Každý handler pak buď zprocesuje request a nebo ho pošle dál.

![](../../Assets/Pasted%20image%2020250130111323.png)

<!-- ExplanationStart -->

**PROBLEM:**
Imagine that you’re working on an online ordering system. You want to restrict access to the system so only authenticated users can create orders. Also, users who have administrative permissions must have full access to all orders.

After a bit of planning, you realized that these checks must be performed sequentially. The application can attempt to authenticate a user to the system whenever it receives a request that contains the user’s credentials. However, if those credentials aren’t correct and authentication fails, there’s no reason to proceed with any other checks.

![](../../Assets/Pasted%20image%2020250130111336.png)

During the next few months, you implemented several more of those sequential checks.

- One of your colleagues suggested that it’s unsafe to pass raw data straight to the ordering system. So you added an extra validation step to sanitize the data in a request.
- Later, somebody noticed that the system is vulnerable to brute force password cracking. To negate this, you promptly added a check that filters repeated failed requests coming from the same IP address.
- Someone else suggested that you could speed up the system by returning cached results on repeated requests containing the same data. Hence, you added another check which lets the request pass through to the system only if there’s no suitable cached response.

![](../../Assets/Pasted%20image%2020250130111341.png)

The code of the checks, which had already looked like a mess, became more and more bloated as you added each new feature. Changing one check sometimes affected the others. Worst of all, when you tried to reuse the checks to protect other components of the system, you had to duplicate some of the code since those components required some of the checks, but not all of them.

The system became very hard to comprehend and expensive to maintain. You struggled with the code for a while, until one day you decided to refactor the whole thing.

**SOLUTION:**
Like many other behavioral design patterns, the **Chain of Responsibility** relies on transforming particular behaviors into stand-alone objects called *handlers*. In our case, each check should be extracted to its own class with a single method that performs the check. The request, along with its data, is passed to this method as an argument.

The pattern suggests that you link these handlers into a chain. Each linked handler has a field for storing a reference to the next handler in the chain. In addition to processing a request, handlers pass the request further along the chain. The request travels along the chain until all handlers have had a chance to process it.

Here’s the best part: a handler can decide not to pass the request further down the chain and effectively stop any further processing.

In our example with ordering systems, a handler performs the processing and then decides whether to pass the request further down the chain. Assuming the request contains the right data, all the handlers can execute their primary behavior, whether it’s authentication checks or caching.

![](../../Assets/Pasted%20image%2020250130111401.png)

However, there’s a slightly different approach (and it’s a bit more canonical) in which, upon receiving a request, a handler decides whether it can process it. If it can, it doesn’t pass the request any further. So it’s either only one handler that processes the request or none at all. This approach is very common when dealing with events in stacks of elements within a graphical user interface.

For instance, when a user clicks a button, the event propagates through the chain of GUI elements that starts with the button, goes along its containers (like forms or panels), and ends up with the main application window. The event is processed by the first element in the chain that’s capable of handling it. This example is also noteworthy because it shows that a chain can always be extracted from an object tree.

![](../../Assets/Pasted%20image%2020250130111406.png)

It’s crucial that all handler classes implement the same interface. Each concrete handler should only care about the following one having the `execute` method. This way you can compose chains at runtime, using various handlers without coupling your code to their concrete classes.

<!-- ExplanationEnd -->

END

---

START
NI-SZZ

Jaká je struktura **Chain of Responsibility** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130111411.png)

1. The **Handler** declares the interface, common for all concrete handlers. It usually contains just a single method for handling requests, but sometimes it may also have another method for setting the next handler on the chain.
2. The **Base Handler** is an optional class where you can put the boilerplate code that’s common to all handler classes.
   - Usually, this class defines a field for storing a reference to the next handler. The clients can build a chain by passing a handler to the constructor or setter of the previous handler. The class may also implement the default handling behavior: it can pass execution to the next handler after checking for its existence.
3. **Concrete Handlers** contain the actual code for processing requests. Upon receiving a request, each handler must decide whether to process it and, additionally, whether to pass it along the chain.
   - Handlers are usually self-contained and immutable, accepting all necessary data just once via the constructor.
4. The **Client** may compose chains just once or compose them dynamically, depending on the application’s logic. Note that a request can be sent to any handler in the chain—it doesn’t have to be the first one.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250130111435.png)

<!-- ExampleEnd -->

Tags: diagram

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Chain of Responsibility** design patternu? (3 + 1)

Back:

✅ You can control the order of request handling.

✅ *Single Responsibility Principle*. You can decouple classes that invoke operations from classes that perform operations.

✅ *Open/Closed Principle*. You can introduce new handlers into the app without breaking the existing client code.

❌ Some requests may end up unhandled.

END

---

START
NI-SZZ

K čemu slouží **Interpreter** design pattern?

Back:

Slouží k vyhodnocování vět v nějakém jazyce podle dané gramatiky. Základní myšlenkou je pro každý terminál a neterminál gramatiky vytvořit třídu.

Následně je možné každou větu jazyka reprezentovat jako abstraktní syntaktický strom terminálů a neterminálů. Ten strom pak mohu vyhodnotit.

<!-- ExplanationStart -->

- Given a language, define a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language.
- Map a domain to a language, the language to a grammar, and the grammar to a hierarchical object-oriented design.

**PROBLEM:**
A class of problems occurs repeatedly in a well-defined and well-understood domain. If the domain were characterized with a “language”, then problems could be easily solved with an interpretation “engine”.

**SOLUTION:**
The Interpreter pattern discusses: defining a domain language (i.e. problem characterization) as a simple language grammar, representing domain rules as language sentences, and interpreting these sentences to solve the problem. The pattern uses a class to represent each grammar rule. And since grammars are usually hierarchical in structure, an inheritance hierarchy of rule classes maps nicely.

An abstract base class specifies the method `interpret()`. Each concrete subclass implements `interpret()` by accepting (as an argument) the current state of the language stream, and adding its contribution to the problem solving process.

<!-- ExplanationEnd -->

END

---

START
NI-SZZ

Jaká je struktura **Interpreter** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130111600.png)

Interpreter suggests modeling the domain with a recursive grammar. Each rule in the grammar is either a ‘composite’ (a rule that references other rules) or a terminal (a leaf node in a tree structure). Interpreter relies on the recursive traversal of the Composite pattern to interpret the ‘sentences’ it is asked to process.

Tags: diagram

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Interpreter** design patternu? (1 + 1)

Back:

✅ The interpreter design pattern is great for relatively simple grammar interpretation, which doesn’t need to evolve and extend much.

❌ When the grammar is getting more complex, it becomes harder to maintain.

END

---

START
NI-SZZ

K čemu slouží **Iterator** design pattern?

Back:

Umožňuje se pohybovat po prvcích nějaké datové struktury, aniž by exposoval tu samotnou strukturu (např. seznam, strom, atd.).

![](../../Assets/Pasted%20image%2020250130111638.png)

<!-- ExplanationStart -->

**PROBLEM:**
Collections are one of the most used data types in programming. Nonetheless, a collection is just a container for a group of objects.

![](../../Assets/Pasted%20image%2020250130111651.png)

Most collections store their elements in simple lists. However, some of them are based on stacks, trees, graphs and other complex data structures.

But no matter how a collection is structured, it must provide some way of accessing its elements so that other code can use these elements. There should be a way to go through each element of the collection without accessing the same elements over and over.

This may sound like an easy job if you have a collection based on a list. You just loop over all of the elements. But how do you sequentially traverse elements of a complex data structure, such as a tree? For example, one day you might be just fine with depth-first traversal of a tree. Yet the next day you might require breadth-first traversal. And the next week, you might need something else, like random access to the tree elements.

![](../../Assets/Pasted%20image%2020250130111656.png)

Adding more and more traversal algorithms to the collection gradually blurs its primary responsibility, which is efficient data storage. Additionally, some algorithms might be tailored for a specific application, so including them into a generic collection class would be weird.

On the other hand, the client code that’s supposed to work with various collections may not even care how they store their elements. However, since collections all provide different ways of accessing their elements, you have no option other than to couple your code to the specific collection classes.

**SOLUTION:**
The main idea of the Iterator pattern is to extract the traversal behavior of a collection into a separate object called an *iterator*.

![](../../Assets/Pasted%20image%2020250130111706.png)

In addition to implementing the algorithm itself, an iterator object encapsulates all of the traversal details, such as the current position and how many elements are left till the end. Because of this, several iterators can go through the same collection at the same time, independently of each other.

Usually, iterators provide one primary method for fetching elements of the collection. The client can keep running this method until it doesn’t return anything, which means that the iterator has traversed all of the elements.

All iterators must implement the same interface. This makes the client code compatible with any collection type or any traversal algorithm as long as there’s a proper iterator. If you need a special way to traverse a collection, you just create a new iterator class, without having to change the collection or the client.

<!-- ExplanationEnd -->

END

---

START
NI-SZZ

Jaká je struktura **Iterator** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130111712.png)

1. The **Iterator** interface declares the operations required for traversing a collection: fetching the next element, retrieving the current position, restarting iteration, etc.
2. **Concrete Iterators** implement specific algorithms for traversing a collection. The iterator object should track the traversal progress on its own. This allows several iterators to traverse the same collection independently of each other.
3. The **Collection** interface declares one or multiple methods for getting iterators compatible with the collection. Note that the return type of the methods must be declared as the iterator interface so that the concrete collections can return various kinds of iterators.
4. **Concrete Collections** return new instances of a particular concrete iterator class each time the client requests one. You might be wondering, where’s the rest of the collection’s code? Don’t worry, it should be in the same class. It’s just that these details aren’t crucial to the actual pattern, so we’re omitting them.
5. The **Client** works with both collections and iterators via their interfaces. This way the client isn’t coupled to concrete classes, allowing you to use various collections and iterators with the same client code.
   - Typically, clients don’t create iterators on their own, but instead get them from collections. Yet, in certain cases, the client can create one directly; for example, when the client defines its own special iterator.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250130111745.png)

<!-- ExampleEnd -->

Tags: diagram

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Iterator** design patternu? (4 + 2)

Back:

✅ *Single Responsibility Principle*. You can clean up the client code and the collections by extracting bulky traversal algorithms into separate classes.

✅ *Open/Closed Principle*. You can implement new types of collections and iterators and pass them to existing code without breaking anything.

✅ You can iterate over the same collection in parallel because each iterator object contains its own iteration state.

✅ For the same reason, you can delay an iteration and continue it when needed.

❌ Applying the pattern can be an overkill if your app only works with simple collections.

❌ Using an iterator may be less efficient than going through elements of some specialized collections directly.

END

---

START
NI-SZZ

K čemu slouží **Mediator** design pattern?

Back:

Umožňuje sprostředkovávat komunikaci mezi objekty skrze mediatora. Díky tomu nebudou tak chaotické dependencies, protože objekty nebudou komunikovat napřímo.

![](../../Assets/Pasted%20image%2020250130111821.png)

<!-- ExplanationStart -->

**PROBLEM:**
Say you have a dialog for creating and editing customer profiles. It consists of various form controls such as text fields, checkboxes, buttons, etc.

![](../../Assets/Pasted%20image%2020250130111831.png)

Some of the form elements may interact with others. For instance, selecting the “I have a dog” checkbox may reveal a hidden text field for entering the dog’s name. Another example is the submit button that has to validate values of all fields before saving the data.

![](../../Assets/Pasted%20image%2020250130111835.png)

By having this logic implemented directly inside the code of the form elements you make these elements’ classes much harder to reuse in other forms of the app. For example, you won’t be able to use that checkbox class inside another form, because it’s coupled to the dog’s text field. You can use either all the classes involved in rendering the profile form, or none at all.

**SOLUTION:**
The Mediator pattern suggests that you should cease all direct communication between the components which you want to make independent of each other. Instead, these components must collaborate indirectly, by calling a special mediator object that redirects the calls to appropriate components. As a result, the components depend only on a single mediator class instead of being coupled to dozens of their colleagues.

In our example with the profile editing form, the dialog class itself may act as the mediator. Most likely, the dialog class is already aware of all of its sub-elements, so you won’t even need to introduce new dependencies into this class.

![](../../Assets/Pasted%20image%2020250130111853.png)

The most significant change happens to the actual form elements. Let’s consider the submit button. Previously, each time a user clicked the button, it had to validate the values of all individual form elements. Now its single job is to notify the dialog about the click. Upon receiving this notification, the dialog itself performs the validations or passes the task to the individual elements. Thus, instead of being tied to a dozen form elements, the button is only dependent on the dialog class.

You can go further and make the dependency even looser by extracting the common interface for all types of dialogs. The interface would declare the notification method which all form elements can use to notify the dialog about events happening to those elements. Thus, our submit button should now be able to work with any dialog that implements that interface.

This way, the Mediator pattern lets you encapsulate a complex web of relations between various objects inside a single mediator object. The fewer dependencies a class has, the easier it becomes to modify, extend or reuse that class.

<!-- ExplanationEnd -->

END

---

START
NI-SZZ

Jaká je struktura **Mediator** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130111915.png)

1. **Components** are various classes that contain some business logic. Each component has a reference to a mediator, declared with the type of the mediator interface. The component isn’t aware of the actual class of the mediator, so you can reuse the component in other programs by linking it to a different mediator.
2. The **Mediator** interface declares methods of communication with components, which usually include just a single notification method. Components may pass any context as arguments of this method, including their own objects, but only in such a way that no coupling occurs between a receiving component and the sender’s class.
3. **Concrete Mediators** encapsulate relations between various components. Concrete mediators often keep references to all components they manage and sometimes even manage their lifecycle.
4. Components must not be aware of other components. If something important happens within or to a component, it must only notify the mediator. When the mediator receives the notification, it can easily identify the sender, which might be just enough to decide what component should be triggered in return.
   - From a component’s perspective, it all looks like a total black box. The sender doesn’t know who’ll end up handling its request, and the receiver doesn’t know who sent the request in the first place.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250130111934.png)

<!-- ExampleEnd -->

Tags: diagram

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Mediator** design patternu? (4 + 1)

Back:

✅ *Single Responsibility Principle*. You can extract the communications between various components into a single place, making it easier to comprehend and maintain.

✅ *Open/Closed Principle*. You can introduce new mediators without having to change the actual components.

✅ You can reduce coupling between various components of a program.

✅ You can reuse individual components more easily.

❌ Over time a mediator can evolve into a [God Object](https://courses.fit.cvut.cz/antipatterns/god-object).

END

---

START
NI-SZZ

K čemu slouží **Memento** design pattern?

Back:

Umožňuje ukládat a načítat stav objektu, aniž bychom museli znát jeho vnitřní reprezentaci.

![](../../Assets/Pasted%20image%2020250130112002.png)

<!-- ExplanationStart -->

**PROBLEM:**
Imagine that you’re creating a text editor app. In addition to simple text editing, your editor can format text, insert inline images, etc.

At some point, you decided to let users undo any operations carried out on the text. This feature has become so common over the years that nowadays people expect every app to have it. For the implementation, you chose to take the direct approach. Before performing any operation, the app records the state of all objects and saves it in some storage. Later, when a user decides to revert an action, the app fetches the latest snapshot from the history and uses it to restore the state of all objects.

![](../../Assets/Pasted%20image%2020250130112019.png)

Let’s think about those state snapshots. How exactly would you produce one? You’d probably need to go over all the fields in an object and copy their values into storage. However, this would only work if the object had quite relaxed access restrictions to its contents. Unfortunately, most real objects won’t let others peek inside them that easily, hiding all significant data in private fields.

Ignore that problem for now and let’s assume that our objects behave like hippies: preferring open relations and keeping their state public. While this approach would solve the immediate problem and let you produce snapshots of objects’ states at will, it still has some serious issues. In the future, you might decide to refactor some of the editor classes, or add or remove some of the fields. Sounds easy, but this would also require changing the classes responsible for copying the state of the affected objects.

![](../../Assets/Pasted%20image%2020250130112023.png)

But there’s more. Let’s consider the actual “snapshots” of the editor’s state. What data does it contain? At a bare minimum, it must contain the actual text, cursor coordinates, current scroll position, etc. To make a snapshot, you’d need to collect these values and put them into some kind of container.

Most likely, you’re going to store lots of these container objects inside some list that would represent the history. Therefore the containers would probably end up being objects of one class. The class would have almost no methods, but lots of fields that mirror the editor’s state. To allow other objects to write and read data to and from a snapshot, you’d probably need to make its fields public. That would expose all the editor’s states, private or not. Other classes would become dependent on every little change to the snapshot class, which would otherwise happen within private fields and methods without affecting outer classes.

It looks like we’ve reached a dead end: you either expose all internal details of classes, making them too fragile, or restrict access to their state, making it impossible to produce snapshots. Is there any other way to implement the “undo”?

**SOLUTION:**
All problems that we’ve just experienced are caused by broken encapsulation. Some objects try to do more than they are supposed to. To collect the data required to perform some action, they invade the private space of other objects instead of letting these objects perform the actual action.

The Memento pattern delegates creating the state snapshots to the actual owner of that state, the *originator* object. Hence, instead of other objects trying to copy the editor’s state from the “outside,” the editor class itself can make the snapshot since it has full access to its own state.

The pattern suggests storing the copy of the object’s state in a special object called *memento*. The contents of the memento aren’t accessible to any other object except the one that produced it. Other objects must communicate with mementos using a limited interface which may allow fetching the snapshot’s metadata (creation time, the name of the performed operation, etc.), but not the original object’s state contained in the snapshot.

![](../../Assets/Pasted%20image%2020250130112039.png)

Such a restrictive policy lets you store mementos inside other objects, usually called *caretakers*. Since the caretaker works with the memento only via the limited interface, it’s not able to tamper with the state stored inside the memento. At the same time, the originator has access to all fields inside the memento, allowing it to restore its previous state at will.

In our text editor example, we can create a separate history class to act as the caretaker. A stack of mementos stored inside the caretaker will grow each time the editor is about to execute an operation. You could even render this stack within the app’s UI, displaying the history of previously performed operations to a user.

When a user triggers the undo, the history grabs the most recent memento from the stack and passes it back to the editor, requesting a roll-back. Since the editor has full access to the memento, it changes its own state with the values taken from the memento.

<!-- ExplanationEnd -->

END

---

START
NI-SZZ

Jaká je struktura **Memento** design patternu - **Implementation based on nested classes**?

Back:

The classic implementation of the pattern relies on support for nested classes, available in many popular programming languages (such as C++, C#, and Java).
![](../../Assets/Pasted%20image%2020250130112125.png)

1. The **Originator** class can produce snapshots of its own state, as well as restore its state from snapshots when needed.
2. The **Memento** is a value object that acts as a snapshot of the originator’s state. It’s a common practice to make the memento immutable and pass it the data only once, via the constructor.
3. The **Caretaker** knows not only “when” and “why” to capture the originator’s state, but also when the state should be restored.
   - A caretaker can keep track of the originator’s history by storing a stack of mementos. When the originator has to travel back in history, the caretaker fetches the topmost memento from the stack and passes it to the originator’s restoration method.
4. In this implementation, the memento class is nested inside the originator. This lets the originator access the fields and methods of the memento, even though they’re declared private. On the other hand, the caretaker has very limited access to the memento’s fields and methods, which lets it store mementos in a stack but not tamper with their state.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250130112208.png)

<!-- ExampleEnd -->

Tags: diagram

END

---

START
NI-SZZ

Jaká je struktura **Memento** design patternu - **Implementation based on an intermediate interface**?

Back:

There’s an alternative implementation, suitable for programming languages that don’t support nested classes (yeah, PHP, I’m talking about you).

![](../../Assets/Pasted%20image%2020250130112242.png)

1. In the absence of nested classes, you can restrict access to the memento’s fields by establishing a convention that caretakers can work with a memento only through an explicitly declared intermediary interface, which would only declare methods related to the memento’s metadata.
2. On the other hand, originators can work with a memento object directly, accessing fields and methods declared in the memento class. The downside of this approach is that you need to declare all members of the memento public.

Tags: diagram

END

---

START
NI-SZZ

Jaká je struktura **Memento** design patternu - **Implementation with even stricter encapsulation**?

Back:

There’s another implementation which is useful when you don’t want to leave even the slightest chance of other classes accessing the state of the originator through the memento.

![](../../Assets/Pasted%20image%2020250130112308.png)

1. This implementation allows having multiple types of originators and mementos. Each originator works with a corresponding memento class. Neither originators nor mementos expose their state to anyone.
2. Caretakers are now explicitly restricted from changing the state stored in mementos. Moreover, the caretaker class becomes independent from the originator because the restoration method is now defined in the memento class.
3. Each memento becomes linked to the originator that produced it. The originator passes itself to the memento’s constructor, along with the values of its state. Thanks to the close relationship between these classes, a memento can restore the state of its originator, given that the latter has defined the appropriate setters.

Tags: diagram

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Memento** design patternu? (2 + 3)

Back:

✅ You can produce snapshots of the object’s state without violating its encapsulation.

✅ You can simplify the originator’s code by letting the caretaker maintain the history of the originator’s state.

❌ The app might consume lots of RAM if clients create mementos too often.

❌ Caretakers should track the originator’s lifecycle to be able to destroy obsolete mementos.

❌ Most dynamic programming languages, such as PHP, Python and JavaScript, can’t guarantee that the state within the memento stays untouched.

END

---

START
NI-SZZ

K čemu slouží **Observer** design pattern?

Back:

Umožňuje definovat subscribtion mechanismus, kde jsou objekty notifikovány, pokud nastane nějaká událost na objektu, který observují.

![](../../Assets/Pasted%20image%2020250130112355.png)

<!-- ExplanationStart -->

**PROBLEM:**
Imagine that you have two types of objects: a `Customer` and a `Store`. The customer is very interested in a particular brand of product (say, it’s a new model of the iPhone) which should become available in the store very soon.

The customer could visit the store every day and check product availability. But while the product is still en route, most of these trips would be pointless.

![](../../Assets/Pasted%20image%2020250130112404.png)

On the other hand, the store could send tons of emails (which might be considered spam) to all customers each time a new product becomes available. This would save some customers from endless trips to the store. At the same time, it’d upset other customers who aren’t interested in new products.

It looks like we’ve got a conflict. Either the customer wastes time checking product availability or the store wastes resources notifying the wrong customers.

**SOLUTION:**
The object that has some interesting state is often called *subject*, but since it’s also going to notify other objects about the changes to its state, we’ll call it *publisher*. All other objects that want to track changes to the publisher’s state are called *subscribers*.

The Observer pattern suggests that you add a subscription mechanism to the publisher class so individual objects can subscribe to or unsubscribe from a stream of events coming from that publisher. Fear not! Everything isn’t as complicated as it sounds. In reality, this mechanism consists of 1) an array field for storing a list of references to subscriber objects and 2) several public methods which allow adding subscribers to and removing them from that list.

![](../../Assets/Pasted%20image%2020250130112416.png)

Now, whenever an important event happens to the publisher, it goes over its subscribers and calls the specific notification method on their objects.

Real apps might have dozens of different subscriber classes that are interested in tracking events of the same publisher class. You wouldn’t want to couple the publisher to all of those classes. Besides, you might not even know about some of them beforehand if your publisher class is supposed to be used by other people.

That’s why it’s crucial that all subscribers implement the same interface and that the publisher communicates with them only via that interface. This interface should declare the notification method along with a set of parameters that the publisher can use to pass some contextual data along with the notification.

![](../../Assets/Pasted%20image%2020250130112420.png)

If your app has several different types of publishers and you want to make your subscribers compatible with all of them, you can go even further and make all publishers follow the same interface. This interface would only need to describe a few subscription methods. The interface would allow subscribers to observe publishers’ states without coupling to their concrete classes.

<!-- ExplanationEnd -->

END

---

START
NI-SZZ

Jaká je struktura **Observer** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130112426.png)

1. The **Publisher** issues events of interest to other objects. These events occur when the publisher changes its state or executes some behaviors. Publishers contain a subscription infrastructure that lets new subscribers join and current subscribers leave the list.
2. When a new event happens, the publisher goes over the subscription list and calls the notification method declared in the subscriber interface on each subscriber object.
3. The **Subscriber** interface declares the notification interface. In most cases, it consists of a single `update` method. The method may have several parameters that let the publisher pass some event details along with the update.
4. **Concrete Subscribers** perform some actions in response to notifications issued by the publisher. All of these classes must implement the same interface so the publisher isn’t coupled to concrete classes.
5. Usually, subscribers need some contextual information to handle the update correctly. For this reason, publishers often pass some context data as arguments of the notification method. The publisher can pass itself as an argument, letting subscriber fetch any required data directly.
6. The **Client** creates publisher and subscriber objects separately and then registers subscribers for publisher updates.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250130112440.png)

<!-- ExampleEnd -->

Tags: diagram

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Observer** design patternu? (2 + 1)

Back:

✅ *Open/Closed Principle*. You can introduce new subscriber classes without having to change the publisher’s code (and vice versa if there’s a publisher interface).

✅ You can establish relations between objects at runtime.

❌ Subscribers are notified in random order.

END

---

START
NI-SZZ

K čemu slouží **State** design pattern?

Back:

Umožňuje měnit chování objektu na základě jeho vnitřního stavu. Stav je reprezentovaný třídou.

![](../../Assets/Pasted%20image%2020250130112522.png)

<!-- ExplanationStart -->

**PROBLEM:**
The State pattern is closely related to the concept of a *Finite-State Machine*.

![](../../Assets/Pasted%20image%2020250130112600.png)

The main idea is that, at any given moment, there’s a *finite* number of *states* which a program can be in. Within any unique state, the program behaves differently, and the program can be switched from one state to another instantaneously. However, depending on a current state, the program may or may not switch to certain other states. These switching rules, called *transitions*, are also finite and predetermined.

You can also apply this approach to objects. Imagine that we have a `Document` class. A document can be in one of three states: `Draft`, `Moderation` and `Published`. The `publish` method of the document works a little bit differently in each state:

- In `Draft`, it moves the document to moderation.
- In `Moderation`, it makes the document public, but only if the current user is an administrator.
- In `Published`, it doesn’t do anything at all.

![](../../Assets/Pasted%20image%2020250130112605.png)

State machines are usually implemented with lots of conditional statements (`if` or `switch`) that select the appropriate behavior depending on the current state of the object. Usually, this “state” is just a set of values of the object’s fields. Even if you’ve never heard about finite-state machines before, you’ve probably implemented a state at least once. Does the following code structure ring a bell?

```scala
class Document is
    field state: string
    // ...
    method publish() is
        switch (state)
            "draft":
                state = "moderation"
                break
            "moderation":
                if (currentUser.role == "admin")
                    state = "published"
                break
            "published":
                // Do nothing.
                break
    // ...
```

The biggest weakness of a state machine based on conditionals reveals itself once we start adding more and more states and state-dependent behaviors to the `Document` class. Most methods will contain monstrous conditionals that pick the proper behavior of a method according to the current state. Code like this is very difficult to maintain because any change to the transition logic may require changing state conditionals in every method.

The problem tends to get bigger as a project evolves. It’s quite difficult to predict all possible states and transitions at the design stage. Hence, a lean state machine built with a limited set of conditionals can grow into a bloated mess over time.

**SOLUTION:**
The State pattern suggests that you create new classes for all possible states of an object and extract all state-specific behaviors into these classes.

Instead of implementing all behaviors on its own, the original object, called *context*, stores a reference to one of the state objects that represents its current state, and delegates all the state-related work to that object.

![](../../Assets/Pasted%20image%2020250130112627.png)

To transition the context into another state, replace the active state object with another object that represents that new state. This is possible only if all state classes follow the same interface and the context itself works with these objects through that interface.

This structure may look similar to the [Strategy](https://courses.fit.cvut.cz/NI-ADP/materials/design-patterns/behavioral-patterns/strategy.html) pattern, but there’s one key difference. In the State pattern, the particular states may be aware of each other and initiate transitions from one state to another, whereas strategies almost never know about each other.

<!-- ExplanationEnd -->

END

---

START
NI-SZZ

Jaká je struktura **State** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130112635.png)

1. **Context** stores a reference to one of the concrete state objects and delegates to it all state-specific work. The context communicates with the state object via the state interface. The context exposes a setter for passing it a new state object.
2. The **State** interface declares the state-specific methods. These methods should make sense for all concrete states because you don’t want some of your states to have useless methods that will never be called.
3. **Concrete States** provide their own implementations for the state-specific methods. To avoid duplication of similar code across multiple states, you may provide intermediate abstract classes that encapsulate some common behavior.
   - State objects may store a backreference to the context object. Through this reference, the state can fetch any required info from the context object, as well as initiate state transitions.
4. Both context and concrete states can set the next state of the context and perform the actual state transition by replacing the state object linked to the context.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250130112651.png)

<!-- ExampleEnd -->

Tags: diagram

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **State** design patternu? (3 + 1)

Back:

✅ *Single Responsibility Principle*. Organize the code related to particular states into separate classes.

✅ *Open/Closed Principle*. Introduce new states without changing existing state classes or the context.

✅ Simplify the code of the context by eliminating bulky state machine conditionals.

❌ Applying the pattern can be overkill if a state machine has only a few states or rarely changes.

END

---

START
NI-SZZ

K čemu slouží **Strategy** design pattern?

Back:

Umožňuje mi zadefinovat různé strategie/algoritmy v oddělených třídách. Díky tomu pak můžu tyto strategie různě prohazovat a vybírat.

![](../../Assets/Pasted%20image%2020250130112736.png)

<!-- ExplanationStart -->

**PROBLEM:**
One day you decided to create a navigation app for casual travelers. The app was centered around a beautiful map which helped users quickly orient themselves in any city.

One of the most requested features for the app was automatic route planning. A user should be able to enter an address and see the fastest route to that destination displayed on the map.

The first version of the app could only build the routes over roads. People who traveled by car were bursting with joy. But apparently, not everybody likes to drive on their vacation. So with the next update, you added an option to build walking routes. Right after that, you added another option to let people use public transport in their routes.

However, that was only the beginning. Later you planned to add route building for cyclists. And even later, another option for building routes through all of a city’s tourist attractions.

![](../../Assets/Pasted%20image%2020250130112746.png)

While from a business perspective the app was a success, the technical part caused you many headaches. Each time you added a new routing algorithm, the main class of the navigator doubled in size. At some point, the beast became too hard to maintain.

Any change to one of the algorithms, whether it was a simple bug fix or a slight adjustment of the street score, affected the whole class, increasing the chance of creating an error in already-working code.

In addition, teamwork became inefficient. Your teammates, who had been hired right after the successful release, complain that they spend too much time resolving merge conflicts. Implementing a new feature requires you to change the same huge class, conflicting with the code produced by other people.

**SOLUTION:**
The Strategy pattern suggests that you take a class that does something specific in a lot of different ways and extract all of these algorithms into separate classes called *strategies*.

The original class, called *context*, must have a field for storing a reference to one of the strategies. The context delegates the work to a linked strategy object instead of executing it on its own.

The context isn’t responsible for selecting an appropriate algorithm for the job. Instead, the client passes the desired strategy to the context. In fact, the context doesn’t know much about strategies. It works with all strategies through the same generic interface, which only exposes a single method for triggering the algorithm encapsulated within the selected strategy.

This way the context becomes independent of concrete strategies, so you can add new algorithms or modify existing ones without changing the code of the context or other strategies.

![](../../Assets/Pasted%20image%2020250130112758.png)

In our navigation app, each routing algorithm can be extracted to its own class with a single `buildRoute` method. The method accepts an origin and destination and returns a collection of the route’s checkpoints.

Even though given the same arguments, each routing class might build a different route, the main navigator class doesn’t really care which algorithm is selected since its primary job is to render a set of checkpoints on the map. The class has a method for switching the active routing strategy, so its clients, such as the buttons in the user interface, can replace the currently selected routing behavior with another one.

<!-- ExplanationEnd -->

END

---

START
NI-SZZ

Jaká je struktura **Strategy** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130112811.png)

1. The **Context** maintains a reference to one of the concrete strategies and communicates with this object only via the strategy interface.
2. The **Strategy** interface is common to all concrete strategies. It declares a method the context uses to execute a strategy.
3. **Concrete Strategies** implement different variations of an algorithm the context uses.
4. The context calls the execution method on the linked strategy object each time it needs to run the algorithm. The context doesn’t know what type of strategy it works with or how the algorithm is executed.
5. The **Client** creates a specific strategy object and passes it to the context. The context exposes a setter which lets clients replace the strategy associated with the context at runtime.

Tags: diagram

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Strategy** design patternu? (4 + 3)

Back:

✅ You can swap algorithms used inside an object at runtime.

✅ You can isolate the implementation details of an algorithm from the code that uses it.

✅ You can replace inheritance with composition.

✅ *Open/Closed Principle*. You can introduce new strategies without having to change the context.

❌ If you only have a couple of algorithms and they rarely change, there’s no real reason to overcomplicate the program with new classes and interfaces that come along with the pattern.

❌ Clients must be aware of the differences between strategies to be able to select a proper one.

❌ A lot of modern programming languages have functional type support that lets you implement different versions of an algorithm inside a set of anonymous functions. Then you could use these functions exactly as you’d have used the strategy objects, but without bloating your code with extra classes and interfaces.

END

---

START
NI-SZZ

K čemu slouží **Template Method** design pattern?

Back:

Umožňuje vytvořit funkci, která definuje strukturu nějakého algoritmu a volá nějaké metody, které reprezentují kroky daného algoritmu. Tyto metody potom mohou být přepsány v podtřídách.

Díky tomu takto vznikne "kostra" algoritmu a mohu v podtřídách přepisovat jednotlivé kroky algoritmu.

![](../../Assets/Pasted%20image%2020250130112928.png)

<!-- ExplanationStart -->

**PROBLEM:**
Imagine that you’re creating a data mining application that analyzes corporate documents. Users feed the app documents in various formats (PDF, DOC, CSV), and it tries to extract meaningful data from these docs in a uniform format.

The first version of the app could work only with DOC files. In the following version, it was able to support CSV files. A month later, you “taught” it to extract data from PDF files.

![](../../Assets/Pasted%20image%2020250130112940.png)

At some point, you noticed that all three classes have a lot of similar code. While the code for dealing with various data formats was entirely different in all classes, the code for data processing and analysis is almost identical. Wouldn’t it be great to get rid of the code duplication, leaving the algorithm structure intact?

There was another problem related to client code that used these classes. It had lots of conditionals that picked a proper course of action depending on the class of the processing object. If all three processing classes had a common interface or a base class, you’d be able to eliminate the conditionals in client code and use polymorphism when calling methods on a processing object.

**SOLUTION:**
The Template Method pattern suggests that you break down an algorithm into a series of steps, turn these steps into methods, and put a series of calls to these methods inside a single *template method.* The steps may either be `abstract`, or have some default implementation. To use the algorithm, the client is supposed to provide its own subclass, implement all abstract steps, and override some of the optional ones if needed (but not the template method itself).

Let’s see how this will play out in our data mining app. We can create a base class for all three parsing algorithms. This class defines a template method consisting of a series of calls to various document-processing steps.

![](../../Assets/Pasted%20image%2020250130112958.png)

At first, we can declare all steps `abstract`, forcing the subclasses to provide their own implementations for these methods. In our case, subclasses already have all necessary implementations, so the only thing we might need to do is adjust signatures of the methods to match the methods of the superclass.

Now, let’s see what we can do to get rid of the duplicate code. It looks like the code for opening/closing files and extracting/parsing data is different for various data formats, so there’s no point in touching those methods. However, implementation of other steps, such as analyzing the raw data and composing reports, is very similar, so it can be pulled up into the base class, where subclasses can share that code.

As you can see, we’ve got two types of steps:

- *abstract steps* must be implemented by every subclass
- *optional steps* already have some default implementation, but still can be overridden if needed

There’s another type of step, called *hooks*. A hook is an optional step with an empty body. A template method would work even if a hook isn’t overridden. Usually, hooks are placed before and after crucial steps of algorithms, providing subclasses with additional extension points for an algorithm.

<!-- ExplanationEnd -->

END

---

START
NI-SZZ

Jaká je struktura **Template Method** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130113005.png)

1. The **Abstract Class** declares methods that act as steps of an algorithm, as well as the actual template method which calls these methods in a specific order. The steps may either be declared `abstract` or have some default implementation.
2. **Concrete Classes** can override all of the steps, but not the template method itself.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250130113014.png)

<!-- ExampleEnd -->

Tags: diagram

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Template Method** design patternu? (2 + 3)

Back:

✅ You can let clients override only certain parts of a large algorithm, making them less affected by changes that happen to other parts of the algorithm.

✅ You can pull the duplicate code into a superclass.

❌ Some clients may be limited by the provided skeleton of an algorithm.

❌ You might violate the *Liskov Substitution Principle* by suppressing a default step implementation via a subclass.

❌ Template methods tend to be harder to maintain the more steps they have.

END

---

START
NI-SZZ

K čemu slouží **Visitor** design pattern?

Back:

Umožňuje mi oddělit algoritmy od objektů, na kterých pracují.

![](../../Assets/Pasted%20image%2020250130113142.png)

<!-- ExplanationStart -->

**PROBLEM:**
Imagine that your team develops an app which works with geographic information structured as one colossal graph. Each node of the graph may represent a complex entity such as a city, but also more granular things like industries, sightseeing areas, etc. The nodes are connected with others if there’s a road between the real objects that they represent. Under the hood, each node type is represented by its own class, while each specific node is an object.

![](../../Assets/Pasted%20image%2020250130113159.png)

At some point, you got a task to implement exporting the graph into XML format. At first, the job seemed pretty straightforward. You planned to add an export method to each node class and then leverage recursion to go over each node of the graph, executing the export method. The solution was simple and elegant: thanks to polymorphism, you weren’t coupling the code which called the export method to concrete classes of nodes.

Unfortunately, the system architect refused to allow you to alter existing node classes. He said that the code was already in production and he didn’t want to risk breaking it because of a potential bug in your changes.

![](../../Assets/Pasted%20image%2020250130113203.png)

Besides, he questioned whether it makes sense to have the XML export code within the node classes. The primary job of these classes was to work with geodata. The XML export behavior would look alien there.

There was another reason for the refusal. It was highly likely that after this feature was implemented, someone from the marketing department would ask you to provide the ability to export into a different format, or request some other weird stuff. This would force you to change those precious and fragile classes again.

**SOLUTION:**
The Visitor pattern suggests that you place the new behavior into a separate class called *visitor*, instead of trying to integrate it into existing classes. The original object that had to perform the behavior is now passed to one of the visitor’s methods as an argument, providing the method access to all necessary data contained within the object.

Now, what if that behavior can be executed over objects of different classes? For example, in our case with XML export, the actual implementation will probably be a little bit different across various node classes. Thus, the visitor class may define not one, but a set of methods, each of which could take arguments of different types, like this:

```javascript
class ExportVisitor implements Visitor is
    method doForCity(City c) { ... }
    method doForIndustry(Industry f) { ... }
    method doForSightSeeing(SightSeeing ss) { ... }
    // ...
```

But how exactly would we call these methods, especially when dealing with the whole graph? These methods have different signatures, so we can’t use polymorphism. To pick a proper visitor method that’s able to process a given object, we’d need to check its class. Doesn’t this sound like a nightmare?

```javascript
foreach (Node node in graph)
    if (node instanceof City)
        exportVisitor.doForCity((City) node)
    if (node instanceof Industry)
        exportVisitor.doForIndustry((Industry) node)
    // ...
}
```

You might ask, why don’t we use method overloading? That’s when you give all methods the same name, even if they support different sets of parameters. Unfortunately, even assuming that our programming language supports it at all (as Java and C# do), it won’t help us. Since the exact class of a node object is unknown in advance, the overloading mechanism won’t be able to determine the correct method to execute. It’ll default to the method that takes an object of the base `Node` class.

However, the Visitor pattern addresses this problem. It uses a technique called [Double Dispatch](https://courses.fit.cvut.cz/NI-ADP/materials/design-patterns/behavioral-patterns/visitor-double-dispatch.html), which helps to execute the proper method on an object without cumbersome conditionals. Instead of letting the client select a proper version of the method to call, how about we delegate this choice to objects we’re passing to the visitor as an argument? Since the objects know their own classes, they’ll be able to pick a proper method on the visitor less awkwardly. They “accept” a visitor and tell it what visiting method should be executed.

```javascript
// Client code
foreach (Node node in graph)
    node.accept(exportVisitor)

// City
class City is
    method accept(Visitor v) is
        v.doForCity(this)
    // ...

// Industry
class Industry is
    method accept(Visitor v) is
        v.doForIndustry(this)
    // ...
```

I confess. We had to change the node classes after all. But at least the change is trivial and it lets us add further behaviors without altering the code once again.

Now, if we extract a common interface for all visitors, all existing nodes can work with any visitor you introduce into the app. If you find yourself introducing a new behavior related to nodes, all you have to do is implement a new visitor class.

<!-- ExplanationEnd -->

END

---

START
NI-SZZ

Jaká je struktura **Visitor** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130113211.png)

1. The **Visitor** interface declares a set of visiting methods that can take concrete elements of an object structure as arguments. These methods may have the same names if the program is written in a language that supports overloading, but the type of their parameters must be different.
2. Each **Concrete Visitor** implements several versions of the same behaviors, tailored for different concrete element classes.
3. The **Element** interface declares a method for “accepting” visitors. This method should have one parameter declared with the type of the visitor interface.
4. Each **Concrete Element** must implement the acceptance method. The purpose of this method is to redirect the call to the proper visitor’s method corresponding to the current element class. Be aware that even if a base element class implements this method, all subclasses must still override this method in their own classes and call the appropriate method on the visitor object.
5. The **Client** usually represents a collection or some other complex object (for example, a [Composite](https://courses.fit.cvut.cz/NI-ADP/materials/design-patterns/structural-patterns/composite.html) tree). Usually, clients aren’t aware of all the concrete element classes because they work with objects from that collection via some abstract interface.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250130113259.png)

<!-- ExampleEnd -->

Tags: diagram

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Visitor** design patternu? (3 + 2)

Back:

✅ *Open/Closed Principle*. You can introduce a new behavior that can work with objects of different classes without changing these classes.

✅ *Single Responsibility Principle*. You can move multiple versions of the same behavior into the same class.

✅ A visitor object can accumulate some useful information while working with various objects. This might be handy when you want to traverse some complex object structure, such as an object tree, and apply the visitor to each object of this structure.

❌ You need to update all visitors each time a class gets added to or removed from the element hierarchy.

❌ Visitors might lack the necessary access to the private fields and methods of the elements that they’re supposed to work with.

END

---

START
NI-SZZ

Jaké jsou **vzory pro chování objektů**? (11)

Back:

- **Command**
- **Chain of Responsibility**
- **Interpreter**
- **Iterator**
- **Mediator**
- **Memento**
- **Observer**
- **State**
- **Strategy**
- **Template Method**
- **Visitor**

END

---

START
NI-SZZ

K čemu slouží **Command** design pattern?

Back:

Pro nějakou akci/request/příkaz vytvoří samostatnou třídu, která obsahuje relevantní informace o dané akci. Díky tomu je možné akce například dávat do fronty, lze je ukládat a předávat si je v rámci programu.

![](../../Assets/Pasted%20image%2020250130111117.png)

<!-- ExplanationStart -->

**PROBLEM:**
Imagine that you’re working on a new text-editor app. Your current task is to create a toolbar with a bunch of buttons for various operations of the editor. You created a very neat `Button` class that can be used for buttons on the toolbar, as well as for generic buttons in various dialogs.

![](../../Assets/Pasted%20image%2020250130111134.png)

While all of these buttons look similar, they’re all supposed to do different things. Where would you put the code for the various click handlers of these buttons? The simplest solution is to create tons of subclasses for each place where the button is used. These subclasses would contain the code that would have to be executed on a button click.

![](../../Assets/Pasted%20image%2020250130111140.png)

Before long, you realize that this approach is deeply flawed. First, you have an enormous number of subclasses, and that would be okay if you weren’t risking breaking the code in these subclasses each time you modify the base `Button` class. Put simply, your GUI code has become awkwardly dependent on the volatile code of the business logic.

![](../../Assets/Pasted%20image%2020250130111144.png)

And here’s the ugliest part. Some operations, such as copying/pasting text, would need to be invoked from multiple places. For example, a user could click a small “Copy” button on the toolbar, or copy something via the context menu, or just hit `Ctrl+C` on the keyboard.

Initially, when our app only had the toolbar, it was okay to place the implementation of various operations into the button subclasses. In other words, having the code for copying text inside the `CopyButton` subclass was fine. But then, when you implement context menus, shortcuts, and other stuff, you have to either duplicate the operation’s code in many classes or make menus dependent on buttons, which is an even worse option.

**SOLUTION:**
Good software design is often based on the *principle of separation of concerns*, which usually results in breaking an app into layers. The most common example: a layer for the graphical user interface and another layer for the business logic. The GUI layer is responsible for rendering a beautiful picture on the screen, capturing any input and showing results of what the user and the app are doing. However, when it comes to doing something important, like calculating the trajectory of the moon or composing an annual report, the GUI layer delegates the work to the underlying layer of business logic.

In the code it might look like this: a GUI object calls a method of a business logic object, passing it some arguments. This process is usually described as one object sending another a *request*.

![](../../Assets/Pasted%20image%2020250130111158.png)

The Command pattern suggests that GUI objects shouldn’t send these requests directly. Instead, you should extract all of the request details, such as the object being called, the name of the method and the list of arguments into a separate _ command_ class with a single method that triggers this request.

Command objects serve as links between various GUI and business logic objects. From now on, the GUI object doesn’t need to know what business logic object will receive the request and how it’ll be processed. The GUI object just triggers the command, which handles all the details.

![](../../Assets/Pasted%20image%2020250130111202.png)

The next step is to make your commands implement the same interface. Usually it has just a single execution method that takes no parameters. This interface lets you use various commands with the same request sender, without coupling it to concrete classes of commands. As a bonus, now you can switch command objects linked to the sender, effectively changing the sender’s behavior at runtime.

You might have noticed one missing piece of the puzzle, which is the request parameters. A GUI object might have supplied the business-layer object with some parameters. Since the command execution method doesn’t have any parameters, how would we pass the request details to the receiver? It turns out the command should be either pre-configured with this data, or capable of getting it on its own.

![](../../Assets/Pasted%20image%2020250130111207.png)

Let’s get back to our text editor. After we apply the Command pattern, we no longer need all those button subclasses to implement various click behaviors. It’s enough to put a single field into the base `Button` class that stores a reference to a command object and make the button execute that command on a click.

You’ll implement a bunch of command classes for every possible operation and link them with particular buttons, depending on the buttons’ intended behavior.

Other GUI elements, such as menus, shortcuts or entire dialogs, can be implemented in the same way. They’ll be linked to a command which gets executed when a user interacts with the GUI element. As you’ve probably guessed by now, the elements related to the same operations will be linked to the same commands, preventing any code duplication.

As a result, commands become a convenient middle layer that reduces coupling between the GUI and business logic layers. And that’s only a fraction of the benefits that the Command pattern can offer!

<!-- ExplanationEnd -->

END

---

START
NI-SZZ

Jaká je struktura **Command** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130111213.png)

1. The **Sender** class (aka *invoker*) is responsible for initiating requests. This class must have a field for storing a reference to a command object. The sender triggers that command instead of sending the request directly to the receiver. Note that the sender isn’t responsible for creating the command object. Usually, it gets a pre-created command from the client via the constructor.
2. The **Command** interface usually declares just a single method for executing the command.
3. **Concrete Commands** implement various kinds of requests. A concrete command isn’t supposed to perform the work on its own, but rather to pass the call to one of the business logic objects. However, for the sake of simplifying the code, these classes can be merged.
   - Parameters required to execute a method on a receiving object can be declared as fields in the concrete command. You can make command objects immutable by only allowing the initialization of these fields via the constructor.
4. The **Receiver** class contains some business logic. Almost any object may act as a receiver. Most commands only handle the details of how a request is passed to the receiver, while the receiver itself does the actual work.
5. The **Client** creates and configures concrete command objects. The client must pass all of the request parameters, including a receiver instance, into the command’s constructor. After that, the resulting command may be associated with one or multiple senders.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250130111234.png)

<!-- ExampleEnd -->

Tags: diagram

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Command** design patternu? (5 + 1)

Back:

✅ *Single Responsibility Principle*. You can decouple classes that invoke operations from classes that perform these operations.

✅ *Open/Closed Principle*. You can introduce new commands into the app without breaking existing client code.

✅ You can implement undo/redo.

✅ You can implement deferred execution of operations.

✅ You can assemble a set of simple commands into a complex one.

❌ The code may become more complicated since you’re introducing a whole new layer between senders and receivers.

END

---

START
NI-SZZ

K čemu slouží **Chain of Responsibility** design pattern?

Back:

Umožňuje vytvořit řetězec handlerů, kterým se pošle nějaký request. Každý handler pak buď zprocesuje request a nebo ho pošle dál.

![](../../Assets/Pasted%20image%2020250130111323.png)

<!-- ExplanationStart -->

**PROBLEM:**
Imagine that you’re working on an online ordering system. You want to restrict access to the system so only authenticated users can create orders. Also, users who have administrative permissions must have full access to all orders.

After a bit of planning, you realized that these checks must be performed sequentially. The application can attempt to authenticate a user to the system whenever it receives a request that contains the user’s credentials. However, if those credentials aren’t correct and authentication fails, there’s no reason to proceed with any other checks.

![](../../Assets/Pasted%20image%2020250130111336.png)

During the next few months, you implemented several more of those sequential checks.

- One of your colleagues suggested that it’s unsafe to pass raw data straight to the ordering system. So you added an extra validation step to sanitize the data in a request.
- Later, somebody noticed that the system is vulnerable to brute force password cracking. To negate this, you promptly added a check that filters repeated failed requests coming from the same IP address.
- Someone else suggested that you could speed up the system by returning cached results on repeated requests containing the same data. Hence, you added another check which lets the request pass through to the system only if there’s no suitable cached response.

![](../../Assets/Pasted%20image%2020250130111341.png)

The code of the checks, which had already looked like a mess, became more and more bloated as you added each new feature. Changing one check sometimes affected the others. Worst of all, when you tried to reuse the checks to protect other components of the system, you had to duplicate some of the code since those components required some of the checks, but not all of them.

The system became very hard to comprehend and expensive to maintain. You struggled with the code for a while, until one day you decided to refactor the whole thing.

**SOLUTION:**
Like many other behavioral design patterns, the **Chain of Responsibility** relies on transforming particular behaviors into stand-alone objects called *handlers*. In our case, each check should be extracted to its own class with a single method that performs the check. The request, along with its data, is passed to this method as an argument.

The pattern suggests that you link these handlers into a chain. Each linked handler has a field for storing a reference to the next handler in the chain. In addition to processing a request, handlers pass the request further along the chain. The request travels along the chain until all handlers have had a chance to process it.

Here’s the best part: a handler can decide not to pass the request further down the chain and effectively stop any further processing.

In our example with ordering systems, a handler performs the processing and then decides whether to pass the request further down the chain. Assuming the request contains the right data, all the handlers can execute their primary behavior, whether it’s authentication checks or caching.

![](../../Assets/Pasted%20image%2020250130111401.png)

However, there’s a slightly different approach (and it’s a bit more canonical) in which, upon receiving a request, a handler decides whether it can process it. If it can, it doesn’t pass the request any further. So it’s either only one handler that processes the request or none at all. This approach is very common when dealing with events in stacks of elements within a graphical user interface.

For instance, when a user clicks a button, the event propagates through the chain of GUI elements that starts with the button, goes along its containers (like forms or panels), and ends up with the main application window. The event is processed by the first element in the chain that’s capable of handling it. This example is also noteworthy because it shows that a chain can always be extracted from an object tree.

![](../../Assets/Pasted%20image%2020250130111406.png)

It’s crucial that all handler classes implement the same interface. Each concrete handler should only care about the following one having the `execute` method. This way you can compose chains at runtime, using various handlers without coupling your code to their concrete classes.

<!-- ExplanationEnd -->

END

---

START
NI-SZZ

Jaká je struktura **Chain of Responsibility** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130111411.png)

1. The **Handler** declares the interface, common for all concrete handlers. It usually contains just a single method for handling requests, but sometimes it may also have another method for setting the next handler on the chain.
2. The **Base Handler** is an optional class where you can put the boilerplate code that’s common to all handler classes.
   - Usually, this class defines a field for storing a reference to the next handler. The clients can build a chain by passing a handler to the constructor or setter of the previous handler. The class may also implement the default handling behavior: it can pass execution to the next handler after checking for its existence.
3. **Concrete Handlers** contain the actual code for processing requests. Upon receiving a request, each handler must decide whether to process it and, additionally, whether to pass it along the chain.
   - Handlers are usually self-contained and immutable, accepting all necessary data just once via the constructor.
4. The **Client** may compose chains just once or compose them dynamically, depending on the application’s logic. Note that a request can be sent to any handler in the chain—it doesn’t have to be the first one.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250130111435.png)

<!-- ExampleEnd -->

Tags: diagram

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Chain of Responsibility** design patternu? (3 + 1)

Back:

✅ You can control the order of request handling.

✅ *Single Responsibility Principle*. You can decouple classes that invoke operations from classes that perform operations.

✅ *Open/Closed Principle*. You can introduce new handlers into the app without breaking the existing client code.

❌ Some requests may end up unhandled.

END

---

START
NI-SZZ

K čemu slouží **Interpreter** design pattern?

Back:

Slouží k vyhodnocování vět v nějakém jazyce podle dané gramatiky. Základní myšlenkou je pro každý terminál a neterminál gramatiky vytvořit třídu.

Následně je možné každou větu jazyka reprezentovat jako abstraktní syntaktický strom terminálů a neterminálů. Ten strom pak mohu vyhodnotit.

<!-- ExplanationStart -->

- Given a language, define a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language.
- Map a domain to a language, the language to a grammar, and the grammar to a hierarchical object-oriented design.

**PROBLEM:**
A class of problems occurs repeatedly in a well-defined and well-understood domain. If the domain were characterized with a “language”, then problems could be easily solved with an interpretation “engine”.

**SOLUTION:**
The Interpreter pattern discusses: defining a domain language (i.e. problem characterization) as a simple language grammar, representing domain rules as language sentences, and interpreting these sentences to solve the problem. The pattern uses a class to represent each grammar rule. And since grammars are usually hierarchical in structure, an inheritance hierarchy of rule classes maps nicely.

An abstract base class specifies the method `interpret()`. Each concrete subclass implements `interpret()` by accepting (as an argument) the current state of the language stream, and adding its contribution to the problem solving process.

<!-- ExplanationEnd -->

END

---

START
NI-SZZ

Jaká je struktura **Interpreter** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130111600.png)

Interpreter suggests modeling the domain with a recursive grammar. Each rule in the grammar is either a ‘composite’ (a rule that references other rules) or a terminal (a leaf node in a tree structure). Interpreter relies on the recursive traversal of the Composite pattern to interpret the ‘sentences’ it is asked to process.

Tags: diagram

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Interpreter** design patternu? (1 + 1)

Back:

✅ The interpreter design pattern is great for relatively simple grammar interpretation, which doesn’t need to evolve and extend much.

❌ When the grammar is getting more complex, it becomes harder to maintain.

END

---

START
NI-SZZ

K čemu slouží **Iterator** design pattern?

Back:

Umožňuje se pohybovat po prvcích nějaké datové struktury, aniž by exposoval tu samotnou strukturu (např. seznam, strom, atd.).

![](../../Assets/Pasted%20image%2020250130111638.png)

<!-- ExplanationStart -->

**PROBLEM:**
Collections are one of the most used data types in programming. Nonetheless, a collection is just a container for a group of objects.

![](../../Assets/Pasted%20image%2020250130111651.png)

Most collections store their elements in simple lists. However, some of them are based on stacks, trees, graphs and other complex data structures.

But no matter how a collection is structured, it must provide some way of accessing its elements so that other code can use these elements. There should be a way to go through each element of the collection without accessing the same elements over and over.

This may sound like an easy job if you have a collection based on a list. You just loop over all of the elements. But how do you sequentially traverse elements of a complex data structure, such as a tree? For example, one day you might be just fine with depth-first traversal of a tree. Yet the next day you might require breadth-first traversal. And the next week, you might need something else, like random access to the tree elements.

![](../../Assets/Pasted%20image%2020250130111656.png)

Adding more and more traversal algorithms to the collection gradually blurs its primary responsibility, which is efficient data storage. Additionally, some algorithms might be tailored for a specific application, so including them into a generic collection class would be weird.

On the other hand, the client code that’s supposed to work with various collections may not even care how they store their elements. However, since collections all provide different ways of accessing their elements, you have no option other than to couple your code to the specific collection classes.

**SOLUTION:**
The main idea of the Iterator pattern is to extract the traversal behavior of a collection into a separate object called an *iterator*.

![](../../Assets/Pasted%20image%2020250130111706.png)

In addition to implementing the algorithm itself, an iterator object encapsulates all of the traversal details, such as the current position and how many elements are left till the end. Because of this, several iterators can go through the same collection at the same time, independently of each other.

Usually, iterators provide one primary method for fetching elements of the collection. The client can keep running this method until it doesn’t return anything, which means that the iterator has traversed all of the elements.

All iterators must implement the same interface. This makes the client code compatible with any collection type or any traversal algorithm as long as there’s a proper iterator. If you need a special way to traverse a collection, you just create a new iterator class, without having to change the collection or the client.

<!-- ExplanationEnd -->

END

---

START
NI-SZZ

Jaká je struktura **Iterator** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130111712.png)

1. The **Iterator** interface declares the operations required for traversing a collection: fetching the next element, retrieving the current position, restarting iteration, etc.
2. **Concrete Iterators** implement specific algorithms for traversing a collection. The iterator object should track the traversal progress on its own. This allows several iterators to traverse the same collection independently of each other.
3. The **Collection** interface declares one or multiple methods for getting iterators compatible with the collection. Note that the return type of the methods must be declared as the iterator interface so that the concrete collections can return various kinds of iterators.
4. **Concrete Collections** return new instances of a particular concrete iterator class each time the client requests one. You might be wondering, where’s the rest of the collection’s code? Don’t worry, it should be in the same class. It’s just that these details aren’t crucial to the actual pattern, so we’re omitting them.
5. The **Client** works with both collections and iterators via their interfaces. This way the client isn’t coupled to concrete classes, allowing you to use various collections and iterators with the same client code.
   - Typically, clients don’t create iterators on their own, but instead get them from collections. Yet, in certain cases, the client can create one directly; for example, when the client defines its own special iterator.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250130111745.png)

<!-- ExampleEnd -->

Tags: diagram

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Iterator** design patternu? (4 + 2)

Back:

✅ *Single Responsibility Principle*. You can clean up the client code and the collections by extracting bulky traversal algorithms into separate classes.

✅ *Open/Closed Principle*. You can implement new types of collections and iterators and pass them to existing code without breaking anything.

✅ You can iterate over the same collection in parallel because each iterator object contains its own iteration state.

✅ For the same reason, you can delay an iteration and continue it when needed.

❌ Applying the pattern can be an overkill if your app only works with simple collections.

❌ Using an iterator may be less efficient than going through elements of some specialized collections directly.

END

---

START
NI-SZZ

K čemu slouží **Mediator** design pattern?

Back:

Umožňuje sprostředkovávat komunikaci mezi objekty skrze mediatora. Díky tomu nebudou tak chaotické dependencies, protože objekty nebudou komunikovat napřímo.

![](../../Assets/Pasted%20image%2020250130111821.png)

<!-- ExplanationStart -->

**PROBLEM:**
Say you have a dialog for creating and editing customer profiles. It consists of various form controls such as text fields, checkboxes, buttons, etc.

![](../../Assets/Pasted%20image%2020250130111831.png)

Some of the form elements may interact with others. For instance, selecting the “I have a dog” checkbox may reveal a hidden text field for entering the dog’s name. Another example is the submit button that has to validate values of all fields before saving the data.

![](../../Assets/Pasted%20image%2020250130111835.png)

By having this logic implemented directly inside the code of the form elements you make these elements’ classes much harder to reuse in other forms of the app. For example, you won’t be able to use that checkbox class inside another form, because it’s coupled to the dog’s text field. You can use either all the classes involved in rendering the profile form, or none at all.

**SOLUTION:**
The Mediator pattern suggests that you should cease all direct communication between the components which you want to make independent of each other. Instead, these components must collaborate indirectly, by calling a special mediator object that redirects the calls to appropriate components. As a result, the components depend only on a single mediator class instead of being coupled to dozens of their colleagues.

In our example with the profile editing form, the dialog class itself may act as the mediator. Most likely, the dialog class is already aware of all of its sub-elements, so you won’t even need to introduce new dependencies into this class.

![](../../Assets/Pasted%20image%2020250130111853.png)

The most significant change happens to the actual form elements. Let’s consider the submit button. Previously, each time a user clicked the button, it had to validate the values of all individual form elements. Now its single job is to notify the dialog about the click. Upon receiving this notification, the dialog itself performs the validations or passes the task to the individual elements. Thus, instead of being tied to a dozen form elements, the button is only dependent on the dialog class.

You can go further and make the dependency even looser by extracting the common interface for all types of dialogs. The interface would declare the notification method which all form elements can use to notify the dialog about events happening to those elements. Thus, our submit button should now be able to work with any dialog that implements that interface.

This way, the Mediator pattern lets you encapsulate a complex web of relations between various objects inside a single mediator object. The fewer dependencies a class has, the easier it becomes to modify, extend or reuse that class.

<!-- ExplanationEnd -->

END

---

START
NI-SZZ

Jaká je struktura **Mediator** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130111915.png)

1. **Components** are various classes that contain some business logic. Each component has a reference to a mediator, declared with the type of the mediator interface. The component isn’t aware of the actual class of the mediator, so you can reuse the component in other programs by linking it to a different mediator.
2. The **Mediator** interface declares methods of communication with components, which usually include just a single notification method. Components may pass any context as arguments of this method, including their own objects, but only in such a way that no coupling occurs between a receiving component and the sender’s class.
3. **Concrete Mediators** encapsulate relations between various components. Concrete mediators often keep references to all components they manage and sometimes even manage their lifecycle.
4. Components must not be aware of other components. If something important happens within or to a component, it must only notify the mediator. When the mediator receives the notification, it can easily identify the sender, which might be just enough to decide what component should be triggered in return.
   - From a component’s perspective, it all looks like a total black box. The sender doesn’t know who’ll end up handling its request, and the receiver doesn’t know who sent the request in the first place.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250130111934.png)

<!-- ExampleEnd -->

Tags: diagram

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Mediator** design patternu? (4 + 1)

Back:

✅ *Single Responsibility Principle*. You can extract the communications between various components into a single place, making it easier to comprehend and maintain.

✅ *Open/Closed Principle*. You can introduce new mediators without having to change the actual components.

✅ You can reduce coupling between various components of a program.

✅ You can reuse individual components more easily.

❌ Over time a mediator can evolve into a [God Object](https://courses.fit.cvut.cz/antipatterns/god-object).

END

---

START
NI-SZZ

K čemu slouží **Memento** design pattern?

Back:

Umožňuje ukládat a načítat stav objektu, aniž bychom museli znát jeho vnitřní reprezentaci.

![](../../Assets/Pasted%20image%2020250130112002.png)

<!-- ExplanationStart -->

**PROBLEM:**
Imagine that you’re creating a text editor app. In addition to simple text editing, your editor can format text, insert inline images, etc.

At some point, you decided to let users undo any operations carried out on the text. This feature has become so common over the years that nowadays people expect every app to have it. For the implementation, you chose to take the direct approach. Before performing any operation, the app records the state of all objects and saves it in some storage. Later, when a user decides to revert an action, the app fetches the latest snapshot from the history and uses it to restore the state of all objects.

![](../../Assets/Pasted%20image%2020250130112019.png)

Let’s think about those state snapshots. How exactly would you produce one? You’d probably need to go over all the fields in an object and copy their values into storage. However, this would only work if the object had quite relaxed access restrictions to its contents. Unfortunately, most real objects won’t let others peek inside them that easily, hiding all significant data in private fields.

Ignore that problem for now and let’s assume that our objects behave like hippies: preferring open relations and keeping their state public. While this approach would solve the immediate problem and let you produce snapshots of objects’ states at will, it still has some serious issues. In the future, you might decide to refactor some of the editor classes, or add or remove some of the fields. Sounds easy, but this would also require changing the classes responsible for copying the state of the affected objects.

![](../../Assets/Pasted%20image%2020250130112023.png)

But there’s more. Let’s consider the actual “snapshots” of the editor’s state. What data does it contain? At a bare minimum, it must contain the actual text, cursor coordinates, current scroll position, etc. To make a snapshot, you’d need to collect these values and put them into some kind of container.

Most likely, you’re going to store lots of these container objects inside some list that would represent the history. Therefore the containers would probably end up being objects of one class. The class would have almost no methods, but lots of fields that mirror the editor’s state. To allow other objects to write and read data to and from a snapshot, you’d probably need to make its fields public. That would expose all the editor’s states, private or not. Other classes would become dependent on every little change to the snapshot class, which would otherwise happen within private fields and methods without affecting outer classes.

It looks like we’ve reached a dead end: you either expose all internal details of classes, making them too fragile, or restrict access to their state, making it impossible to produce snapshots. Is there any other way to implement the “undo”?

**SOLUTION:**
All problems that we’ve just experienced are caused by broken encapsulation. Some objects try to do more than they are supposed to. To collect the data required to perform some action, they invade the private space of other objects instead of letting these objects perform the actual action.

The Memento pattern delegates creating the state snapshots to the actual owner of that state, the *originator* object. Hence, instead of other objects trying to copy the editor’s state from the “outside,” the editor class itself can make the snapshot since it has full access to its own state.

The pattern suggests storing the copy of the object’s state in a special object called *memento*. The contents of the memento aren’t accessible to any other object except the one that produced it. Other objects must communicate with mementos using a limited interface which may allow fetching the snapshot’s metadata (creation time, the name of the performed operation, etc.), but not the original object’s state contained in the snapshot.

![](../../Assets/Pasted%20image%2020250130112039.png)

Such a restrictive policy lets you store mementos inside other objects, usually called *caretakers*. Since the caretaker works with the memento only via the limited interface, it’s not able to tamper with the state stored inside the memento. At the same time, the originator has access to all fields inside the memento, allowing it to restore its previous state at will.

In our text editor example, we can create a separate history class to act as the caretaker. A stack of mementos stored inside the caretaker will grow each time the editor is about to execute an operation. You could even render this stack within the app’s UI, displaying the history of previously performed operations to a user.

When a user triggers the undo, the history grabs the most recent memento from the stack and passes it back to the editor, requesting a roll-back. Since the editor has full access to the memento, it changes its own state with the values taken from the memento.

<!-- ExplanationEnd -->

END

---

START
NI-SZZ

Jaká je struktura **Memento** design patternu - **Implementation based on nested classes**?

Back:

The classic implementation of the pattern relies on support for nested classes, available in many popular programming languages (such as C++, C#, and Java).
![](../../Assets/Pasted%20image%2020250130112125.png)

1. The **Originator** class can produce snapshots of its own state, as well as restore its state from snapshots when needed.
2. The **Memento** is a value object that acts as a snapshot of the originator’s state. It’s a common practice to make the memento immutable and pass it the data only once, via the constructor.
3. The **Caretaker** knows not only “when” and “why” to capture the originator’s state, but also when the state should be restored.
   - A caretaker can keep track of the originator’s history by storing a stack of mementos. When the originator has to travel back in history, the caretaker fetches the topmost memento from the stack and passes it to the originator’s restoration method.
4. In this implementation, the memento class is nested inside the originator. This lets the originator access the fields and methods of the memento, even though they’re declared private. On the other hand, the caretaker has very limited access to the memento’s fields and methods, which lets it store mementos in a stack but not tamper with their state.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250130112208.png)

<!-- ExampleEnd -->

Tags: diagram

END

---

START
NI-SZZ

Jaká je struktura **Memento** design patternu - **Implementation based on an intermediate interface**?

Back:

There’s an alternative implementation, suitable for programming languages that don’t support nested classes (yeah, PHP, I’m talking about you).

![](../../Assets/Pasted%20image%2020250130112242.png)

1. In the absence of nested classes, you can restrict access to the memento’s fields by establishing a convention that caretakers can work with a memento only through an explicitly declared intermediary interface, which would only declare methods related to the memento’s metadata.
2. On the other hand, originators can work with a memento object directly, accessing fields and methods declared in the memento class. The downside of this approach is that you need to declare all members of the memento public.

Tags: diagram

END

---

START
NI-SZZ

Jaká je struktura **Memento** design patternu - **Implementation with even stricter encapsulation**?

Back:

There’s another implementation which is useful when you don’t want to leave even the slightest chance of other classes accessing the state of the originator through the memento.

![](../../Assets/Pasted%20image%2020250130112308.png)

1. This implementation allows having multiple types of originators and mementos. Each originator works with a corresponding memento class. Neither originators nor mementos expose their state to anyone.
2. Caretakers are now explicitly restricted from changing the state stored in mementos. Moreover, the caretaker class becomes independent from the originator because the restoration method is now defined in the memento class.
3. Each memento becomes linked to the originator that produced it. The originator passes itself to the memento’s constructor, along with the values of its state. Thanks to the close relationship between these classes, a memento can restore the state of its originator, given that the latter has defined the appropriate setters.

Tags: diagram

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Memento** design patternu? (2 + 3)

Back:

✅ You can produce snapshots of the object’s state without violating its encapsulation.

✅ You can simplify the originator’s code by letting the caretaker maintain the history of the originator’s state.

❌ The app might consume lots of RAM if clients create mementos too often.

❌ Caretakers should track the originator’s lifecycle to be able to destroy obsolete mementos.

❌ Most dynamic programming languages, such as PHP, Python and JavaScript, can’t guarantee that the state within the memento stays untouched.

END

---

START
NI-SZZ

K čemu slouží **Observer** design pattern?

Back:

Umožňuje definovat subscribtion mechanismus, kde jsou objekty notifikovány, pokud nastane nějaká událost na objektu, který observují.

![](../../Assets/Pasted%20image%2020250130112355.png)

<!-- ExplanationStart -->

**PROBLEM:**
Imagine that you have two types of objects: a `Customer` and a `Store`. The customer is very interested in a particular brand of product (say, it’s a new model of the iPhone) which should become available in the store very soon.

The customer could visit the store every day and check product availability. But while the product is still en route, most of these trips would be pointless.

![](../../Assets/Pasted%20image%2020250130112404.png)

On the other hand, the store could send tons of emails (which might be considered spam) to all customers each time a new product becomes available. This would save some customers from endless trips to the store. At the same time, it’d upset other customers who aren’t interested in new products.

It looks like we’ve got a conflict. Either the customer wastes time checking product availability or the store wastes resources notifying the wrong customers.

**SOLUTION:**
The object that has some interesting state is often called *subject*, but since it’s also going to notify other objects about the changes to its state, we’ll call it *publisher*. All other objects that want to track changes to the publisher’s state are called *subscribers*.

The Observer pattern suggests that you add a subscription mechanism to the publisher class so individual objects can subscribe to or unsubscribe from a stream of events coming from that publisher. Fear not! Everything isn’t as complicated as it sounds. In reality, this mechanism consists of 1) an array field for storing a list of references to subscriber objects and 2) several public methods which allow adding subscribers to and removing them from that list.

![](../../Assets/Pasted%20image%2020250130112416.png)

Now, whenever an important event happens to the publisher, it goes over its subscribers and calls the specific notification method on their objects.

Real apps might have dozens of different subscriber classes that are interested in tracking events of the same publisher class. You wouldn’t want to couple the publisher to all of those classes. Besides, you might not even know about some of them beforehand if your publisher class is supposed to be used by other people.

That’s why it’s crucial that all subscribers implement the same interface and that the publisher communicates with them only via that interface. This interface should declare the notification method along with a set of parameters that the publisher can use to pass some contextual data along with the notification.

![](../../Assets/Pasted%20image%2020250130112420.png)

If your app has several different types of publishers and you want to make your subscribers compatible with all of them, you can go even further and make all publishers follow the same interface. This interface would only need to describe a few subscription methods. The interface would allow subscribers to observe publishers’ states without coupling to their concrete classes.

<!-- ExplanationEnd -->

END

---

START
NI-SZZ

Jaká je struktura **Observer** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130112426.png)

1. The **Publisher** issues events of interest to other objects. These events occur when the publisher changes its state or executes some behaviors. Publishers contain a subscription infrastructure that lets new subscribers join and current subscribers leave the list.
2. When a new event happens, the publisher goes over the subscription list and calls the notification method declared in the subscriber interface on each subscriber object.
3. The **Subscriber** interface declares the notification interface. In most cases, it consists of a single `update` method. The method may have several parameters that let the publisher pass some event details along with the update.
4. **Concrete Subscribers** perform some actions in response to notifications issued by the publisher. All of these classes must implement the same interface so the publisher isn’t coupled to concrete classes.
5. Usually, subscribers need some contextual information to handle the update correctly. For this reason, publishers often pass some context data as arguments of the notification method. The publisher can pass itself as an argument, letting subscriber fetch any required data directly.
6. The **Client** creates publisher and subscriber objects separately and then registers subscribers for publisher updates.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250130112440.png)

<!-- ExampleEnd -->

Tags: diagram

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Observer** design patternu? (2 + 1)

Back:

✅ *Open/Closed Principle*. You can introduce new subscriber classes without having to change the publisher’s code (and vice versa if there’s a publisher interface).

✅ You can establish relations between objects at runtime.

❌ Subscribers are notified in random order.

END

---

START
NI-SZZ

K čemu slouží **State** design pattern?

Back:

Umožňuje měnit chování objektu na základě jeho vnitřního stavu. Stav je reprezentovaný třídou.

![](../../Assets/Pasted%20image%2020250130112522.png)

<!-- ExplanationStart -->

**PROBLEM:**
The State pattern is closely related to the concept of a *Finite-State Machine*.

![](../../Assets/Pasted%20image%2020250130112600.png)

The main idea is that, at any given moment, there’s a *finite* number of *states* which a program can be in. Within any unique state, the program behaves differently, and the program can be switched from one state to another instantaneously. However, depending on a current state, the program may or may not switch to certain other states. These switching rules, called *transitions*, are also finite and predetermined.

You can also apply this approach to objects. Imagine that we have a `Document` class. A document can be in one of three states: `Draft`, `Moderation` and `Published`. The `publish` method of the document works a little bit differently in each state:

- In `Draft`, it moves the document to moderation.
- In `Moderation`, it makes the document public, but only if the current user is an administrator.
- In `Published`, it doesn’t do anything at all.

![](../../Assets/Pasted%20image%2020250130112605.png)

State machines are usually implemented with lots of conditional statements (`if` or `switch`) that select the appropriate behavior depending on the current state of the object. Usually, this “state” is just a set of values of the object’s fields. Even if you’ve never heard about finite-state machines before, you’ve probably implemented a state at least once. Does the following code structure ring a bell?

```scala
class Document is
    field state: string
    // ...
    method publish() is
        switch (state)
            "draft":
                state = "moderation"
                break
            "moderation":
                if (currentUser.role == "admin")
                    state = "published"
                break
            "published":
                // Do nothing.
                break
    // ...
```

The biggest weakness of a state machine based on conditionals reveals itself once we start adding more and more states and state-dependent behaviors to the `Document` class. Most methods will contain monstrous conditionals that pick the proper behavior of a method according to the current state. Code like this is very difficult to maintain because any change to the transition logic may require changing state conditionals in every method.

The problem tends to get bigger as a project evolves. It’s quite difficult to predict all possible states and transitions at the design stage. Hence, a lean state machine built with a limited set of conditionals can grow into a bloated mess over time.

**SOLUTION:**
The State pattern suggests that you create new classes for all possible states of an object and extract all state-specific behaviors into these classes.

Instead of implementing all behaviors on its own, the original object, called *context*, stores a reference to one of the state objects that represents its current state, and delegates all the state-related work to that object.

![](../../Assets/Pasted%20image%2020250130112627.png)

To transition the context into another state, replace the active state object with another object that represents that new state. This is possible only if all state classes follow the same interface and the context itself works with these objects through that interface.

This structure may look similar to the [Strategy](https://courses.fit.cvut.cz/NI-ADP/materials/design-patterns/behavioral-patterns/strategy.html) pattern, but there’s one key difference. In the State pattern, the particular states may be aware of each other and initiate transitions from one state to another, whereas strategies almost never know about each other.

<!-- ExplanationEnd -->

END

---

START
NI-SZZ

Jaká je struktura **State** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130112635.png)

1. **Context** stores a reference to one of the concrete state objects and delegates to it all state-specific work. The context communicates with the state object via the state interface. The context exposes a setter for passing it a new state object.
2. The **State** interface declares the state-specific methods. These methods should make sense for all concrete states because you don’t want some of your states to have useless methods that will never be called.
3. **Concrete States** provide their own implementations for the state-specific methods. To avoid duplication of similar code across multiple states, you may provide intermediate abstract classes that encapsulate some common behavior.
   - State objects may store a backreference to the context object. Through this reference, the state can fetch any required info from the context object, as well as initiate state transitions.
4. Both context and concrete states can set the next state of the context and perform the actual state transition by replacing the state object linked to the context.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250130112651.png)

<!-- ExampleEnd -->

Tags: diagram

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **State** design patternu? (3 + 1)

Back:

✅ *Single Responsibility Principle*. Organize the code related to particular states into separate classes.

✅ *Open/Closed Principle*. Introduce new states without changing existing state classes or the context.

✅ Simplify the code of the context by eliminating bulky state machine conditionals.

❌ Applying the pattern can be overkill if a state machine has only a few states or rarely changes.

END

---

START
NI-SZZ

K čemu slouží **Strategy** design pattern?

Back:

Umožňuje mi zadefinovat různé strategie/algoritmy v oddělených třídách. Díky tomu pak můžu tyto strategie různě prohazovat a vybírat.

![](../../Assets/Pasted%20image%2020250130112736.png)

<!-- ExplanationStart -->

**PROBLEM:**
One day you decided to create a navigation app for casual travelers. The app was centered around a beautiful map which helped users quickly orient themselves in any city.

One of the most requested features for the app was automatic route planning. A user should be able to enter an address and see the fastest route to that destination displayed on the map.

The first version of the app could only build the routes over roads. People who traveled by car were bursting with joy. But apparently, not everybody likes to drive on their vacation. So with the next update, you added an option to build walking routes. Right after that, you added another option to let people use public transport in their routes.

However, that was only the beginning. Later you planned to add route building for cyclists. And even later, another option for building routes through all of a city’s tourist attractions.

![](../../Assets/Pasted%20image%2020250130112746.png)

While from a business perspective the app was a success, the technical part caused you many headaches. Each time you added a new routing algorithm, the main class of the navigator doubled in size. At some point, the beast became too hard to maintain.

Any change to one of the algorithms, whether it was a simple bug fix or a slight adjustment of the street score, affected the whole class, increasing the chance of creating an error in already-working code.

In addition, teamwork became inefficient. Your teammates, who had been hired right after the successful release, complain that they spend too much time resolving merge conflicts. Implementing a new feature requires you to change the same huge class, conflicting with the code produced by other people.

**SOLUTION:**
The Strategy pattern suggests that you take a class that does something specific in a lot of different ways and extract all of these algorithms into separate classes called *strategies*.

The original class, called *context*, must have a field for storing a reference to one of the strategies. The context delegates the work to a linked strategy object instead of executing it on its own.

The context isn’t responsible for selecting an appropriate algorithm for the job. Instead, the client passes the desired strategy to the context. In fact, the context doesn’t know much about strategies. It works with all strategies through the same generic interface, which only exposes a single method for triggering the algorithm encapsulated within the selected strategy.

This way the context becomes independent of concrete strategies, so you can add new algorithms or modify existing ones without changing the code of the context or other strategies.

![](../../Assets/Pasted%20image%2020250130112758.png)

In our navigation app, each routing algorithm can be extracted to its own class with a single `buildRoute` method. The method accepts an origin and destination and returns a collection of the route’s checkpoints.

Even though given the same arguments, each routing class might build a different route, the main navigator class doesn’t really care which algorithm is selected since its primary job is to render a set of checkpoints on the map. The class has a method for switching the active routing strategy, so its clients, such as the buttons in the user interface, can replace the currently selected routing behavior with another one.

<!-- ExplanationEnd -->

END

---

START
NI-SZZ

Jaká je struktura **Strategy** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130112811.png)

1. The **Context** maintains a reference to one of the concrete strategies and communicates with this object only via the strategy interface.
2. The **Strategy** interface is common to all concrete strategies. It declares a method the context uses to execute a strategy.
3. **Concrete Strategies** implement different variations of an algorithm the context uses.
4. The context calls the execution method on the linked strategy object each time it needs to run the algorithm. The context doesn’t know what type of strategy it works with or how the algorithm is executed.
5. The **Client** creates a specific strategy object and passes it to the context. The context exposes a setter which lets clients replace the strategy associated with the context at runtime.

Tags: diagram

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Strategy** design patternu? (4 + 3)

Back:

✅ You can swap algorithms used inside an object at runtime.

✅ You can isolate the implementation details of an algorithm from the code that uses it.

✅ You can replace inheritance with composition.

✅ *Open/Closed Principle*. You can introduce new strategies without having to change the context.

❌ If you only have a couple of algorithms and they rarely change, there’s no real reason to overcomplicate the program with new classes and interfaces that come along with the pattern.

❌ Clients must be aware of the differences between strategies to be able to select a proper one.

❌ A lot of modern programming languages have functional type support that lets you implement different versions of an algorithm inside a set of anonymous functions. Then you could use these functions exactly as you’d have used the strategy objects, but without bloating your code with extra classes and interfaces.

END

---

START
NI-SZZ

K čemu slouží **Template Method** design pattern?

Back:

Umožňuje vytvořit funkci, která definuje strukturu nějakého algoritmu a volá nějaké metody, které reprezentují kroky daného algoritmu. Tyto metody potom mohou být přepsány v podtřídách.

Díky tomu takto vznikne "kostra" algoritmu a mohu v podtřídách přepisovat jednotlivé kroky algoritmu.

![](../../Assets/Pasted%20image%2020250130112928.png)

<!-- ExplanationStart -->

**PROBLEM:**
Imagine that you’re creating a data mining application that analyzes corporate documents. Users feed the app documents in various formats (PDF, DOC, CSV), and it tries to extract meaningful data from these docs in a uniform format.

The first version of the app could work only with DOC files. In the following version, it was able to support CSV files. A month later, you “taught” it to extract data from PDF files.

![](../../Assets/Pasted%20image%2020250130112940.png)

At some point, you noticed that all three classes have a lot of similar code. While the code for dealing with various data formats was entirely different in all classes, the code for data processing and analysis is almost identical. Wouldn’t it be great to get rid of the code duplication, leaving the algorithm structure intact?

There was another problem related to client code that used these classes. It had lots of conditionals that picked a proper course of action depending on the class of the processing object. If all three processing classes had a common interface or a base class, you’d be able to eliminate the conditionals in client code and use polymorphism when calling methods on a processing object.

**SOLUTION:**
The Template Method pattern suggests that you break down an algorithm into a series of steps, turn these steps into methods, and put a series of calls to these methods inside a single *template method.* The steps may either be `abstract`, or have some default implementation. To use the algorithm, the client is supposed to provide its own subclass, implement all abstract steps, and override some of the optional ones if needed (but not the template method itself).

Let’s see how this will play out in our data mining app. We can create a base class for all three parsing algorithms. This class defines a template method consisting of a series of calls to various document-processing steps.

![](../../Assets/Pasted%20image%2020250130112958.png)

At first, we can declare all steps `abstract`, forcing the subclasses to provide their own implementations for these methods. In our case, subclasses already have all necessary implementations, so the only thing we might need to do is adjust signatures of the methods to match the methods of the superclass.

Now, let’s see what we can do to get rid of the duplicate code. It looks like the code for opening/closing files and extracting/parsing data is different for various data formats, so there’s no point in touching those methods. However, implementation of other steps, such as analyzing the raw data and composing reports, is very similar, so it can be pulled up into the base class, where subclasses can share that code.

As you can see, we’ve got two types of steps:

- *abstract steps* must be implemented by every subclass
- *optional steps* already have some default implementation, but still can be overridden if needed

There’s another type of step, called *hooks*. A hook is an optional step with an empty body. A template method would work even if a hook isn’t overridden. Usually, hooks are placed before and after crucial steps of algorithms, providing subclasses with additional extension points for an algorithm.

<!-- ExplanationEnd -->

END

---

START
NI-SZZ

Jaká je struktura **Template Method** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130113005.png)

1. The **Abstract Class** declares methods that act as steps of an algorithm, as well as the actual template method which calls these methods in a specific order. The steps may either be declared `abstract` or have some default implementation.
2. **Concrete Classes** can override all of the steps, but not the template method itself.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250130113014.png)

<!-- ExampleEnd -->

Tags: diagram

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Template Method** design patternu? (2 + 3)

Back:

✅ You can let clients override only certain parts of a large algorithm, making them less affected by changes that happen to other parts of the algorithm.

✅ You can pull the duplicate code into a superclass.

❌ Some clients may be limited by the provided skeleton of an algorithm.

❌ You might violate the *Liskov Substitution Principle* by suppressing a default step implementation via a subclass.

❌ Template methods tend to be harder to maintain the more steps they have.

END

---

START
NI-SZZ

K čemu slouží **Visitor** design pattern?

Back:

Umožňuje mi oddělit algoritmy od objektů, na kterých pracují.

![](../../Assets/Pasted%20image%2020250130113142.png)

<!-- ExplanationStart -->

**PROBLEM:**
Imagine that your team develops an app which works with geographic information structured as one colossal graph. Each node of the graph may represent a complex entity such as a city, but also more granular things like industries, sightseeing areas, etc. The nodes are connected with others if there’s a road between the real objects that they represent. Under the hood, each node type is represented by its own class, while each specific node is an object.

![](../../Assets/Pasted%20image%2020250130113159.png)

At some point, you got a task to implement exporting the graph into XML format. At first, the job seemed pretty straightforward. You planned to add an export method to each node class and then leverage recursion to go over each node of the graph, executing the export method. The solution was simple and elegant: thanks to polymorphism, you weren’t coupling the code which called the export method to concrete classes of nodes.

Unfortunately, the system architect refused to allow you to alter existing node classes. He said that the code was already in production and he didn’t want to risk breaking it because of a potential bug in your changes.

![](../../Assets/Pasted%20image%2020250130113203.png)

Besides, he questioned whether it makes sense to have the XML export code within the node classes. The primary job of these classes was to work with geodata. The XML export behavior would look alien there.

There was another reason for the refusal. It was highly likely that after this feature was implemented, someone from the marketing department would ask you to provide the ability to export into a different format, or request some other weird stuff. This would force you to change those precious and fragile classes again.

**SOLUTION:**
The Visitor pattern suggests that you place the new behavior into a separate class called *visitor*, instead of trying to integrate it into existing classes. The original object that had to perform the behavior is now passed to one of the visitor’s methods as an argument, providing the method access to all necessary data contained within the object.

Now, what if that behavior can be executed over objects of different classes? For example, in our case with XML export, the actual implementation will probably be a little bit different across various node classes. Thus, the visitor class may define not one, but a set of methods, each of which could take arguments of different types, like this:

```javascript
class ExportVisitor implements Visitor is
    method doForCity(City c) { ... }
    method doForIndustry(Industry f) { ... }
    method doForSightSeeing(SightSeeing ss) { ... }
    // ...
```

But how exactly would we call these methods, especially when dealing with the whole graph? These methods have different signatures, so we can’t use polymorphism. To pick a proper visitor method that’s able to process a given object, we’d need to check its class. Doesn’t this sound like a nightmare?

```javascript
foreach (Node node in graph)
    if (node instanceof City)
        exportVisitor.doForCity((City) node)
    if (node instanceof Industry)
        exportVisitor.doForIndustry((Industry) node)
    // ...
}
```

You might ask, why don’t we use method overloading? That’s when you give all methods the same name, even if they support different sets of parameters. Unfortunately, even assuming that our programming language supports it at all (as Java and C# do), it won’t help us. Since the exact class of a node object is unknown in advance, the overloading mechanism won’t be able to determine the correct method to execute. It’ll default to the method that takes an object of the base `Node` class.

However, the Visitor pattern addresses this problem. It uses a technique called [Double Dispatch](https://courses.fit.cvut.cz/NI-ADP/materials/design-patterns/behavioral-patterns/visitor-double-dispatch.html), which helps to execute the proper method on an object without cumbersome conditionals. Instead of letting the client select a proper version of the method to call, how about we delegate this choice to objects we’re passing to the visitor as an argument? Since the objects know their own classes, they’ll be able to pick a proper method on the visitor less awkwardly. They “accept” a visitor and tell it what visiting method should be executed.

```javascript
// Client code
foreach (Node node in graph)
    node.accept(exportVisitor)

// City
class City is
    method accept(Visitor v) is
        v.doForCity(this)
    // ...

// Industry
class Industry is
    method accept(Visitor v) is
        v.doForIndustry(this)
    // ...
```

I confess. We had to change the node classes after all. But at least the change is trivial and it lets us add further behaviors without altering the code once again.

Now, if we extract a common interface for all visitors, all existing nodes can work with any visitor you introduce into the app. If you find yourself introducing a new behavior related to nodes, all you have to do is implement a new visitor class.

<!-- ExplanationEnd -->

END

---

START
NI-SZZ

Jaká je struktura **Visitor** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130113211.png)

1. The **Visitor** interface declares a set of visiting methods that can take concrete elements of an object structure as arguments. These methods may have the same names if the program is written in a language that supports overloading, but the type of their parameters must be different.
2. Each **Concrete Visitor** implements several versions of the same behaviors, tailored for different concrete element classes.
3. The **Element** interface declares a method for “accepting” visitors. This method should have one parameter declared with the type of the visitor interface.
4. Each **Concrete Element** must implement the acceptance method. The purpose of this method is to redirect the call to the proper visitor’s method corresponding to the current element class. Be aware that even if a base element class implements this method, all subclasses must still override this method in their own classes and call the appropriate method on the visitor object.
5. The **Client** usually represents a collection or some other complex object (for example, a [Composite](https://courses.fit.cvut.cz/NI-ADP/materials/design-patterns/structural-patterns/composite.html) tree). Usually, clients aren’t aware of all the concrete element classes because they work with objects from that collection via some abstract interface.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250130113259.png)

<!-- ExampleEnd -->

Tags: diagram

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Visitor** design patternu? (3 + 2)

Back:

✅ *Open/Closed Principle*. You can introduce a new behavior that can work with objects of different classes without changing these classes.

✅ *Single Responsibility Principle*. You can move multiple versions of the same behavior into the same class.

✅ A visitor object can accumulate some useful information while working with various objects. This might be handy when you want to traverse some complex object structure, such as an object tree, and apply the visitor to each object of this structure.

❌ You need to update all visitors each time a class gets added to or removed from the element hierarchy.

❌ Visitors might lack the necessary access to the private fields and methods of the elements that they’re supposed to work with.

END

---

START
NI-SZZ

Jaké jsou **vzory pro chování objektů**? (11)

Back:

- **Command**
- **Chain of Responsibility**
- **Interpreter**
- **Iterator**
- **Mediator**
- **Memento**
- **Observer**
- **State**
- **Strategy**
- **Template Method**
- **Visitor**

END

---

START
NI-SZZ

K čemu slouží **Command** design pattern?

Back:

Pro nějakou akci/request/příkaz vytvoří samostatnou třídu, která obsahuje relevantní informace o dané akci. Díky tomu je možné akce například dávat do fronty, lze je ukládat a předávat si je v rámci programu.

![](../../Assets/Pasted%20image%2020250130111117.png)

<!-- ExplanationStart -->

**PROBLEM:**
Imagine that you’re working on a new text-editor app. Your current task is to create a toolbar with a bunch of buttons for various operations of the editor. You created a very neat `Button` class that can be used for buttons on the toolbar, as well as for generic buttons in various dialogs.

![](../../Assets/Pasted%20image%2020250130111134.png)

While all of these buttons look similar, they’re all supposed to do different things. Where would you put the code for the various click handlers of these buttons? The simplest solution is to create tons of subclasses for each place where the button is used. These subclasses would contain the code that would have to be executed on a button click.

![](../../Assets/Pasted%20image%2020250130111140.png)

Before long, you realize that this approach is deeply flawed. First, you have an enormous number of subclasses, and that would be okay if you weren’t risking breaking the code in these subclasses each time you modify the base `Button` class. Put simply, your GUI code has become awkwardly dependent on the volatile code of the business logic.

![](../../Assets/Pasted%20image%2020250130111144.png)

And here’s the ugliest part. Some operations, such as copying/pasting text, would need to be invoked from multiple places. For example, a user could click a small “Copy” button on the toolbar, or copy something via the context menu, or just hit `Ctrl+C` on the keyboard.

Initially, when our app only had the toolbar, it was okay to place the implementation of various operations into the button subclasses. In other words, having the code for copying text inside the `CopyButton` subclass was fine. But then, when you implement context menus, shortcuts, and other stuff, you have to either duplicate the operation’s code in many classes or make menus dependent on buttons, which is an even worse option.

**SOLUTION:**
Good software design is often based on the *principle of separation of concerns*, which usually results in breaking an app into layers. The most common example: a layer for the graphical user interface and another layer for the business logic. The GUI layer is responsible for rendering a beautiful picture on the screen, capturing any input and showing results of what the user and the app are doing. However, when it comes to doing something important, like calculating the trajectory of the moon or composing an annual report, the GUI layer delegates the work to the underlying layer of business logic.

In the code it might look like this: a GUI object calls a method of a business logic object, passing it some arguments. This process is usually described as one object sending another a *request*.

![](../../Assets/Pasted%20image%2020250130111158.png)

The Command pattern suggests that GUI objects shouldn’t send these requests directly. Instead, you should extract all of the request details, such as the object being called, the name of the method and the list of arguments into a separate _ command_ class with a single method that triggers this request.

Command objects serve as links between various GUI and business logic objects. From now on, the GUI object doesn’t need to know what business logic object will receive the request and how it’ll be processed. The GUI object just triggers the command, which handles all the details.

![](../../Assets/Pasted%20image%2020250130111202.png)

The next step is to make your commands implement the same interface. Usually it has just a single execution method that takes no parameters. This interface lets you use various commands with the same request sender, without coupling it to concrete classes of commands. As a bonus, now you can switch command objects linked to the sender, effectively changing the sender’s behavior at runtime.

You might have noticed one missing piece of the puzzle, which is the request parameters. A GUI object might have supplied the business-layer object with some parameters. Since the command execution method doesn’t have any parameters, how would we pass the request details to the receiver? It turns out the command should be either pre-configured with this data, or capable of getting it on its own.

![](../../Assets/Pasted%20image%2020250130111207.png)

Let’s get back to our text editor. After we apply the Command pattern, we no longer need all those button subclasses to implement various click behaviors. It’s enough to put a single field into the base `Button` class that stores a reference to a command object and make the button execute that command on a click.

You’ll implement a bunch of command classes for every possible operation and link them with particular buttons, depending on the buttons’ intended behavior.

Other GUI elements, such as menus, shortcuts or entire dialogs, can be implemented in the same way. They’ll be linked to a command which gets executed when a user interacts with the GUI element. As you’ve probably guessed by now, the elements related to the same operations will be linked to the same commands, preventing any code duplication.

As a result, commands become a convenient middle layer that reduces coupling between the GUI and business logic layers. And that’s only a fraction of the benefits that the Command pattern can offer!

<!-- ExplanationEnd -->

END

---

START
NI-SZZ

Jaká je struktura **Command** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130111213.png)

1. The **Sender** class (aka *invoker*) is responsible for initiating requests. This class must have a field for storing a reference to a command object. The sender triggers that command instead of sending the request directly to the receiver. Note that the sender isn’t responsible for creating the command object. Usually, it gets a pre-created command from the client via the constructor.
2. The **Command** interface usually declares just a single method for executing the command.
3. **Concrete Commands** implement various kinds of requests. A concrete command isn’t supposed to perform the work on its own, but rather to pass the call to one of the business logic objects. However, for the sake of simplifying the code, these classes can be merged.
   - Parameters required to execute a method on a receiving object can be declared as fields in the concrete command. You can make command objects immutable by only allowing the initialization of these fields via the constructor.
4. The **Receiver** class contains some business logic. Almost any object may act as a receiver. Most commands only handle the details of how a request is passed to the receiver, while the receiver itself does the actual work.
5. The **Client** creates and configures concrete command objects. The client must pass all of the request parameters, including a receiver instance, into the command’s constructor. After that, the resulting command may be associated with one or multiple senders.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250130111234.png)

<!-- ExampleEnd -->

Tags: diagram

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Command** design patternu? (5 + 1)

Back:

✅ *Single Responsibility Principle*. You can decouple classes that invoke operations from classes that perform these operations.

✅ *Open/Closed Principle*. You can introduce new commands into the app without breaking existing client code.

✅ You can implement undo/redo.

✅ You can implement deferred execution of operations.

✅ You can assemble a set of simple commands into a complex one.

❌ The code may become more complicated since you’re introducing a whole new layer between senders and receivers.

END

---

START
NI-SZZ

K čemu slouží **Chain of Responsibility** design pattern?

Back:

Umožňuje vytvořit řetězec handlerů, kterým se pošle nějaký request. Každý handler pak buď zprocesuje request a nebo ho pošle dál.

![](../../Assets/Pasted%20image%2020250130111323.png)

<!-- ExplanationStart -->

**PROBLEM:**
Imagine that you’re working on an online ordering system. You want to restrict access to the system so only authenticated users can create orders. Also, users who have administrative permissions must have full access to all orders.

After a bit of planning, you realized that these checks must be performed sequentially. The application can attempt to authenticate a user to the system whenever it receives a request that contains the user’s credentials. However, if those credentials aren’t correct and authentication fails, there’s no reason to proceed with any other checks.

![](../../Assets/Pasted%20image%2020250130111336.png)

During the next few months, you implemented several more of those sequential checks.

- One of your colleagues suggested that it’s unsafe to pass raw data straight to the ordering system. So you added an extra validation step to sanitize the data in a request.
- Later, somebody noticed that the system is vulnerable to brute force password cracking. To negate this, you promptly added a check that filters repeated failed requests coming from the same IP address.
- Someone else suggested that you could speed up the system by returning cached results on repeated requests containing the same data. Hence, you added another check which lets the request pass through to the system only if there’s no suitable cached response.

![](../../Assets/Pasted%20image%2020250130111341.png)

The code of the checks, which had already looked like a mess, became more and more bloated as you added each new feature. Changing one check sometimes affected the others. Worst of all, when you tried to reuse the checks to protect other components of the system, you had to duplicate some of the code since those components required some of the checks, but not all of them.

The system became very hard to comprehend and expensive to maintain. You struggled with the code for a while, until one day you decided to refactor the whole thing.

**SOLUTION:**
Like many other behavioral design patterns, the **Chain of Responsibility** relies on transforming particular behaviors into stand-alone objects called *handlers*. In our case, each check should be extracted to its own class with a single method that performs the check. The request, along with its data, is passed to this method as an argument.

The pattern suggests that you link these handlers into a chain. Each linked handler has a field for storing a reference to the next handler in the chain. In addition to processing a request, handlers pass the request further along the chain. The request travels along the chain until all handlers have had a chance to process it.

Here’s the best part: a handler can decide not to pass the request further down the chain and effectively stop any further processing.

In our example with ordering systems, a handler performs the processing and then decides whether to pass the request further down the chain. Assuming the request contains the right data, all the handlers can execute their primary behavior, whether it’s authentication checks or caching.

![](../../Assets/Pasted%20image%2020250130111401.png)

However, there’s a slightly different approach (and it’s a bit more canonical) in which, upon receiving a request, a handler decides whether it can process it. If it can, it doesn’t pass the request any further. So it’s either only one handler that processes the request or none at all. This approach is very common when dealing with events in stacks of elements within a graphical user interface.

For instance, when a user clicks a button, the event propagates through the chain of GUI elements that starts with the button, goes along its containers (like forms or panels), and ends up with the main application window. The event is processed by the first element in the chain that’s capable of handling it. This example is also noteworthy because it shows that a chain can always be extracted from an object tree.

![](../../Assets/Pasted%20image%2020250130111406.png)

It’s crucial that all handler classes implement the same interface. Each concrete handler should only care about the following one having the `execute` method. This way you can compose chains at runtime, using various handlers without coupling your code to their concrete classes.

<!-- ExplanationEnd -->

END

---

START
NI-SZZ

Jaká je struktura **Chain of Responsibility** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130111411.png)

1. The **Handler** declares the interface, common for all concrete handlers. It usually contains just a single method for handling requests, but sometimes it may also have another method for setting the next handler on the chain.
2. The **Base Handler** is an optional class where you can put the boilerplate code that’s common to all handler classes.
   - Usually, this class defines a field for storing a reference to the next handler. The clients can build a chain by passing a handler to the constructor or setter of the previous handler. The class may also implement the default handling behavior: it can pass execution to the next handler after checking for its existence.
3. **Concrete Handlers** contain the actual code for processing requests. Upon receiving a request, each handler must decide whether to process it and, additionally, whether to pass it along the chain.
   - Handlers are usually self-contained and immutable, accepting all necessary data just once via the constructor.
4. The **Client** may compose chains just once or compose them dynamically, depending on the application’s logic. Note that a request can be sent to any handler in the chain—it doesn’t have to be the first one.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250130111435.png)

<!-- ExampleEnd -->

Tags: diagram

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Chain of Responsibility** design patternu? (3 + 1)

Back:

✅ You can control the order of request handling.

✅ *Single Responsibility Principle*. You can decouple classes that invoke operations from classes that perform operations.

✅ *Open/Closed Principle*. You can introduce new handlers into the app without breaking the existing client code.

❌ Some requests may end up unhandled.

END

---

START
NI-SZZ

K čemu slouží **Interpreter** design pattern?

Back:

Slouží k vyhodnocování vět v nějakém jazyce podle dané gramatiky. Základní myšlenkou je pro každý terminál a neterminál gramatiky vytvořit třídu.

Následně je možné každou větu jazyka reprezentovat jako abstraktní syntaktický strom terminálů a neterminálů. Ten strom pak mohu vyhodnotit.

<!-- ExplanationStart -->

- Given a language, define a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language.
- Map a domain to a language, the language to a grammar, and the grammar to a hierarchical object-oriented design.

**PROBLEM:**
A class of problems occurs repeatedly in a well-defined and well-understood domain. If the domain were characterized with a “language”, then problems could be easily solved with an interpretation “engine”.

**SOLUTION:**
The Interpreter pattern discusses: defining a domain language (i.e. problem characterization) as a simple language grammar, representing domain rules as language sentences, and interpreting these sentences to solve the problem. The pattern uses a class to represent each grammar rule. And since grammars are usually hierarchical in structure, an inheritance hierarchy of rule classes maps nicely.

An abstract base class specifies the method `interpret()`. Each concrete subclass implements `interpret()` by accepting (as an argument) the current state of the language stream, and adding its contribution to the problem solving process.

<!-- ExplanationEnd -->

END

---

START
NI-SZZ

Jaká je struktura **Interpreter** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130111600.png)

Interpreter suggests modeling the domain with a recursive grammar. Each rule in the grammar is either a ‘composite’ (a rule that references other rules) or a terminal (a leaf node in a tree structure). Interpreter relies on the recursive traversal of the Composite pattern to interpret the ‘sentences’ it is asked to process.

Tags: diagram

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Interpreter** design patternu? (1 + 1)

Back:

✅ The interpreter design pattern is great for relatively simple grammar interpretation, which doesn’t need to evolve and extend much.

❌ When the grammar is getting more complex, it becomes harder to maintain.

END

---

START
NI-SZZ

K čemu slouží **Iterator** design pattern?

Back:

Umožňuje se pohybovat po prvcích nějaké datové struktury, aniž by exposoval tu samotnou strukturu (např. seznam, strom, atd.).

![](../../Assets/Pasted%20image%2020250130111638.png)

<!-- ExplanationStart -->

**PROBLEM:**
Collections are one of the most used data types in programming. Nonetheless, a collection is just a container for a group of objects.

![](../../Assets/Pasted%20image%2020250130111651.png)

Most collections store their elements in simple lists. However, some of them are based on stacks, trees, graphs and other complex data structures.

But no matter how a collection is structured, it must provide some way of accessing its elements so that other code can use these elements. There should be a way to go through each element of the collection without accessing the same elements over and over.

This may sound like an easy job if you have a collection based on a list. You just loop over all of the elements. But how do you sequentially traverse elements of a complex data structure, such as a tree? For example, one day you might be just fine with depth-first traversal of a tree. Yet the next day you might require breadth-first traversal. And the next week, you might need something else, like random access to the tree elements.

![](../../Assets/Pasted%20image%2020250130111656.png)

Adding more and more traversal algorithms to the collection gradually blurs its primary responsibility, which is efficient data storage. Additionally, some algorithms might be tailored for a specific application, so including them into a generic collection class would be weird.

On the other hand, the client code that’s supposed to work with various collections may not even care how they store their elements. However, since collections all provide different ways of accessing their elements, you have no option other than to couple your code to the specific collection classes.

**SOLUTION:**
The main idea of the Iterator pattern is to extract the traversal behavior of a collection into a separate object called an *iterator*.

![](../../Assets/Pasted%20image%2020250130111706.png)

In addition to implementing the algorithm itself, an iterator object encapsulates all of the traversal details, such as the current position and how many elements are left till the end. Because of this, several iterators can go through the same collection at the same time, independently of each other.

Usually, iterators provide one primary method for fetching elements of the collection. The client can keep running this method until it doesn’t return anything, which means that the iterator has traversed all of the elements.

All iterators must implement the same interface. This makes the client code compatible with any collection type or any traversal algorithm as long as there’s a proper iterator. If you need a special way to traverse a collection, you just create a new iterator class, without having to change the collection or the client.

<!-- ExplanationEnd -->

END

---

START
NI-SZZ

Jaká je struktura **Iterator** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130111712.png)

1. The **Iterator** interface declares the operations required for traversing a collection: fetching the next element, retrieving the current position, restarting iteration, etc.
2. **Concrete Iterators** implement specific algorithms for traversing a collection. The iterator object should track the traversal progress on its own. This allows several iterators to traverse the same collection independently of each other.
3. The **Collection** interface declares one or multiple methods for getting iterators compatible with the collection. Note that the return type of the methods must be declared as the iterator interface so that the concrete collections can return various kinds of iterators.
4. **Concrete Collections** return new instances of a particular concrete iterator class each time the client requests one. You might be wondering, where’s the rest of the collection’s code? Don’t worry, it should be in the same class. It’s just that these details aren’t crucial to the actual pattern, so we’re omitting them.
5. The **Client** works with both collections and iterators via their interfaces. This way the client isn’t coupled to concrete classes, allowing you to use various collections and iterators with the same client code.
   - Typically, clients don’t create iterators on their own, but instead get them from collections. Yet, in certain cases, the client can create one directly; for example, when the client defines its own special iterator.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250130111745.png)

<!-- ExampleEnd -->

Tags: diagram

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Iterator** design patternu? (4 + 2)

Back:

✅ *Single Responsibility Principle*. You can clean up the client code and the collections by extracting bulky traversal algorithms into separate classes.

✅ *Open/Closed Principle*. You can implement new types of collections and iterators and pass them to existing code without breaking anything.

✅ You can iterate over the same collection in parallel because each iterator object contains its own iteration state.

✅ For the same reason, you can delay an iteration and continue it when needed.

❌ Applying the pattern can be an overkill if your app only works with simple collections.

❌ Using an iterator may be less efficient than going through elements of some specialized collections directly.

END

---

START
NI-SZZ

K čemu slouží **Mediator** design pattern?

Back:

Umožňuje sprostředkovávat komunikaci mezi objekty skrze mediatora. Díky tomu nebudou tak chaotické dependencies, protože objekty nebudou komunikovat napřímo.

![](../../Assets/Pasted%20image%2020250130111821.png)

<!-- ExplanationStart -->

**PROBLEM:**
Say you have a dialog for creating and editing customer profiles. It consists of various form controls such as text fields, checkboxes, buttons, etc.

![](../../Assets/Pasted%20image%2020250130111831.png)

Some of the form elements may interact with others. For instance, selecting the “I have a dog” checkbox may reveal a hidden text field for entering the dog’s name. Another example is the submit button that has to validate values of all fields before saving the data.

![](../../Assets/Pasted%20image%2020250130111835.png)

By having this logic implemented directly inside the code of the form elements you make these elements’ classes much harder to reuse in other forms of the app. For example, you won’t be able to use that checkbox class inside another form, because it’s coupled to the dog’s text field. You can use either all the classes involved in rendering the profile form, or none at all.

**SOLUTION:**
The Mediator pattern suggests that you should cease all direct communication between the components which you want to make independent of each other. Instead, these components must collaborate indirectly, by calling a special mediator object that redirects the calls to appropriate components. As a result, the components depend only on a single mediator class instead of being coupled to dozens of their colleagues.

In our example with the profile editing form, the dialog class itself may act as the mediator. Most likely, the dialog class is already aware of all of its sub-elements, so you won’t even need to introduce new dependencies into this class.

![](../../Assets/Pasted%20image%2020250130111853.png)

The most significant change happens to the actual form elements. Let’s consider the submit button. Previously, each time a user clicked the button, it had to validate the values of all individual form elements. Now its single job is to notify the dialog about the click. Upon receiving this notification, the dialog itself performs the validations or passes the task to the individual elements. Thus, instead of being tied to a dozen form elements, the button is only dependent on the dialog class.

You can go further and make the dependency even looser by extracting the common interface for all types of dialogs. The interface would declare the notification method which all form elements can use to notify the dialog about events happening to those elements. Thus, our submit button should now be able to work with any dialog that implements that interface.

This way, the Mediator pattern lets you encapsulate a complex web of relations between various objects inside a single mediator object. The fewer dependencies a class has, the easier it becomes to modify, extend or reuse that class.

<!-- ExplanationEnd -->

END

---

START
NI-SZZ

Jaká je struktura **Mediator** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130111915.png)

1. **Components** are various classes that contain some business logic. Each component has a reference to a mediator, declared with the type of the mediator interface. The component isn’t aware of the actual class of the mediator, so you can reuse the component in other programs by linking it to a different mediator.
2. The **Mediator** interface declares methods of communication with components, which usually include just a single notification method. Components may pass any context as arguments of this method, including their own objects, but only in such a way that no coupling occurs between a receiving component and the sender’s class.
3. **Concrete Mediators** encapsulate relations between various components. Concrete mediators often keep references to all components they manage and sometimes even manage their lifecycle.
4. Components must not be aware of other components. If something important happens within or to a component, it must only notify the mediator. When the mediator receives the notification, it can easily identify the sender, which might be just enough to decide what component should be triggered in return.
   - From a component’s perspective, it all looks like a total black box. The sender doesn’t know who’ll end up handling its request, and the receiver doesn’t know who sent the request in the first place.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250130111934.png)

<!-- ExampleEnd -->

Tags: diagram

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Mediator** design patternu? (4 + 1)

Back:

✅ *Single Responsibility Principle*. You can extract the communications between various components into a single place, making it easier to comprehend and maintain.

✅ *Open/Closed Principle*. You can introduce new mediators without having to change the actual components.

✅ You can reduce coupling between various components of a program.

✅ You can reuse individual components more easily.

❌ Over time a mediator can evolve into a [God Object](https://courses.fit.cvut.cz/antipatterns/god-object).

END

---

START
NI-SZZ

K čemu slouží **Memento** design pattern?

Back:

Umožňuje ukládat a načítat stav objektu, aniž bychom museli znát jeho vnitřní reprezentaci.

![](../../Assets/Pasted%20image%2020250130112002.png)

<!-- ExplanationStart -->

**PROBLEM:**
Imagine that you’re creating a text editor app. In addition to simple text editing, your editor can format text, insert inline images, etc.

At some point, you decided to let users undo any operations carried out on the text. This feature has become so common over the years that nowadays people expect every app to have it. For the implementation, you chose to take the direct approach. Before performing any operation, the app records the state of all objects and saves it in some storage. Later, when a user decides to revert an action, the app fetches the latest snapshot from the history and uses it to restore the state of all objects.

![](../../Assets/Pasted%20image%2020250130112019.png)

Let’s think about those state snapshots. How exactly would you produce one? You’d probably need to go over all the fields in an object and copy their values into storage. However, this would only work if the object had quite relaxed access restrictions to its contents. Unfortunately, most real objects won’t let others peek inside them that easily, hiding all significant data in private fields.

Ignore that problem for now and let’s assume that our objects behave like hippies: preferring open relations and keeping their state public. While this approach would solve the immediate problem and let you produce snapshots of objects’ states at will, it still has some serious issues. In the future, you might decide to refactor some of the editor classes, or add or remove some of the fields. Sounds easy, but this would also require changing the classes responsible for copying the state of the affected objects.

![](../../Assets/Pasted%20image%2020250130112023.png)

But there’s more. Let’s consider the actual “snapshots” of the editor’s state. What data does it contain? At a bare minimum, it must contain the actual text, cursor coordinates, current scroll position, etc. To make a snapshot, you’d need to collect these values and put them into some kind of container.

Most likely, you’re going to store lots of these container objects inside some list that would represent the history. Therefore the containers would probably end up being objects of one class. The class would have almost no methods, but lots of fields that mirror the editor’s state. To allow other objects to write and read data to and from a snapshot, you’d probably need to make its fields public. That would expose all the editor’s states, private or not. Other classes would become dependent on every little change to the snapshot class, which would otherwise happen within private fields and methods without affecting outer classes.

It looks like we’ve reached a dead end: you either expose all internal details of classes, making them too fragile, or restrict access to their state, making it impossible to produce snapshots. Is there any other way to implement the “undo”?

**SOLUTION:**
All problems that we’ve just experienced are caused by broken encapsulation. Some objects try to do more than they are supposed to. To collect the data required to perform some action, they invade the private space of other objects instead of letting these objects perform the actual action.

The Memento pattern delegates creating the state snapshots to the actual owner of that state, the *originator* object. Hence, instead of other objects trying to copy the editor’s state from the “outside,” the editor class itself can make the snapshot since it has full access to its own state.

The pattern suggests storing the copy of the object’s state in a special object called *memento*. The contents of the memento aren’t accessible to any other object except the one that produced it. Other objects must communicate with mementos using a limited interface which may allow fetching the snapshot’s metadata (creation time, the name of the performed operation, etc.), but not the original object’s state contained in the snapshot.

![](../../Assets/Pasted%20image%2020250130112039.png)

Such a restrictive policy lets you store mementos inside other objects, usually called *caretakers*. Since the caretaker works with the memento only via the limited interface, it’s not able to tamper with the state stored inside the memento. At the same time, the originator has access to all fields inside the memento, allowing it to restore its previous state at will.

In our text editor example, we can create a separate history class to act as the caretaker. A stack of mementos stored inside the caretaker will grow each time the editor is about to execute an operation. You could even render this stack within the app’s UI, displaying the history of previously performed operations to a user.

When a user triggers the undo, the history grabs the most recent memento from the stack and passes it back to the editor, requesting a roll-back. Since the editor has full access to the memento, it changes its own state with the values taken from the memento.

<!-- ExplanationEnd -->

END

---

START
NI-SZZ

Jaká je struktura **Memento** design patternu - **Implementation based on nested classes**?

Back:

The classic implementation of the pattern relies on support for nested classes, available in many popular programming languages (such as C++, C#, and Java).
![](../../Assets/Pasted%20image%2020250130112125.png)

1. The **Originator** class can produce snapshots of its own state, as well as restore its state from snapshots when needed.
2. The **Memento** is a value object that acts as a snapshot of the originator’s state. It’s a common practice to make the memento immutable and pass it the data only once, via the constructor.
3. The **Caretaker** knows not only “when” and “why” to capture the originator’s state, but also when the state should be restored.
   - A caretaker can keep track of the originator’s history by storing a stack of mementos. When the originator has to travel back in history, the caretaker fetches the topmost memento from the stack and passes it to the originator’s restoration method.
4. In this implementation, the memento class is nested inside the originator. This lets the originator access the fields and methods of the memento, even though they’re declared private. On the other hand, the caretaker has very limited access to the memento’s fields and methods, which lets it store mementos in a stack but not tamper with their state.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250130112208.png)

<!-- ExampleEnd -->

Tags: diagram

END

---

START
NI-SZZ

Jaká je struktura **Memento** design patternu - **Implementation based on an intermediate interface**?

Back:

There’s an alternative implementation, suitable for programming languages that don’t support nested classes (yeah, PHP, I’m talking about you).

![](../../Assets/Pasted%20image%2020250130112242.png)

1. In the absence of nested classes, you can restrict access to the memento’s fields by establishing a convention that caretakers can work with a memento only through an explicitly declared intermediary interface, which would only declare methods related to the memento’s metadata.
2. On the other hand, originators can work with a memento object directly, accessing fields and methods declared in the memento class. The downside of this approach is that you need to declare all members of the memento public.

Tags: diagram

END

---

START
NI-SZZ

Jaká je struktura **Memento** design patternu - **Implementation with even stricter encapsulation**?

Back:

There’s another implementation which is useful when you don’t want to leave even the slightest chance of other classes accessing the state of the originator through the memento.

![](../../Assets/Pasted%20image%2020250130112308.png)

1. This implementation allows having multiple types of originators and mementos. Each originator works with a corresponding memento class. Neither originators nor mementos expose their state to anyone.
2. Caretakers are now explicitly restricted from changing the state stored in mementos. Moreover, the caretaker class becomes independent from the originator because the restoration method is now defined in the memento class.
3. Each memento becomes linked to the originator that produced it. The originator passes itself to the memento’s constructor, along with the values of its state. Thanks to the close relationship between these classes, a memento can restore the state of its originator, given that the latter has defined the appropriate setters.

Tags: diagram

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Memento** design patternu? (2 + 3)

Back:

✅ You can produce snapshots of the object’s state without violating its encapsulation.

✅ You can simplify the originator’s code by letting the caretaker maintain the history of the originator’s state.

❌ The app might consume lots of RAM if clients create mementos too often.

❌ Caretakers should track the originator’s lifecycle to be able to destroy obsolete mementos.

❌ Most dynamic programming languages, such as PHP, Python and JavaScript, can’t guarantee that the state within the memento stays untouched.

END

---

START
NI-SZZ

K čemu slouží **Observer** design pattern?

Back:

Umožňuje definovat subscribtion mechanismus, kde jsou objekty notifikovány, pokud nastane nějaká událost na objektu, který observují.

![](../../Assets/Pasted%20image%2020250130112355.png)

<!-- ExplanationStart -->

**PROBLEM:**
Imagine that you have two types of objects: a `Customer` and a `Store`. The customer is very interested in a particular brand of product (say, it’s a new model of the iPhone) which should become available in the store very soon.

The customer could visit the store every day and check product availability. But while the product is still en route, most of these trips would be pointless.

![](../../Assets/Pasted%20image%2020250130112404.png)

On the other hand, the store could send tons of emails (which might be considered spam) to all customers each time a new product becomes available. This would save some customers from endless trips to the store. At the same time, it’d upset other customers who aren’t interested in new products.

It looks like we’ve got a conflict. Either the customer wastes time checking product availability or the store wastes resources notifying the wrong customers.

**SOLUTION:**
The object that has some interesting state is often called *subject*, but since it’s also going to notify other objects about the changes to its state, we’ll call it *publisher*. All other objects that want to track changes to the publisher’s state are called *subscribers*.

The Observer pattern suggests that you add a subscription mechanism to the publisher class so individual objects can subscribe to or unsubscribe from a stream of events coming from that publisher. Fear not! Everything isn’t as complicated as it sounds. In reality, this mechanism consists of 1) an array field for storing a list of references to subscriber objects and 2) several public methods which allow adding subscribers to and removing them from that list.

![](../../Assets/Pasted%20image%2020250130112416.png)

Now, whenever an important event happens to the publisher, it goes over its subscribers and calls the specific notification method on their objects.

Real apps might have dozens of different subscriber classes that are interested in tracking events of the same publisher class. You wouldn’t want to couple the publisher to all of those classes. Besides, you might not even know about some of them beforehand if your publisher class is supposed to be used by other people.

That’s why it’s crucial that all subscribers implement the same interface and that the publisher communicates with them only via that interface. This interface should declare the notification method along with a set of parameters that the publisher can use to pass some contextual data along with the notification.

![](../../Assets/Pasted%20image%2020250130112420.png)

If your app has several different types of publishers and you want to make your subscribers compatible with all of them, you can go even further and make all publishers follow the same interface. This interface would only need to describe a few subscription methods. The interface would allow subscribers to observe publishers’ states without coupling to their concrete classes.

<!-- ExplanationEnd -->

END

---

START
NI-SZZ

Jaká je struktura **Observer** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130112426.png)

1. The **Publisher** issues events of interest to other objects. These events occur when the publisher changes its state or executes some behaviors. Publishers contain a subscription infrastructure that lets new subscribers join and current subscribers leave the list.
2. When a new event happens, the publisher goes over the subscription list and calls the notification method declared in the subscriber interface on each subscriber object.
3. The **Subscriber** interface declares the notification interface. In most cases, it consists of a single `update` method. The method may have several parameters that let the publisher pass some event details along with the update.
4. **Concrete Subscribers** perform some actions in response to notifications issued by the publisher. All of these classes must implement the same interface so the publisher isn’t coupled to concrete classes.
5. Usually, subscribers need some contextual information to handle the update correctly. For this reason, publishers often pass some context data as arguments of the notification method. The publisher can pass itself as an argument, letting subscriber fetch any required data directly.
6. The **Client** creates publisher and subscriber objects separately and then registers subscribers for publisher updates.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250130112440.png)

<!-- ExampleEnd -->

Tags: diagram

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Observer** design patternu? (2 + 1)

Back:

✅ *Open/Closed Principle*. You can introduce new subscriber classes without having to change the publisher’s code (and vice versa if there’s a publisher interface).

✅ You can establish relations between objects at runtime.

❌ Subscribers are notified in random order.

END

---

START
NI-SZZ

K čemu slouží **State** design pattern?

Back:

Umožňuje měnit chování objektu na základě jeho vnitřního stavu. Stav je reprezentovaný třídou.

![](../../Assets/Pasted%20image%2020250130112522.png)

<!-- ExplanationStart -->

**PROBLEM:**
The State pattern is closely related to the concept of a *Finite-State Machine*.

![](../../Assets/Pasted%20image%2020250130112600.png)

The main idea is that, at any given moment, there’s a *finite* number of *states* which a program can be in. Within any unique state, the program behaves differently, and the program can be switched from one state to another instantaneously. However, depending on a current state, the program may or may not switch to certain other states. These switching rules, called *transitions*, are also finite and predetermined.

You can also apply this approach to objects. Imagine that we have a `Document` class. A document can be in one of three states: `Draft`, `Moderation` and `Published`. The `publish` method of the document works a little bit differently in each state:

- In `Draft`, it moves the document to moderation.
- In `Moderation`, it makes the document public, but only if the current user is an administrator.
- In `Published`, it doesn’t do anything at all.

![](../../Assets/Pasted%20image%2020250130112605.png)

State machines are usually implemented with lots of conditional statements (`if` or `switch`) that select the appropriate behavior depending on the current state of the object. Usually, this “state” is just a set of values of the object’s fields. Even if you’ve never heard about finite-state machines before, you’ve probably implemented a state at least once. Does the following code structure ring a bell?

```scala
class Document is
    field state: string
    // ...
    method publish() is
        switch (state)
            "draft":
                state = "moderation"
                break
            "moderation":
                if (currentUser.role == "admin")
                    state = "published"
                break
            "published":
                // Do nothing.
                break
    // ...
```

The biggest weakness of a state machine based on conditionals reveals itself once we start adding more and more states and state-dependent behaviors to the `Document` class. Most methods will contain monstrous conditionals that pick the proper behavior of a method according to the current state. Code like this is very difficult to maintain because any change to the transition logic may require changing state conditionals in every method.

The problem tends to get bigger as a project evolves. It’s quite difficult to predict all possible states and transitions at the design stage. Hence, a lean state machine built with a limited set of conditionals can grow into a bloated mess over time.

**SOLUTION:**
The State pattern suggests that you create new classes for all possible states of an object and extract all state-specific behaviors into these classes.

Instead of implementing all behaviors on its own, the original object, called *context*, stores a reference to one of the state objects that represents its current state, and delegates all the state-related work to that object.

![](../../Assets/Pasted%20image%2020250130112627.png)

To transition the context into another state, replace the active state object with another object that represents that new state. This is possible only if all state classes follow the same interface and the context itself works with these objects through that interface.

This structure may look similar to the [Strategy](https://courses.fit.cvut.cz/NI-ADP/materials/design-patterns/behavioral-patterns/strategy.html) pattern, but there’s one key difference. In the State pattern, the particular states may be aware of each other and initiate transitions from one state to another, whereas strategies almost never know about each other.

<!-- ExplanationEnd -->

END

---

START
NI-SZZ

Jaká je struktura **State** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130112635.png)

1. **Context** stores a reference to one of the concrete state objects and delegates to it all state-specific work. The context communicates with the state object via the state interface. The context exposes a setter for passing it a new state object.
2. The **State** interface declares the state-specific methods. These methods should make sense for all concrete states because you don’t want some of your states to have useless methods that will never be called.
3. **Concrete States** provide their own implementations for the state-specific methods. To avoid duplication of similar code across multiple states, you may provide intermediate abstract classes that encapsulate some common behavior.
   - State objects may store a backreference to the context object. Through this reference, the state can fetch any required info from the context object, as well as initiate state transitions.
4. Both context and concrete states can set the next state of the context and perform the actual state transition by replacing the state object linked to the context.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250130112651.png)

<!-- ExampleEnd -->

Tags: diagram

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **State** design patternu? (3 + 1)

Back:

✅ *Single Responsibility Principle*. Organize the code related to particular states into separate classes.

✅ *Open/Closed Principle*. Introduce new states without changing existing state classes or the context.

✅ Simplify the code of the context by eliminating bulky state machine conditionals.

❌ Applying the pattern can be overkill if a state machine has only a few states or rarely changes.

END

---

START
NI-SZZ

K čemu slouží **Strategy** design pattern?

Back:

Umožňuje mi zadefinovat různé strategie/algoritmy v oddělených třídách. Díky tomu pak můžu tyto strategie různě prohazovat a vybírat.

![](../../Assets/Pasted%20image%2020250130112736.png)

<!-- ExplanationStart -->

**PROBLEM:**
One day you decided to create a navigation app for casual travelers. The app was centered around a beautiful map which helped users quickly orient themselves in any city.

One of the most requested features for the app was automatic route planning. A user should be able to enter an address and see the fastest route to that destination displayed on the map.

The first version of the app could only build the routes over roads. People who traveled by car were bursting with joy. But apparently, not everybody likes to drive on their vacation. So with the next update, you added an option to build walking routes. Right after that, you added another option to let people use public transport in their routes.

However, that was only the beginning. Later you planned to add route building for cyclists. And even later, another option for building routes through all of a city’s tourist attractions.

![](../../Assets/Pasted%20image%2020250130112746.png)

While from a business perspective the app was a success, the technical part caused you many headaches. Each time you added a new routing algorithm, the main class of the navigator doubled in size. At some point, the beast became too hard to maintain.

Any change to one of the algorithms, whether it was a simple bug fix or a slight adjustment of the street score, affected the whole class, increasing the chance of creating an error in already-working code.

In addition, teamwork became inefficient. Your teammates, who had been hired right after the successful release, complain that they spend too much time resolving merge conflicts. Implementing a new feature requires you to change the same huge class, conflicting with the code produced by other people.

**SOLUTION:**
The Strategy pattern suggests that you take a class that does something specific in a lot of different ways and extract all of these algorithms into separate classes called *strategies*.

The original class, called *context*, must have a field for storing a reference to one of the strategies. The context delegates the work to a linked strategy object instead of executing it on its own.

The context isn’t responsible for selecting an appropriate algorithm for the job. Instead, the client passes the desired strategy to the context. In fact, the context doesn’t know much about strategies. It works with all strategies through the same generic interface, which only exposes a single method for triggering the algorithm encapsulated within the selected strategy.

This way the context becomes independent of concrete strategies, so you can add new algorithms or modify existing ones without changing the code of the context or other strategies.

![](../../Assets/Pasted%20image%2020250130112758.png)

In our navigation app, each routing algorithm can be extracted to its own class with a single `buildRoute` method. The method accepts an origin and destination and returns a collection of the route’s checkpoints.

Even though given the same arguments, each routing class might build a different route, the main navigator class doesn’t really care which algorithm is selected since its primary job is to render a set of checkpoints on the map. The class has a method for switching the active routing strategy, so its clients, such as the buttons in the user interface, can replace the currently selected routing behavior with another one.

<!-- ExplanationEnd -->

END

---

START
NI-SZZ

Jaká je struktura **Strategy** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130112811.png)

1. The **Context** maintains a reference to one of the concrete strategies and communicates with this object only via the strategy interface.
2. The **Strategy** interface is common to all concrete strategies. It declares a method the context uses to execute a strategy.
3. **Concrete Strategies** implement different variations of an algorithm the context uses.
4. The context calls the execution method on the linked strategy object each time it needs to run the algorithm. The context doesn’t know what type of strategy it works with or how the algorithm is executed.
5. The **Client** creates a specific strategy object and passes it to the context. The context exposes a setter which lets clients replace the strategy associated with the context at runtime.

Tags: diagram

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Strategy** design patternu? (4 + 3)

Back:

✅ You can swap algorithms used inside an object at runtime.

✅ You can isolate the implementation details of an algorithm from the code that uses it.

✅ You can replace inheritance with composition.

✅ *Open/Closed Principle*. You can introduce new strategies without having to change the context.

❌ If you only have a couple of algorithms and they rarely change, there’s no real reason to overcomplicate the program with new classes and interfaces that come along with the pattern.

❌ Clients must be aware of the differences between strategies to be able to select a proper one.

❌ A lot of modern programming languages have functional type support that lets you implement different versions of an algorithm inside a set of anonymous functions. Then you could use these functions exactly as you’d have used the strategy objects, but without bloating your code with extra classes and interfaces.

END

---

START
NI-SZZ

K čemu slouží **Template Method** design pattern?

Back:

Umožňuje vytvořit funkci, která definuje strukturu nějakého algoritmu a volá nějaké metody, které reprezentují kroky daného algoritmu. Tyto metody potom mohou být přepsány v podtřídách.

Díky tomu takto vznikne "kostra" algoritmu a mohu v podtřídách přepisovat jednotlivé kroky algoritmu.

![](../../Assets/Pasted%20image%2020250130112928.png)

<!-- ExplanationStart -->

**PROBLEM:**
Imagine that you’re creating a data mining application that analyzes corporate documents. Users feed the app documents in various formats (PDF, DOC, CSV), and it tries to extract meaningful data from these docs in a uniform format.

The first version of the app could work only with DOC files. In the following version, it was able to support CSV files. A month later, you “taught” it to extract data from PDF files.

![](../../Assets/Pasted%20image%2020250130112940.png)

At some point, you noticed that all three classes have a lot of similar code. While the code for dealing with various data formats was entirely different in all classes, the code for data processing and analysis is almost identical. Wouldn’t it be great to get rid of the code duplication, leaving the algorithm structure intact?

There was another problem related to client code that used these classes. It had lots of conditionals that picked a proper course of action depending on the class of the processing object. If all three processing classes had a common interface or a base class, you’d be able to eliminate the conditionals in client code and use polymorphism when calling methods on a processing object.

**SOLUTION:**
The Template Method pattern suggests that you break down an algorithm into a series of steps, turn these steps into methods, and put a series of calls to these methods inside a single *template method.* The steps may either be `abstract`, or have some default implementation. To use the algorithm, the client is supposed to provide its own subclass, implement all abstract steps, and override some of the optional ones if needed (but not the template method itself).

Let’s see how this will play out in our data mining app. We can create a base class for all three parsing algorithms. This class defines a template method consisting of a series of calls to various document-processing steps.

![](../../Assets/Pasted%20image%2020250130112958.png)

At first, we can declare all steps `abstract`, forcing the subclasses to provide their own implementations for these methods. In our case, subclasses already have all necessary implementations, so the only thing we might need to do is adjust signatures of the methods to match the methods of the superclass.

Now, let’s see what we can do to get rid of the duplicate code. It looks like the code for opening/closing files and extracting/parsing data is different for various data formats, so there’s no point in touching those methods. However, implementation of other steps, such as analyzing the raw data and composing reports, is very similar, so it can be pulled up into the base class, where subclasses can share that code.

As you can see, we’ve got two types of steps:

- *abstract steps* must be implemented by every subclass
- *optional steps* already have some default implementation, but still can be overridden if needed

There’s another type of step, called *hooks*. A hook is an optional step with an empty body. A template method would work even if a hook isn’t overridden. Usually, hooks are placed before and after crucial steps of algorithms, providing subclasses with additional extension points for an algorithm.

<!-- ExplanationEnd -->

END

---

START
NI-SZZ

Jaká je struktura **Template Method** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130113005.png)

1. The **Abstract Class** declares methods that act as steps of an algorithm, as well as the actual template method which calls these methods in a specific order. The steps may either be declared `abstract` or have some default implementation.
2. **Concrete Classes** can override all of the steps, but not the template method itself.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250130113014.png)

<!-- ExampleEnd -->

Tags: diagram

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Template Method** design patternu? (2 + 3)

Back:

✅ You can let clients override only certain parts of a large algorithm, making them less affected by changes that happen to other parts of the algorithm.

✅ You can pull the duplicate code into a superclass.

❌ Some clients may be limited by the provided skeleton of an algorithm.

❌ You might violate the *Liskov Substitution Principle* by suppressing a default step implementation via a subclass.

❌ Template methods tend to be harder to maintain the more steps they have.

END

---

START
NI-SZZ

K čemu slouží **Visitor** design pattern?

Back:

Umožňuje mi oddělit algoritmy od objektů, na kterých pracují.

![](../../Assets/Pasted%20image%2020250130113142.png)

<!-- ExplanationStart -->

**PROBLEM:**
Imagine that your team develops an app which works with geographic information structured as one colossal graph. Each node of the graph may represent a complex entity such as a city, but also more granular things like industries, sightseeing areas, etc. The nodes are connected with others if there’s a road between the real objects that they represent. Under the hood, each node type is represented by its own class, while each specific node is an object.

![](../../Assets/Pasted%20image%2020250130113159.png)

At some point, you got a task to implement exporting the graph into XML format. At first, the job seemed pretty straightforward. You planned to add an export method to each node class and then leverage recursion to go over each node of the graph, executing the export method. The solution was simple and elegant: thanks to polymorphism, you weren’t coupling the code which called the export method to concrete classes of nodes.

Unfortunately, the system architect refused to allow you to alter existing node classes. He said that the code was already in production and he didn’t want to risk breaking it because of a potential bug in your changes.

![](../../Assets/Pasted%20image%2020250130113203.png)

Besides, he questioned whether it makes sense to have the XML export code within the node classes. The primary job of these classes was to work with geodata. The XML export behavior would look alien there.

There was another reason for the refusal. It was highly likely that after this feature was implemented, someone from the marketing department would ask you to provide the ability to export into a different format, or request some other weird stuff. This would force you to change those precious and fragile classes again.

**SOLUTION:**
The Visitor pattern suggests that you place the new behavior into a separate class called *visitor*, instead of trying to integrate it into existing classes. The original object that had to perform the behavior is now passed to one of the visitor’s methods as an argument, providing the method access to all necessary data contained within the object.

Now, what if that behavior can be executed over objects of different classes? For example, in our case with XML export, the actual implementation will probably be a little bit different across various node classes. Thus, the visitor class may define not one, but a set of methods, each of which could take arguments of different types, like this:

```javascript
class ExportVisitor implements Visitor is
    method doForCity(City c) { ... }
    method doForIndustry(Industry f) { ... }
    method doForSightSeeing(SightSeeing ss) { ... }
    // ...
```

But how exactly would we call these methods, especially when dealing with the whole graph? These methods have different signatures, so we can’t use polymorphism. To pick a proper visitor method that’s able to process a given object, we’d need to check its class. Doesn’t this sound like a nightmare?

```javascript
foreach (Node node in graph)
    if (node instanceof City)
        exportVisitor.doForCity((City) node)
    if (node instanceof Industry)
        exportVisitor.doForIndustry((Industry) node)
    // ...
}
```

You might ask, why don’t we use method overloading? That’s when you give all methods the same name, even if they support different sets of parameters. Unfortunately, even assuming that our programming language supports it at all (as Java and C# do), it won’t help us. Since the exact class of a node object is unknown in advance, the overloading mechanism won’t be able to determine the correct method to execute. It’ll default to the method that takes an object of the base `Node` class.

However, the Visitor pattern addresses this problem. It uses a technique called [Double Dispatch](https://courses.fit.cvut.cz/NI-ADP/materials/design-patterns/behavioral-patterns/visitor-double-dispatch.html), which helps to execute the proper method on an object without cumbersome conditionals. Instead of letting the client select a proper version of the method to call, how about we delegate this choice to objects we’re passing to the visitor as an argument? Since the objects know their own classes, they’ll be able to pick a proper method on the visitor less awkwardly. They “accept” a visitor and tell it what visiting method should be executed.

```javascript
// Client code
foreach (Node node in graph)
    node.accept(exportVisitor)

// City
class City is
    method accept(Visitor v) is
        v.doForCity(this)
    // ...

// Industry
class Industry is
    method accept(Visitor v) is
        v.doForIndustry(this)
    // ...
```

I confess. We had to change the node classes after all. But at least the change is trivial and it lets us add further behaviors without altering the code once again.

Now, if we extract a common interface for all visitors, all existing nodes can work with any visitor you introduce into the app. If you find yourself introducing a new behavior related to nodes, all you have to do is implement a new visitor class.

<!-- ExplanationEnd -->

END

---

START
NI-SZZ

Jaká je struktura **Visitor** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130113211.png)

1. The **Visitor** interface declares a set of visiting methods that can take concrete elements of an object structure as arguments. These methods may have the same names if the program is written in a language that supports overloading, but the type of their parameters must be different.
2. Each **Concrete Visitor** implements several versions of the same behaviors, tailored for different concrete element classes.
3. The **Element** interface declares a method for “accepting” visitors. This method should have one parameter declared with the type of the visitor interface.
4. Each **Concrete Element** must implement the acceptance method. The purpose of this method is to redirect the call to the proper visitor’s method corresponding to the current element class. Be aware that even if a base element class implements this method, all subclasses must still override this method in their own classes and call the appropriate method on the visitor object.
5. The **Client** usually represents a collection or some other complex object (for example, a [Composite](https://courses.fit.cvut.cz/NI-ADP/materials/design-patterns/structural-patterns/composite.html) tree). Usually, clients aren’t aware of all the concrete element classes because they work with objects from that collection via some abstract interface.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250130113259.png)

<!-- ExampleEnd -->

Tags: diagram

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Visitor** design patternu? (3 + 2)

Back:

✅ *Open/Closed Principle*. You can introduce a new behavior that can work with objects of different classes without changing these classes.

✅ *Single Responsibility Principle*. You can move multiple versions of the same behavior into the same class.

✅ A visitor object can accumulate some useful information while working with various objects. This might be handy when you want to traverse some complex object structure, such as an object tree, and apply the visitor to each object of this structure.

❌ You need to update all visitors each time a class gets added to or removed from the element hierarchy.

❌ Visitors might lack the necessary access to the private fields and methods of the elements that they’re supposed to work with.

END

---
