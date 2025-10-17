---
created: 2025-10-16T10:00:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SI-3 NI-ADP

> NI-SI-3 (NI-ADP)
> Strukturální návrhové vzory (Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy) a Non-GoF návrhové vzory (Lazy loading, Dependency injection)


START
NI-SZZ

Jaké jsou **structural design patterns**? (7)

Back:

- **Adapter**
- **Bridge**
- **Composite**
- **Decorator**
- **Facade**
- **Flyweight**
- **Proxy**

Tags: should-know N003F001
<!--ID: 1760705194456-->

END

---

### Adapter

START
NI-SZZ

K čemu slouží **Adapter** design pattern?

Back:

Umožňuje, aby spolu komunikovaly objekty, které mají nekompatibilní rozhraní.

![](../../../Assets/Pasted%20image%2020250130105353.png)

<!-- ExampleStart -->

Například `XMLToJSONAdapter`
![](../../../Assets/Pasted%20image%2020250130105429.png)

<!-- ExampleEnd -->

<!-- ExplanationStart -->

**PROBLEM:**
Imagine that you’re creating a stock market monitoring app. The app downloads the stock data from multiple sources in XML format and then displays nice-looking charts and diagrams for the user.

At some point, you decide to improve the app by integrating a smart 3rd-party analytics library. But there’s a catch: the analytics library only works with data in JSON format.

![](../../../Assets/Pasted%20image%2020250130105404.png)

You could change the library to work with XML. However, this might break some existing code that relies on the library. And worse, you might not have access to the library’s source code in the first place, making this approach impossible.

**SOLUTION:**
You can create an *adapter*. This is a special object that converts the interface of one object so that another object can understand it.

An adapter wraps one of the objects to hide the complexity of conversion happening behind the scenes. The wrapped object isn’t even aware of the adapter. For example, you can wrap an object that operates in meters and kilometers with an adapter that converts all of the data to imperial units such as feet and miles.

Adapters can not only convert data into various formats but can also help objects with different interfaces collaborate. Here’s how it works:

1. The adapter gets an interface, compatible with one of the existing objects.
2. Using this interface, the existing object can safely call the adapter’s methods.
3. Upon receiving a call, the adapter passes the request to the second object, but in a format and order that the second object expects.

Sometimes it’s even possible to create a two-way adapter that can convert the calls in both directions.

![](../../../Assets/Pasted%20image%2020250130105429.png)

Let’s get back to our stock market app. To solve the dilemma of incompatible formats, you can create XML-to-JSON adapters for every class of the analytics library that your code works with directly. Then you adjust your code to communicate with the library only via these adapters. When an adapter receives a call, it translates the incoming XML data into a JSON structure and passes the call to the appropriate methods of a wrapped analytics object.

<!-- ExplanationEnd -->

Tags: should-know N003F002
<!--ID: 1760705194459-->

END

---

START
NI-SZZ

Jaká je **Object adapter** struktura **Adapter** design patternu?

Back:

Adapter implementuje nějaké rozhraní.
![](../../../Assets/Pasted%20image%2020250130105441.png)

1. The **Client** is a class that contains the existing business logic of the program.
2. The **Client Interface** describes a protocol that other classes must follow to be able to collaborate with the client code.
3. The **Service** is some useful class (usually 3rd-party or legacy). The client can’t use this class directly because it has an incompatible interface.
4. The **Adapter** is a class that’s able to work with both the client and the service: it implements the client interface, while wrapping the service object. The adapter receives calls from the client via the adapter interface and translates them into calls to the wrapped service object in a format it can understand.
5. The client code doesn’t get coupled to the concrete adapter class as long as it works with the adapter via the client interface. Thanks to this, you can introduce new types of adapters into the program without breaking the existing client code. This can be useful when the interface of the service class gets changed or replaced: you can just create a new adapter class without changing the client code.

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250130105657.png)

<!-- ExampleEnd -->

Tags: should-know N003F003
<!--ID: 1760705194461-->

END

---

START
NI-SZZ

Jaká je **Class adapter** struktura **Adapter** design patternu?

Back:

Adapter dědí z dané classy a servicy. Toto lze využít pouze u jazyků, co umožňují multiple inheritance.

![](../../../Assets/Pasted%20image%2020250130105641.png)

1. The **Class Adapter** doesn’t need to wrap any objects because it inherits behaviors from both the client and the service. The adaptation happens within the overridden methods. The resulting adapter can be used in place of an existing client class.

Tags: should-know N003F004
<!--ID: 1760705194464-->

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Adapter** design patternu? (2 + 1)

Back:

✅ *Single Responsibility Principle*. You can separate the interface or data conversion code from the primary business logic of the program.

✅ *Open/Closed Principle*. You can introduce new types of adapters into the program without breaking the existing client code, as long as they work with the adapters through the client interface.

❌ The overall complexity of the code increases because you need to introduce a set of new interfaces and classes. Sometimes it’s simpler just to change the service class so that it matches the rest of your code.

Tags: should-know N003F005
<!--ID: 1760705194467-->

END

---

### Bridge

START
NI-SZZ

K čemu slouží **Bridge** design pattern?

Back:

Umožňuje to rozdělit nějakou velkou classu do více malých class, které spolu souvisí.

Tím rozdělím velkou třídu do dvou hierarchií - abstrakce a implementace.

![](../../../Assets/Pasted%20image%2020250130105740.png)

<!-- ExampleStart -->

Např. kdybychom měli třídu, která má dané vlastnosti, můžeme ty vlastnosti vytvořit jako vlastní třídy.

Např. zde bych musel vytvářet zbytečně moc tříd:
![](../../../Assets/Pasted%20image%2020250130105756.png)

Můžu to změnit následovně:
![](../../../Assets/Pasted%20image%2020250130105831.png)
`Shape` je **abstrakce**, `Color` je **implementace**.

<!-- ExampleEnd -->

<!-- ExplanationStart -->

**PROBLEM:**
*Abstraction?* *Implementation?* Sound scary? Stay calm and let’s consider a simple example.

Say you have a geometric `Shape` class with a pair of subclasses: `Circle` and `Square`. You want to extend this class hierarchy to incorporate colors, so you plan to create `Red` and `Blue` shape subclasses. However, since you already have two subclasses, you’ll need to create four class combinations such as `BlueCircle` and `RedSquare`.

![](../../../Assets/Pasted%20image%2020250130105756.png)

Adding new shape types and colors to the hierarchy will grow it exponentially. For example, to add a triangle shape you’d need to introduce two subclasses, one for each color. And after that, adding a new color would require creating three subclasses, one for each shape type. The further we go, the worse it becomes.

**SOLUTION:**
This problem occurs because we’re trying to extend the shape classes in two independent dimensions: by form and by color. That’s a very common issue with class inheritance.

The Bridge pattern attempts to solve this problem by switching from inheritance to the object composition. What this means is that you extract one of the dimensions into a separate class hierarchy, so that the original classes will reference an object of the new hierarchy, instead of having all of its state and behaviors within one class.

![](../../../Assets/Pasted%20image%2020250130105831.png)

Following this approach, we can extract the color-related code into its own class with two subclasses: `Red` and `Blue`. The `Shape` class then gets a reference field pointing to one of the color objects. Now the shape can delegate any color-related work to the linked color object. That reference will act as a bridge between the `Shape` and `Color` classes. From now on, adding new colors won’t require changing the shape hierarchy, and vice versa.

<!-- ExplanationEnd -->

Tags: should-know N003F006
<!--ID: 1760705194470-->

END

---

START
NI-SZZ

Jaká je struktura **Bridge** design patternu?

Back:

![](../../../Assets/Pasted%20image%2020250130105847.png)

1. The **Abstraction** provides high-level control logic. It relies on the implementation object to do the actual low-level work.
2. The **Implementation** declares the interface that’s common for all concrete implementations. An abstraction can only communicate with an implementation object via methods that are declared here.
   - The abstraction may list the same methods as the implementation, but usually the abstraction declares some complex behaviors that rely on a wide variety of primitive operations declared by the implementation.
3. **Concrete Implementations** contain platform-specific code.
4. **Refined Abstractions** provide variants of control logic. Like their parent, they work with different implementations via the general implementation interface.
5. Usually, the **Client** is only interested in working with the abstraction. However, it’s the client’s job to link the abstraction object with one of the implementation objects.

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250130105910.png)

<!-- ExampleEnd -->

Tags: should-know N003F007
<!--ID: 1760705194473-->

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Bridge** design patternu? (4 + 1)

Back:

✅ You can create platform-independent classes and apps.

✅ The client code works with high-level abstractions. It isn’t exposed to the platform details.

✅ *Open/Closed Principle*. You can introduce new abstractions and implementations independently from each other.

✅ *Single Responsibility Principle*. You can focus on high-level logic in the abstraction and on platform details in the implementation.

❌ You might make the code more complicated by applying the pattern to a highly cohesive class.

Tags: should-know N003F008
<!--ID: 1760705194476-->

END

---

### Composite

START
NI-SZZ

K čemu slouží **Composite** design pattern?

Back:

Umožňuje uspořádávat objekty do stromové struktury a pak s daným stromem pracovat jako kdyby to byl daný objekt.
![](../../../Assets/Pasted%20image%2020250130110008.png)

<!-- ExampleStart -->

- V listech můžu mít produkty `Product`.
- Ve vnitřních uzlech můžu mít `Composite` objekty, které se skládají buď z `Product` nebo dalších `Composite` objektů.

`Product` i `Composite` dědí z nějakého rozhraní. Každý pak má na sobě např. metodu `calculatePrice`. Díky tomu pak můžu na vrcholu té stromové struktury zavolat `calculatePrice` a ono mi to samo rekurzivně vypočítá cenu celého stromu.

Tzn. s celým stromem můžu zacházet jako s jedním objektem.

<!-- ExampleEnd -->

<!-- ExplanationStart -->

**PROBLEM:**
Using the Composite pattern makes sense only when the core model of your app can be represented as a tree.

For example, imagine that you have two types of objects: `Products` and `Boxes`. A `Box` can contain several `Products` as well as a number of smaller `Boxes`. These little `Boxes` can also hold some `Products` or even smaller `Boxes`, and so on.

Say you decide to create an ordering system that uses these classes. Orders could contain simple products without any wrapping, as well as boxes stuffed with products…and other boxes. How would you determine the total price of such an order?

![](../../../Assets/Pasted%20image%2020250130110018.png)

You could try the direct approach: unwrap all the boxes, go over all the products and then calculate the total. That would be doable in the real world; but in a program, it’s not as simple as running a loop. You have to know the classes of `Products` and `Boxes` you’re going through, the nesting level of the boxes and other nasty details beforehand. All of this makes the direct approach either too awkward or even impossible.

**SOLUTION:**
The Composite pattern suggests that you work with `Products` and `Boxes` through a common interface which declares a method for calculating the total price.

How would this method work? For a product, it’d simply return the product’s price. For a box, it’d go over each item the box contains, ask its price and then return a total for this box. If one of these items were a smaller box, that box would also start going over its contents and so on, until the prices of all inner components were calculated. A box could even add some extra cost to the final price, such as packaging cost.

![](../../../Assets/Pasted%20image%2020250130110030.png)

The greatest benefit of this approach is that you don’t need to care about the concrete classes of objects that compose the tree. You don’t need to know whether an object is a simple product or a sophisticated box. You can treat them all the same via the common interface. When you call a method, the objects themselves pass the request down the tree.

<!-- ExplanationEnd -->

Tags: should-know N003F009
<!--ID: 1760705194480-->

END

---

START
NI-SZZ

Jaká je struktura **Composite** design patternu?

Back:

![](../../../Assets/Pasted%20image%2020250130110036.png)

1. The **Component** interface describes operations that are common to both simple and complex elements of the tree.
2. The **Leaf** is a basic element of a tree that doesn’t have sub-elements.
   - Usually, leaf components end up doing most of the real work, since they don’t have anyone to delegate the work to.
3. The **Container** (aka *composite*) is an element that has sub-elements: leaves or other containers. A container doesn’t know the concrete classes of its children. It works with all sub-elements only via the component interface.
   - Upon receiving a request, a container delegates the work to its sub-elements, processes intermediate results and then returns the final result to the client.
4. The **Client** works with all elements through the component interface. As a result, the client can work in the same way with both simple or complex elements of the tree.

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250130110100.png)

<!-- ExampleEnd -->

Tags: should-know N003F010
<!--ID: 1760705194484-->

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Composite** design patternu? (2 + 1)

Back:

✅ You can work with complex tree structures more conveniently: use polymorphism and recursion to your advantage.

✅ *Open/Closed Principle*. You can introduce new element types into the app without breaking the existing code, which now works with the object tree.

❌ It might be difficult to provide a common interface for classes whose functionality differs too much. In certain scenarios, you’d need to overgeneralize the component interface, making it harder to comprehend.

Tags: should-know N003F011
<!--ID: 1760705194487-->

END

---

### Decorator

START
NI-SZZ

K čemu slouží **Decorator** design pattern?

Back:

Umožňuje přidávat objektům chování tak, že je obalí v dalším objektu.

![](../../../Assets/Pasted%20image%2020250130110144.png)

<!-- ExplanationStart -->

**PROBLEM:**
Imagine that you’re working on a notification library which lets other programs notify their users about important events.

The initial version of the library was based on the `Notifier` class that had only a few fields, a constructor and a single `send` method. The method could accept a message argument from a client and send the message to a list of emails that were passed to the notifier via its constructor. A third-party app which acted as a client was supposed to create and configure the notifier object once, and then use it each time something important happened.

![](../../../Assets/Pasted%20image%2020250130110207.png)

At some point, you realize that users of the library expect more than just email notifications. Many of them would like to receive an SMS about critical issues. Others would like to be notified on Facebook and, of course, the corporate users would love to get Slack notifications.

![](../../../Assets/Pasted%20image%2020250130110237.png)

How hard can that be? You extended the `Notifier` class and put the additional notification methods into new subclasses. Now the client was supposed to instantiate the desired notification class and use it for all further notifications.

But then someone reasonably asked you, “Why can’t you use several notification types at once? If your house is on fire, you’d probably want to be informed through every channel.”

You tried to address that problem by creating special subclasses which combined several notification methods within one class. However, it quickly became apparent that this approach would bloat the code immensely, not only the library code but the client code as well.

![](../../../Assets/Pasted%20image%2020250130110242.png)

You have to find some other way to structure notifications classes so that their number won’t accidentally break some Guinness record.

**SOLUTION:**
Extending a class is the first thing that comes to mind when you need to alter an object’s behavior. However, inheritance has several serious caveats that you need to be aware of.

- Inheritance is static. You can’t alter the behavior of an existing object at runtime. You can only replace the whole object with another one that’s created from a different subclass.
- Subclasses can have just one parent class. In most languages, inheritance doesn’t let a class inherit behaviors of multiple classes at the same time.

One of the ways to overcome these caveats is by using *Aggregation* or *Composition* *Aggregation*: object A contains objects B; B can live without A.  
_Composition_: object A consists of objects B; A manages life cycle of B; B can’t live without A. instead of _ Inheritance_. Both of the alternatives work almost the same way: one object *has a* reference to another and delegates it some work, whereas with inheritance, the object itself *is* able to do that work, inheriting the behavior from its superclass.

With this new approach you can easily substitute the linked “helper” object with another, changing the behavior of the container at runtime. An object can use the behavior of various classes, having references to multiple objects and delegating them all kinds of work. Aggregation/composition is the key principle behind many design patterns, including Decorator. On that note, let’s return to the pattern discussion.

![](../../../Assets/Pasted%20image%2020250130110302.png)

“Wrapper” is the alternative nickname for the Decorator pattern that clearly expresses the main idea of the pattern. A _ wrapper_ is an object that can be linked with some *target* object. The wrapper contains the same set of methods as the target and delegates to it all requests it receives. However, the wrapper may alter the result by doing something either before or after it passes the request to the target.

When does a simple wrapper become the real decorator? As I mentioned, the wrapper implements the same interface as the wrapped object. That’s why from the client’s perspective these objects are identical. Make the wrapper’s reference field accept any object that follows that interface. This will let you cover an object in multiple wrappers, adding the combined behavior of all the wrappers to it.

In our notifications example, let’s leave the simple email notification behavior inside the base `Notifier` class, but turn all other notification methods into decorators.

![](../../../Assets/Pasted%20image%2020250130110307.png)

The client code would need to wrap a basic notifier object into a set of decorators that match the client’s preferences. The resulting objects will be structured as a stack.

![](../../../Assets/Pasted%20image%2020250130110315.png)

The last decorator in the stack would be the object that the client actually works with. Since all decorators implement the same interface as the base notifier, the rest of the client code won’t care whether it works with the “pure” notifier object or the decorated one.

We could apply the same approach to other behaviors such as formatting messages or composing the recipient list. The client can decorate the object with any custom decorators, as long as they follow the same interface as the others.

<!-- ExplanationEnd -->

Tags: should-know N003F012
<!--ID: 1760705194490-->

END

---

START
NI-SZZ

Jaká je struktura **Decorator** design patternu?

Back:

![](../../../Assets/Pasted%20image%2020250130110322.png)

1. The **Component** declares the common interface for both wrappers and wrapped objects.
2. **Concrete Component** is a class of objects being wrapped. It defines the basic behavior, which can be altered by decorators.
3. The **Base Decorator** class has a field for referencing a wrapped object. The field’s type should be declared as the component interface so it can contain both concrete components and decorators. The base decorator delegates all operations to the wrapped object.
4. **Concrete Decorators** define extra behaviors that can be added to components dynamically. Concrete decorators override methods of the base decorator and execute their behavior either before or after calling the parent method.
5. The **Client** can wrap components in multiple layers of decorators, as long as it works with all objects via the component interface.

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250130110336.png)

<!-- ExampleEnd -->

Tags: should-know N003F013
<!--ID: 1760705194494-->

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Decorator** design patternu? (4 + 3)

Back:

✅ You can extend an object’s behavior without making a new subclass.

✅ You can add or remove responsibilities from an object at runtime.

✅ You can combine several behaviors by wrapping an object into multiple decorators.

✅ *Single Responsibility Principle*. You can divide a monolithic class that implements many possible variants of behavior into several smaller classes.

❌ It’s hard to remove a specific wrapper from the wrappers stack.

❌ It’s hard to implement a decorator in such a way that its behavior doesn’t depend on the order in the decorators stack.

❌ The initial configuration code of layers might look pretty ugly.

Tags: should-know N003F014
<!--ID: 1760705194497-->

END

---

### Facade

START
NI-SZZ

K čemu slouží **Facade** design pattern?

Back:

Zprostředkovává komunikaci mezi klientem a nějakým komplexnějším systémem (frameworkem, knihovnou, sadou tříd atd.)

Díky tomu poskytuje jednoduché "rozhraní", skrze které lze komunikovat se složitějším systémem.

![](../../../Assets/Pasted%20image%2020250130110418.png)

<!-- ExplanationStart -->

**PROBLEM:**
Imagine that you must make your code work with a broad set of objects that belong to a sophisticated library or framework. Ordinarily, you’d need to initialize all of those objects, keep track of dependencies, execute methods in the correct order, and so on.

As a result, the business logic of your classes would become tightly coupled to the implementation details of 3rd-party classes, making it hard to comprehend and maintain.

**SOLUTION:**
A facade is a class that provides a simple interface to a complex subsystem which contains lots of moving parts. A facade might provide limited functionality in comparison to working with the subsystem directly. However, it includes only those features that clients really care about.

Having a facade is handy when you need to integrate your app with a sophisticated library that has dozens of features, but you just need a tiny bit of its functionality.

For instance, an app that uploads short funny videos with cats to social media could potentially use a professional video conversion library. However, all that it really needs is a class with the single method `encode(filename, format)` . After creating such a class and connecting it with the video conversion library, you’ll have your first facade.

<!-- ExplanationEnd -->

Tags: should-know N003F015
<!--ID: 1760705194501-->

END

---

START
NI-SZZ

Jaká je struktura **Facade** design patternu?

Back:

![](../../../Assets/Pasted%20image%2020250130110443.png)

1. The **Facade** provides convenient access to a particular part of the subsystem’s functionality. It knows where to direct the client’s request and how to operate all the moving parts.
2. An **Additional Facade** class can be created to prevent polluting a single facade with unrelated features that might make it yet another complex structure. Additional facades can be used by both clients and other facades.
3. The **Complex Subsystem** consists of dozens of various objects. To make them all do something meaningful, you have to dive deep into the subsystem’s implementation details, such as initializing objects in the correct order and supplying them with data in the proper format.
   - Subsystem classes aren’t aware of the facade’s existence. They operate within the system and work with each other directly.
4. The **Client** uses the facade instead of calling the subsystem objects directly.

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250130110500.png)

<!-- ExampleEnd -->

Tags: should-know N003F016
<!--ID: 1760705194504-->

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Facade** design patternu? (1 + 1)

Back:

✅ You can isolate your code from the complexity of a subsystem.

❌ A facade can become a god object coupled to all classes of an app.

Tags: should-know N003F017
<!--ID: 1760705194507-->

END

---

### Flyweight

START
NI-SZZ

K čemu slouží **Flyweight** design pattern?

Back:

Umožňuje mi sdílet paměť pro stejné části objektů, místo toho, aby byla každá část uložena v každém objektu zvlášť. Díky tomu mohu šetřit místo v paměti.

![](../../../Assets/Pasted%20image%2020250130110545.png)

<!-- ExampleStart -->

U her mám jedno místo pro texturu a herní objekty jen odkazují na tu texturu, než aby ji měl každý uložený u sebe. Díky tomu ušetřím opravdu hodně paměti.

<!-- ExampleEnd -->

<!-- ExplanationStart -->

**PROBLEM:**
To have some fun after long working hours, you decided to create a simple video game: players would be moving around a map and shooting each other. You chose to implement a realistic particle system and make it a distinctive feature of the game. Vast quantities of bullets, missiles, and shrapnel from explosions should fly all over the map and deliver a thrilling experience to the player.

Upon its completion, you pushed the last commit, built the game and sent it to your friend for a test drive. Although the game was running flawlessly on your machine, your friend wasn’t able to play for long. On his computer, the game kept crashing after a few minutes of gameplay. After spending several hours digging through debug logs, you discovered that the game crashed because of an insufficient amount of RAM. It turned out that your friend’s rig was much less powerful than your own computer, and that’s why the problem emerged so quickly on his machine.

The actual problem was related to your particle system. Each particle, such as a bullet, a missile or a piece of shrapnel was represented by a separate object containing plenty of data. At some point, when the carnage on a player’s screen reached its climax, newly created particles no longer fit into the remaining RAM, so the program crashed.

![](../../../Assets/Pasted%20image%2020250130110558.png)

**SOLUTION:**
On closer inspection of the `Particle` class, you may notice that the color and sprite fields consume a lot more memory than other fields. What’s worse is that these two fields store almost identical data across all particles. For example, all bullets have the same color and sprite.

![](../../../Assets/Pasted%20image%2020250130110631.png)

Other parts of a particle’s state, such as coordinates, movement vector and speed, are unique to each particle. After all, the values of these fields change over time. This data represents the always changing context in which the particle exists, while the color and sprite remain constant for each particle.

This constant data of an object is usually called the *intrinsic state*. It lives within the object; other objects can only read it, not change it. The rest of the object’s state, often altered “from the outside” by other objects, is called the *extrinsic state*.

The Flyweight pattern suggests that you stop storing the extrinsic state inside the object. Instead, you should pass this state to specific methods which rely on it. Only the intrinsic state stays within the object, letting you reuse it in different contexts. As a result, you’d need fewer of these objects since they only differ in the intrinsic state, which has much fewer variations than the extrinsic.

![](../../../Assets/Pasted%20image%2020250130110645.png)

Let’s return to our game. Assuming that we had extracted the extrinsic state from our particle class, only three different objects would suffice to represent all particles in the game: a bullet, a missile, and a piece of shrapnel. As you’ve probably guessed by now, an object that only stores the intrinsic state is called a flyweight.

<!-- ExplanationEnd -->

Tags: should-know N003F018
<!--ID: 1760705194510-->

END

---

START
NI-SZZ

Jaká je struktura **Flyweight** design patternu?

Back:

![](../../../Assets/Pasted%20image%2020250130110652.png)

1. The Flyweight pattern is merely an optimization. Before applying it, make sure your program does have the RAM consumption problem related to having a massive number of similar objects in memory at the same time. Make sure that this problem can’t be solved in any other meaningful way.
2. The **Flyweight** class contains the portion of the original object’s state that can be shared between multiple objects. The same flyweight object can be used in many different contexts. The state stored inside a flyweight is called *intrinsic.* The state passed to the flyweight’s methods is called *extrinsic.*
3. The **Context** class contains the extrinsic state, unique across all original objects. When a context is paired with one of the flyweight objects, it represents the full state of the original object.
4. Usually, the behavior of the original object remains in the flyweight class. In this case, whoever calls a flyweight’s method must also pass appropriate bits of the extrinsic state into the method’s parameters. On the other hand, the behavior can be moved to the context class, which would use the linked flyweight merely as a data object.
5. The **Client** calculates or stores the extrinsic state of flyweights. From the client’s perspective, a flyweight is a template object which can be configured at runtime by passing some contextual data into parameters of its methods.
6. The **Flyweight Factory** manages a pool of existing flyweights. With the factory, clients don’t create flyweights directly. Instead, they call the factory, passing it bits of the intrinsic state of the desired flyweight. The factory looks over previously created flyweights and either returns an existing one that matches search criteria or creates a new one if nothing is found.

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250130110709.png)

<!-- ExampleEnd -->

Tags: should-know N003F019
<!--ID: 1760705194513-->

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Flyweight** design patternu? (1 + 2)

Back:

✅ You can save lots of RAM, assuming your program has tons of similar objects.

❌ You might be trading RAM over CPU cycles when some of the context data needs to be recalculated each time somebody calls a flyweight method.

❌ The code becomes much more complicated. New team members will always be wondering why the state of an entity was separated in such a way.

Tags: should-know N003F020
<!--ID: 1760705194521-->

END

---

### Proxy

START
NI-SZZ

K čemu slouží **Proxy** design pattern?

Back:

Umožňuje udělat náhradu za původní objekt a například kontrolovat komunikaci mezi daným objektem a vnějším prostředím.

Pro klienta to tedy vypadá jako že komunikuju přímo s tím objektem, ale při tom tam můžu mít několik vrstev proxy.

![](../../../Assets/Pasted%20image%2020250130110748.png)

<!-- ExplanationStart -->

**PROBLEM:**
Why would you want to control access to an object? Here is an example: you have a massive object that consumes a vast amount of system resources. You need it from time to time, but not always.

![](../../../Assets/Pasted%20image%2020250130110758.png)

You could implement lazy initialization: create this object only when it’s actually needed. All of the object’s clients would need to execute some deferred initialization code. Unfortunately, this would probably cause a lot of code duplication.

In an ideal world, we’d want to put this code directly into our object’s class, but that isn’t always possible. For instance, the class may be part of a closed 3rd-party library.

**SOLUTION:**
The Proxy pattern suggests that you create a new proxy class with the same interface as an original service object. Then you update your app so that it passes the proxy object to all of the original object’s clients. Upon receiving a request from a client, the proxy creates a real service object and delegates all the work to it.

![](../../../Assets/Pasted%20image%2020250130110809.png)

But what’s the benefit? If you need to execute something either before or after the primary logic of the class, the proxy lets you do this without changing that class. Since the proxy implements the same interface as the original class, it can be passed to any client that expects a real service object.

<!-- ExplanationEnd -->

Tags: should-know N003F021
<!--ID: 1760705194525-->

END

---

START
NI-SZZ

Jaká je struktura **Proxy** design patternu?

Back:

![](../../../Assets/Pasted%20image%2020250130110815.png)

1. The **Service Interface** declares the interface of the Service. The proxy must follow this interface to be able to disguise itself as a service object.
2. The **Service** is a class that provides some useful business logic.
3. The **Proxy** class has a reference field that points to a service object. After the proxy finishes its processing ( e.g., lazy initialization, logging, access control, caching, etc.), it passes the request to the service object.
4. The **Client** should work with both services and proxies via the same interface. This way you can pass a proxy into any code that expects a service object.

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250130110831.png)

<!-- ExampleEnd -->

Tags: should-know N003F022
<!--ID: 1760705194528-->

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Proxy** design patternu? (4 + 2)

Back:

✅ You can control the service object without clients knowing about it.

✅ You can manage the lifecycle of the service object when clients don’t care about it.

✅ The proxy works even if the service object isn’t ready or is not available.

✅ *Open/Closed Principle*. You can introduce new proxies without changing the service or clients.

❌ The code may become more complicated since you need to introduce a lot of new classes.

❌ The response from the service might get delayed.

Tags: should-know N003F023
<!--ID: 1760705194531-->

END

---

### Non-GoF vzory

#### Lazy loading

START
NI-SZZ

Jak funguje **Lazy loading**?

Back:

Funguje tak, že se data nezačnou načítat, dokud nejsou skutečně potřeba.

<!-- ExampleStart -->

Na webových stránkách se načtou obrázky, až když k nim uživatel doscrolluje dostatečně blízko.

<!-- ExampleEnd -->

**Výhody:**

- **Snižuje to initial load time**
- **Šetří to komunikaci a zdroje** - nepřistupuje se tak moc do databáze, neposílá se tolik requestů

Tags: should-know N003F024
<!--ID: 1760705194534-->

END

---

START
NI-SZZ

Jakými způsoby lze implementovat **lazy loading**? (4)

Back:

- **Lazy initialization** - objekt se nastaví na null, až když je požadován, tak se zkontroluje jestli je null a pokud ano, tak se loadne.
- **Virtual proxy** - při přístupu k objektu se zavolá virtuální objekt se stejným rozhraním. Ten pak načte daný objekt a přepošle mu požadavek.
- **Ghost** - loadne se objekt s částečným stavem (např. placeholder), když je to potřeba, objekt vyplní svoje data
- **Value holder** - generický objekt se stará o lazy loading, tento objekt se používá místo nějaké proměnné data objektu

Tags: should-know N003F025
<!--ID: 1760705194537-->

END

---

#### Dependency injection

START
NI-SZZ

Jak funguje **Dependency Injection**?

Back:

Závislosti mezi 2 třídami mohou být vytvořeny následovně:

1. **Tight coupling**: Třída vytvoří objekt, který potřebuje.
2. **Získání odjinud**: Třída si získá objekt z nějakého frameworku
3. **Dependency injection**: Třída dostane objekt v parametrech konstruktoru nebo metody.

<!-- DetailInfoStart -->

Classes often require references to other classes. For example, a `Car` class might need a reference to an `Engine` class. These required classes are called dependencies, and in this example the `Car` class is dependent on having an instance of the `Engine` class to run.

There are three ways for a class to get an object it needs:

1. The class constructs the dependency it needs. In the example above, `Car` would create and initialize its own instance of `Engine`.
2. Grab it from somewhere else. Frameworks and libraries can provide created instances of its classes.
3. Have it supplied as a parameter. The app can provide these dependencies when the class is constructed or pass them in to the functions that need each dependency. In the example above, the `Car` constructor would receive `Engine` as a parameter. The third option is dependency injection! With this approach you take the dependencies of a class and provide them rather than having the class instance obtain them itself.

Here’s an example. Without dependency injection, representing a `Car` that creates its own `Engine` dependency in code looks like this:

```java
class Car {

  private Engine engine = new Engine();

  public void start() {
    engine.start();
  }
}

class MyApp {
  public static void main(String[] args) {
    Car car = new Car();
    car.start();
  }
}
```

This is not an example of dependency injection because the `Car` class is constructing its own `Engine`. This can be problematic because:

- `Car` and `Engine` are tightly coupled - an instance of `Car` uses one type of `Engine`, and no subclasses or alternative implementations can easily be used. If the `Car` were to construct its own `Engine`, you would have to create two types of `Car` instead of just reusing the same `Car` for engines of type `Gas` and `Electric`.
- The hard dependency on `Engine` makes testing more difficult. `Car` uses a real instance of `Engine`, thus preventing you from using a mock to modify `Engine` for different test cases.

What does the code look like with dependency injection? Instead of each instance of `Car` constructing its own `Engine` object on initialization, it receives an `Engine` object as a parameter in its constructor:

```java
class Car {

  private final Engine engine;

  public Car(Engine engine) {
    this.engine = engine;
  }

  public void start() {
    engine.start();
  }
}

class MyApp {
  public static void main(String[] args) {
    Engine engine = new Engine();
    Car car = new Car(engine);
    car.start();
  }
}
```

The main function uses `Car`. Because `Car` depends on `Engine`, the app creates an instance of `Engine` and then uses it to construct an instance of `Car`. The benefits of this DI-based approach are:

- Reusability of `Car`. You can pass in different implementations of `Engine` to `Car`. For example, you might define a new subclass of `Engine` called `ElectricEngine` that you want `Car` to use. If you use DI, all you need to do is pass in an instance of the updated `ElectricEngine` subclass, and `Car` still works without any further changes.
- Easy testing of `Car`. You can pass in test doubles to test your different scenarios. For example, you might create a test double of `Engine` called `FakeEngine` and configure it for different tests.

There are two major ways to do dependency injection:

- **Constructor Injection**. This is the way described above. You pass the dependencies of a class to its constructor.
- **Field Injection (or Setter Injection)**. With field injection, dependencies are instantiated after the class is created. The code would look like this:

```java
class Car {

  private Engine engine;

  public void setEngine(Engine engine) {
    this.engine = engine;
  }

  public void start() {
    engine.start();
  }
}

class MyApp {
  public static void main(String[] args) {
    Car car = new Car();
    car.setEngine(new Engine());
    car.start();
  }
}
```

<!-- DetailInfoEnd -->

Tags: should-know N003F026
<!--ID: 1760705194540-->

END

---

START
NI-SZZ

Jak funguje **automatizovaná dependency injection**?

Back:

To, že používáme nějaký framework k tomu, aby injektoval dependencies za nás.

<!-- DetailInfoStart -->

In the previous example, you created, provided, and managed the dependencies of the different classes yourself, without relying on a library. This is called *dependency injection by hand*, or *manual dependency injection*. In the `Car` example, there was only one dependency, but more dependencies and classes can make manual injection of dependencies more tedious. Manual dependency injection also presents several problems:

- For big apps, taking all the dependencies and connecting them correctly can require a large amount of boilerplate code. In a multi-layered architecture, in order to create an object for a top layer, you have to provide all the dependencies of the layers below it. As a concrete example, to build a real car you might need an engine, a transmission, a chassis, and other parts; and an engine in turn needs cylinders and spark plugs.
- When you’re not able to construct dependencies before passing them in — for example when using lazy initializations or scoping objects to flows of your app — you need to write and maintain a custom container (or graph of dependencies) that manages the lifetimes of your dependencies in memory.

There are libraries that solve this problem by automating the process of creating and providing dependencies. They fit into two categories:

- Reflection-based solutions that connect dependencies at runtime.
- Static solutions that generate the code to connect dependencies at compile time.

<!-- DetailInfoEnd -->

Tags: should-know N003F027
<!--ID: 1760705194542-->

END

---
